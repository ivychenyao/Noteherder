import React from 'react'

import './SignIn.css'
import quill from './quill.svg'
import googleLogo from './google.svg'
import githubLogo from './github.svg'
import { auth, googleProvider, githubProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="SignIn">
      <header className="Header">
        <img src={quill} alt="" />
        <span className="title">Noteherder</span>
      </header>
      <main>
        <h3>Time to take some notes!</h3>
        <p>I promise, it's fun.</p>

        <button
          className="google"
          onClick={() => authenticate(googleProvider)}
        >
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>
        <button
          className="github"
          onClick={() => authenticate(githubProvider)}
        >
          <img src={githubLogo} alt="" />Sign in with Github
        </button>
      </main>
    </div>
  )
}

export default SignIn