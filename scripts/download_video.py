import yt_dlp
import sys
import json
import os
from pathlib import Path

def download_video(url, format_type="video"):
    """
    Download video or audio from YouTube URL using yt-dlp
    """
    try:
        # Create downloads directory if it doesn't exist
        downloads_dir = Path("public/downloads")
        downloads_dir.mkdir(exist_ok=True)
        
        # Configure yt-dlp options
        if format_type == "audio":
            ydl_opts = {
                'format': 'bestaudio/best',
                'outtmpl': str(downloads_dir / '%(title)s.%(ext)s'),
                'postprocessors': [{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                    'preferredquality': '192',
                }],
                'extractflat': False,
                'writethumbnail': False,
                'writeinfojson': False,
                'noplaylist': True,
            }
        else:  # video
            ydl_opts = {
                'format': 'best[height<=720]/best',
                'outtmpl': str(downloads_dir / '%(title)s.%(ext)s'),
                'extractflat': False,
                'writethumbnail': False,
                'writeinfojson': False,
                'noplaylist': True,
            }
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            # Extract info first
            info = ydl.extract_info(url, download=False)
            title = info.get('title', 'Unknown')
            duration = info.get('duration', 0)
            thumbnail = info.get('thumbnail', '')
            
            # Download the file
            ydl.download([url])
            
            # Return success response
            result = {
                'success': True,
                'title': title,
                'duration': duration,
                'thumbnail': thumbnail,
                'format': format_type,
                'message': f'Successfully downloaded: {title}'
            }
            
            print(json.dumps(result))
            return result
            
    except Exception as e:
        error_result = {
            'success': False,
            'error': str(e),
            'message': f'Failed to download: {str(e)}'
        }
        print(json.dumps(error_result))
        return error_result

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({'success': False, 'error': 'URL is required'}))
        sys.exit(1)
    
    url = sys.argv[1]
    format_type = sys.argv[2] if len(sys.argv) > 2 else "video"
    
    download_video(url, format_type)
