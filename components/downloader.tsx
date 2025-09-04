"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Loader2, CheckCircle, AlertCircle, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

type FormatType = "video" | "audio"
type DownloadState = "idle" | "loading" | "success" | "error"

const formats = [
  { id: "video" as FormatType, label: "Video MP4", icon: "🎥" },
  { id: "audio" as FormatType, label: "Audio MP3", icon: "🎵" },
]

export function Downloader() {
  const [url, setUrl] = useState("")
  const [selectedFormat, setSelectedFormat] = useState<FormatType>("video")
  const [downloadState, setDownloadState] = useState<DownloadState>("idle")
  const [progress, setProgress] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")

  const isValidYouTubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
    return youtubeRegex.test(url)
  }

  const handleDownload = async () => {
    if (!url.trim()) return

    if (!isValidYouTubeUrl(url)) {
      setDownloadState("error")
      setErrorMessage("Please provide a valid YouTube URL")
      setTimeout(() => setDownloadState("idle"), 3000)
      return
    }

    setDownloadState("loading")
    setProgress(0)
    setErrorMessage("")

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + Math.random() * 10 + 2
      })
    }, 500)

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          format: selectedFormat, // Send "video" or "audio" directly
        }),
      })

      const result = await response.json()

      clearInterval(progressInterval)
      setProgress(100)

      if (result.success) {
        setDownloadState("success")
        // Reset form after success
        setTimeout(() => {
          setUrl("")
          setDownloadState("idle")
          setProgress(0)
        }, 3000)
      } else {
        setDownloadState("error")
        setErrorMessage(result.error || "Download failed")
        setTimeout(() => setDownloadState("idle"), 5000)
      }
    } catch (error) {
      clearInterval(progressInterval)
      setDownloadState("error")
      setErrorMessage("Network error - please try again")
      setTimeout(() => setDownloadState("idle"), 5000)
    }
  }

  const resetDownload = () => {
    setDownloadState("idle")
    setProgress(0)
    setErrorMessage("")
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/20 shadow-2xl">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* URL Input */}
              <div className="space-y-2">
                <label htmlFor="url" className="text-sm font-medium text-foreground">
                  Paste your YouTube URL
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://youtube.com/watch?v=..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-10 h-12 text-base"
                    disabled={downloadState === "loading"}
                  />
                </div>
              </div>

              {/* Format Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Choose format</label>
                <div className="grid grid-cols-2 gap-4">
                  {formats.map((format) => (
                    <motion.button
                      key={format.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedFormat(format.id)}
                      className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all",
                        selectedFormat === format.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50 hover:bg-accent",
                      )}
                      disabled={downloadState === "loading"}
                    >
                      <span className="text-2xl mb-1">{format.icon}</span>
                      <span className="text-sm font-medium">{format.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <motion.div
                whileHover={{ scale: downloadState === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: downloadState === "idle" ? 0.98 : 1 }}
              >
                <Button
                  onClick={downloadState === "success" || downloadState === "error" ? resetDownload : handleDownload}
                  disabled={!url.trim() || downloadState === "loading"}
                  className="w-full h-14 text-lg font-semibold relative overflow-hidden"
                  size="lg"
                >
                  <AnimatePresence mode="wait">
                    {downloadState === "idle" && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center space-x-2"
                      >
                        <Download className="h-5 w-5" />
                        <span>Download Now</span>
                      </motion.div>
                    )}

                    {downloadState === "loading" && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center space-x-2"
                      >
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Downloading... {Math.round(progress)}%</span>
                      </motion.div>
                    )}

                    {downloadState === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-5 w-5" />
                        <span>Download Complete!</span>
                      </motion.div>
                    )}

                    {downloadState === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center space-x-2"
                      >
                        <AlertCircle className="h-5 w-5" />
                        <span>Try Again</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              {/* Progress Bar */}
              <AnimatePresence>
                {downloadState === "loading" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      {selectedFormat === "video" ? "Processing video..." : "Extracting audio..."}
                    </p>
                  </motion.div>
                )}

                {downloadState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Download completed successfully! Check your downloads folder.
                    </p>
                  </motion.div>
                )}

                {downloadState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800"
                  >
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      {errorMessage || "Download failed. Please check if the URL is valid and accessible."}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
