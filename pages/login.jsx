import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }
};
export default Login;
