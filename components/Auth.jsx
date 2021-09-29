import { auth } from "../pages/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
// import Button from "@mui/material/Button";

export default function Auth() {
  const [user] = useAuthState(auth);

  const SignIn = () => {
    const logMeIn = () => {
      const provider = new GoogleAuthProvider(auth);
      signInWithPopup(auth, provider);
    };

    return (
      <button
        className="p-3 flex flex-row items-center bg-[#020202] text-white font-poppins font-medium rounded shadow hover:drop-shadow-xl"
        onClick={logMeIn}
      >
        <FcGoogle size="25" />
        <span className="px-2">Sign In With Google</span>
      </button>
    );
  };

  const SignOut = () => {
    const out = () => {
      // auth.signOut();
      signOut(auth);
    };
    return (
      <div>
        <button
          className="p-3 bg-[#020202] text-white font-poppins font-medium rounded shadow hover:drop-shadow-xl"
          onClick={out}
        >
          Sign Out
        </button>
      </div>
    );
  };

  return <>{user ? <SignOut /> : <SignIn />}</>;
}
