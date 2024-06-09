"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export function Sign_in() {
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
                  <button className="flex sign-in-btn border-2 border-black rounded-md">Sign in</button>
               </SignInButton>
            )}
         </div>
      </>
   );
}
