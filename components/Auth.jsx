import { auth } from "../pages/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
  const logMeIn = () => {
    const provider = new GoogleAuthProvider(auth);
    signInWithPopup(auth, provider);
  };
  return (
    <button
      className="p-3  bg-[#020202] text-white font-poppins font-medium rounded shadow"
      onClick={logMeIn}
    >
      Sign In With Google
    </button>
  );
};

const SignOut = () => {
  const out = () => {
    auth.signOut();
  };
  return (
    <div>
      <button
        className="p-3 bg-[#020202] text-white font-poppins font-medium rounded shadow"
        onClick={out}
      >
        Sign Out
      </button>
    </div>
  );
};
export default function Auth() {
  const [user] = useAuthState(auth);

  return <>{user ? <SignOut /> : <SignIn />}</>;
}
