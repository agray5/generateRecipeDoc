import react, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "navigation/Auth/ProvideAuth";
import SignUp from "./SignUpView";

export function SignUpContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = useAuth();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignup = async () => {
    auth
      .signup(name, email, password)
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
    <SignUp 
      password={password}
      email={email}
      isLoading={isLoading} 
      name={name}
      error={error} 
      handleSignup={handleSignup} 
      setPassword={setPassword}
      setEmail={setEmail}
      setName={setName}
    />
  )
}