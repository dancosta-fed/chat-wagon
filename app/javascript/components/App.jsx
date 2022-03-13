import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks-auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp ({
  apiKey: "AIzaSyDvNHhvlL6y-ZQx84tRq_hvWr8eu-hK7lE",
  authDomain: "chatwagon-900ab.firebaseapp.com",
  projectId: "chatwagon-900ab",
  storageBucket: "chatwagon-900ab.appspot.com",
  messagingSenderId: "534679726932",
  appId: "1:534679726932:web:46ce8f91046c9a9ac2b6c1",
  measurementId: "G-XVZSJVLYXS"
})

const auth = firebase.auth();
const firestore = firebase.Firestore();

class App extends React.Component {
  render() {
    const [user] = useAuthState(auth);
    return (
      <div className="app">
        <header>

        </header>

        <section>
          { user ? <chatRoom/> : <signIn /> }
        </section>

      </div>
    )
  }
}

function SignIn() {
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

    return(
      <button onClick={SignInWithGoogle}>Sign in</button>
    )
  }
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={ () => auth.SignOut }>Sign in</button>
  )
  
}

export default App