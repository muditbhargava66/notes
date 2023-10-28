In this example, we'll use the `pyqrcode` library to generate QR codes for a given URL and save them in both SVG and PNG formats.

```python
# Import Required Libraries
import pygrcode import png
from pyrcode import QRCode

# Define the URL you want to encode as a QR code 
url = "www.google.com"

# Generate a QR code 
qr = QRCode(url) 

# Create and save the SVG file named "myqr.svg" 
qr.svg("myqr.svg", scale=8)

# Generate a QR code (You may need to recreate it, as we redefined the variable) 
qr = QRCode(url) 

# Create and save the PNG file named "myqr.png" 
qr.png("myqr.png", scale=6)
```