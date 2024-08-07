import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='auth-page'>
      {/* <h1>Sign In</h1> */}
        <SignIn />
        {/* <h1>Sign out</h1> */}
    </main>
  )
}

export default SignInPage