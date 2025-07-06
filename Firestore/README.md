
# Firestore INSTALLATION
 npx create-vite@latest Firestore --template react-ts
cd Firestore
npm install
npm run dev

# INSTALLING FIREBASEE
npm install firebase

# Creating a firebase Project

https://console.firebase.google.com/?pli=1

# After creating a project, Add Functionalities(authentication, firestore, storage or hosting)

1. Choose chose Cloud firestore
2. Create database
3. Select start in test mode(starting in production prevent database manupulation)
4. create
2. Now project has credentials to use in react applications
3. In react application, create:firebaseConfig.ts

4.  Go to settings -Project Settings
5. Click </>
6. Register the application
7. After the app is registed, the credentials are available to be copied and pasted in their file
8. Click "Continue to COnsole"