## REACT NATIVE : HOW TO BUILD APK WITH EXPO
Installation required : 	
 - Node.js and npm
 -  Expo cli ( npm install -g expo-cli )
 -  Eas cli ( npm install -g eas-cli)
 
Steps to create native app :
 1. npx create-expo-app --template
 2. Select blank template and name your projects
 3. Develop your application logic and user interface according to your project
 4. Now in terminal type the following commands : eas build -p android
 5. Now fill in the details and use expo login if you haven't created an expo account yet
 6. The above command will create and aab file to create an apk, there might be a eas.json file on it and edit as you want
 7. Enter this command in the terminal: eas build -p android --profile preview
 8. You have created an apk now use it as you want
