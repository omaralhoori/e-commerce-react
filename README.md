## Install Dependencies
to run the project you need to install all modules

### `npm install`



## Add Firebase Functionality
Create a new project in firebase console then create a new web app.
Copy config data that they will give you to the clipboard, 
you need to create `config.data.js` file under `/src/firebase`
and will paste config data inside the file, it will be look like

```
const CONFIG_DATA = {
    apiKey: "AIzaSyBYUBRZSgJilp3GKuIsrqQBTmXzE",
    authDomain: "ecommerce-react-1225a.firebaseapp.com",
    databaseURL: "https://ecommerce-react-1225a.firebaseio.com",
    projectId: "ecommerce-react-1225a",
    storageBucket: "ecommerce-react-1225a.appspot.com",
    messagingSenderId: "234245561048",
    appId: "1:234245561048:web:072395450e4xd648d83e65",
    measurementId: "G-XWEVSCZGEK"
}

export default CONFIG_DATA
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.