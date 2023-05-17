# Major_Project_In_NEM

NodeJS, Express, Express-EJS-Layout, Mongoose

# Steps to run the application

- Step 1: Open the app in vs code. 
- Step 2: Pull the repository
- Step 3: Install npm using command : npm install
- Step 4: Run the application using command : npm start 
- Step 5: Open any web browser type : localhost:8000

======================================

# Passport JWT Authentication

Here we uses two library and implemented in api
- 1. passport-jwt
- 2. jsonwebtoken

API URLs

- 1. http://localhost:8000/users/api
- 2. http://localhost:8000/users/createSession

# Passport Google Oauth2

In this module we uses 
- 1. passport-google-oauth
- 2. crypt

## Creating Credentials on Google Developer Console

- Go on https://console.cloud.google.com/ and create a new app
- Step 1: Go to { My Projects } where you have your list of projects and click on a
{new project }
- Step 2: Give the name of your project ( codeial -sample ) and click on {create it}
- Step 3: Go on to the title project and click on create credentials
- Step 4: Credentials are for OAuth -2
- Step 5: Click on the option to create credentials, there we need to click on OAuth client ID.
Warning - To create an OAuth client ID you must first set up the product name on
the consent screen.
- Step 6: Click on the configure consent screen
- Step 7: Give your application name there and leave the rest of the fields empty for now and
save it.
- Step 8: The application type is a web application, the name will be the name of your project.
- Step 9: In Authorized Javascripts origin fill { http://localhost:8000 }.
- Step 10: In Authorized redirect URLs fill {http://localhost:8000/users/auth/google/callback
}[ For call back URL we need to mention it here and in code also ].
- Step 11: Click on the create button to create credentials.
- Step 12: You will be getting your client ID and client secret.

Video Link: https://youtu.be/YLgitmvTQbA

(If getting any error, Ping me in Youtube channel comment box)

======================================

Like, share and subscribe to my channel for more updates.
https://www.youtube.com/@codreal

For Support:
Paytm: https://paytm.me/SV-tdQC

Thank You
