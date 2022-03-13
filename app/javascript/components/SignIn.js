import React from 'react';

function SignIn() {
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

    return(
      <button onClick={SignInWithGoogle}>Sign in</button>
    )
  }
}

export default SignIn