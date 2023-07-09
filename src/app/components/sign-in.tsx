'use client'
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Sign_in_page() {

  const { isLoaded, isSignedIn, user } = useUser();
  
  return (
  <>
    <div className="auth-box">
      {isLoaded && isSignedIn ? (
        <div className="user-box">
          Hello {user.firstName}!
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <SignInButton mode="modal">
          <button className="sign-in-btn">
            Sign in
          </button>
        </SignInButton>
      )}
    </div>
  </>
  )
}