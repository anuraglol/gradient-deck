import auth from "../firebase.config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Auth() {
  const [user] = useAuthState(auth);

  const SignIn = () => {
    const signIn = () => {
      const provider = new GoogleAuthProvider(auth);
      signInWithRedirect(provider);
    };
    return (
      <button
        className="p-2 bg-[#020202] text-white font-poppins font-medium"
        onClick={signIn}
      >
        Sign In With Google
      </button>
    );
  };

  const SignOut = () => {
    return (
      <button
        className="p-2 bg-[#020202] text-white font-poppins font-medium"
        onClick={auth.signOut()}
      >
        Sign Out
      </button>
    );
  };
  return;
}
