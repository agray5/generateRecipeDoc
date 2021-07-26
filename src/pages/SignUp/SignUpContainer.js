import react, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "navigation/Auth/ProvideAuth";
import SignUp from "./SignUpView";

export function SignUpContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <SignUp 
      
    />
  )
}