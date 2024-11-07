
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyABPdqDX141shx15TYaTK06iMNBFgyonBg",
    authDomain: "login-c9742.firebaseapp.com",
    projectId: "login-c9742",
    storageBucket: "login-c9742.firebasestorage.app",
    messagingSenderId: "755962182191",
    appId: "1:755962182191:web:cd7e7757b7936f0ee1e4da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
auth.languageCode = 'en';
const provider = new GoogleAuthProvider()

// sign-up submit button
const signSubmit = document.getElementById("signup-submit");
signSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const signEmail = document.getElementById("sign-email").value;
    const signpassword = document.getElementById("sign-password").value;


    createUserWithEmailAndPassword(auth, signEmail, signpassword)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            alert("Account created successfully!"),
            window.location.href= "././postApp"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert("Error: " + error.message)
            alert(errorCode)
        })
})


//login-submit button
const loginSubmit = document.getElementById("login-submit");
loginSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;


    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            alert("Login successful!");
             window.location.href= "././postApp"
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert("Error: " + error.message)
            alert(errorCode)
        })
});


//sign-in-google
const googleLoginBtn = document.getElementById("google-login-btn");
googleLoginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href= "../postApp"
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            

        });
});

