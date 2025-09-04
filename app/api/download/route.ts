import { type NextRequest, NextResponse } from "next/server"
import { spawn } from "child_process"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const { url, format } = await request.json()

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 })
    }

    // Validate URL format (basic YouTube URL validation)
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
    if (!youtubeRegex.test(url)) {
      return NextResponse.json({ success: false, error: "Please provide a valid YouTube URL" }, { status: 400 })
    }

    // Execute Python script
    const scriptPath = path.join(process.cwd(), "scripts", "download_video.py")
    const formatType = format === "mp3" ? "audio" : "video"

    return new Promise((resolve) => {
      const pythonProcess = spawn("python3", [scriptPath, url, formatType])

      let output = ""
      let errorOutput = ""

      pythonProcess.stdout.on("data", (data) => {
        output += data.toString()
      })

      pythonProcess.stderr.on("data", (data) => {
        errorOutput += data.toString()
      })

      pythonProcess.on("close", (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(output.trim())
            resolve(NextResponse.json(result))
          } catch (parseError) {
            resolve(
              NextResponse.json(
                {
                  success: false,
                  error: "Failed to parse download result",
                },
                { status: 500 },
              ),
            )
          }
        } else {
          resolve(
            NextResponse.json(
              {
                success: false,
                error: errorOutput || "Download failed",
              },
              { status: 500 },
            ),
          )
        }
      })

      // Set timeout for long-running downloads
      setTimeout(() => {
        pythonProcess.kill()
        resolve(
          NextResponse.json(
            {
              success: false,
              error: "Download timeout - please try again",
            },
            { status: 408 },
          ),
        )
      }, 300000) // 5 minutes timeout
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
