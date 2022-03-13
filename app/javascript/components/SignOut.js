import React from 'react';

function SignOut() {
  return auth.currentUser && (
    <button onClick={ () => auth.SignOut }>Sign in</button>
  ) 
}

export default SignOut