import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA300aQr5FUK-mO6y-kt_SsqtA6mLm7X4A",
  authDomain: "my-react-app-752cf.firebaseapp.com",
  projectId: "my-react-app-752cf",
  storageBucket: "my-react-app-752cf.appspot.com",
  messagingSenderId: "757008352991",
  appId: "1:757008352991:web:ad85bea034ca0bf349cb6a"
};


const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp); // change
console.log(firebaseConfig); // change


export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }

        catch (error) {
            console.log('error in creating user:', error.message)
        }
    }
    return userDocRef
}