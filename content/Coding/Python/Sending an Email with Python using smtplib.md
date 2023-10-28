Before running this code, replace `my_email`, `password`, and the recipient's email address with your actual email credentials. This code sends a simple email using the Gmail SMTP server, but you may need to enable "Less secure apps" or use an "App Password" in your Gmail settings if you encounter authentication issues.

This Python script demonstrates how to send an email using the `smtplib` library.

```python
import smtplib 

# Your email credentials 
my_email = "test@gmail.com" 
password = "test123" 

# Establish a connection to the SMTP server (Gmail in this case) 
connection = smtplib.SMTP("smtp.gmail.com", 587) 

# Initiate a TLS (Transport Layer Security) connection 
connection.starttls() 

# Log in to your email account 
connection.login(user=my_email, password=password) 

# Compose and send the email 
connection.sendmail(from_addr=my_email, to_addrs="recipientemail@gmail.com", msg="Hello, World") 

# Close the connection 
connection.close()
```