import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";


const EnterPage = ({ }) => {

    const user = null;
    const username = null;

    return (
        <main>
            { user ?
             !username ? <UsernameForm /> : <SignOutButton />
             :
             <SignInButton />
            }
            Sign Up!
        </main>
    )
}


const SignInButton = () => {
    const signInWithGoogle = async () => {   
        try {
            
            let res = await signInWithPopup(auth, provider)
            let credential = GoogleAuthProvider.credentialFromResult(res)
            let token = credential.accessToken

            const user = res.user
            // await auth.signInWithPopup(googleAuthProvider)

            console.log('res', res, 'user', user)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <button className="btn-google" onClick={() => signInWithGoogle()}>
            <img src={'/google.png'} /> Sign in with Google
        </button>
    );

}


const SignOutButton = () => {
    return (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

const UsernameForm = () => {

}

export default EnterPage