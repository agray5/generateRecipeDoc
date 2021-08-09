import react, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "navigation/Auth/ProvideAuth";
import Login from "./LoginView";

export function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = useAuth();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = async () => {
    setIsLoading(true);

    if(!remember) {
      await auth.setPersistance(auth.PERSISTANCE.SESSION);
    }

    auth
      .signin(email,password)
      .then((res) => {
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("error: ", errorCode, errorMessage)
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <Login 
      password={password}
      email={email}
      isLoading={isLoading} 
      remember={remember}
      error={error} 
      handleLogin={handleLogin} 
      setPassword={setPassword}
      setEmail={setEmail}
      setRemember={setRemember}
    />
  )
}