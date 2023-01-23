import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div className="sessionUser">
          <p>Welcom, {session.user.email}</p>
          <img src={session.user.image} alt="Image" />
        </div>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  } else {
    return (
      <>
        <p>Your are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }
};
export default Login;
