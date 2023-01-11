import { useSession, signOut, signIn } from "next-auth/react";
import React from "react";

export default function Index() {
  const { data: session, status } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div style={{ padding: "200px", margin: "auto auto" }}>
          안녕하세요 툴디팀 {session.user?.name} 매니저 입니다
        </div>
        <button onClick={() => signOut()}>로그아웃</button>;
      </>
    );
  }

  return (
    <button
      onClick={() =>
        signIn("login-credential", { id: "test", password: "test" })
      }
    >
      로그인
    </button>
  );
}
