import react, { useState } from "react";
import ResetPassword from "./ResetPasswordView"
import EmailSent from "./EmailSentView"
import { useAuth } from "navigation/Auth/ProvideAuth";

export function ResetPasswordConatiner() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const auth = useAuth();

  const handlePasswordReset = async () => {
    setIsLoading(true);
    console.log("Password reseting")
    auth
      .sendPasswordResetEmail(email)
      .then((res) => {
        setEmailSent(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("error: ", errorCode, errorMessage)
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("Password done")
      });
  }

  return (
    emailSent ?
    <EmailSent
      email={email}
    /> :
    <ResetPassword 
      email={email}
      emailSent={emailSent}
      isLoading={isLoading}
      error={error}
      handlePasswordReset={handlePasswordReset}
      setEmail={setEmail}
    />
  )
}