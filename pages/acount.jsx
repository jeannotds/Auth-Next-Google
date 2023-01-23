import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const Acount = () => {
  // const { data: session, status } = useSession({ required: true });
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <>
        <div>Welcom, {session.user.email}</div>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  } else {
    return <div>Your are not signed</div>;
  }
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  } else {
    return {
      props: {
        session,
      },
    };
  }
};

export default Acount;
