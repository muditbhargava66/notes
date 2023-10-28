### Download YouTube Videos with Python using Pytube 

This Python script demonstrates how to download YouTube videos using the `pytube` library.

```python
# Install pytube using pip 
# pip install pytube 
import pytube 

# Input the YouTube Video URL 
link = input('Enter YouTube Video URL: ') 

# Create a YouTube object 
yt = pytube.YouTube(link) 

# Download the video stream with the highest available quality 
yt.streams.first().download() 

# Confirm the download 
print('Downloaded', link)
```