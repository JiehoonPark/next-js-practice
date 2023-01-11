import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    Credentials({
      id: "login-credential",
      name: "Credentials",
      credentials: {
        id: { label: "아이디", type: "text" },
        password: { label: "비밀번호", type: "password" },
      },

      async authorize(credentials) {
        const { id, password } = credentials;
        if (id !== "test" || password !== "test") return null;
        const user = { name: "박지훈" };
        return user;
      },
    }),
  ],
};
export default NextAuth(authOptions);
