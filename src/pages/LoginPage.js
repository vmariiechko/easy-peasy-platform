//import { useEffect, useContext } from "react";
//import { useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
//import UserContext from "../context/user";

function Login() {
  //  const { isNewUser, handleUser } = useContext(UserContext);
  //  let { pathname } = useLocation();
  //  useEffect(() => {
  //    if (pathname === "/login") {
  //      handleUser();
  //      console.log(isNewUser);
  //    }
  //  }, []);
  return (
    <section className="bg-slate-100 min-h-screen flex items-center justify-center">
      <LoginForm />
    </section>
  );
}

export default Login;