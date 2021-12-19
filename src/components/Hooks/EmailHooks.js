import { useState, useEffect } from 'react';
import { isEmail } from "validator";
export default function EmailHooks() {

  const [email, setEmail] = useState("");
  const [emailError, setError] = useState("");
  const [onBlur, setOnBlur] = useState(false);

  useEffect(() => {

    if (onBlur) {
      if (!isEmail(email)) {
        setError("Please enter a valid email address.")
      }
      if (isEmail(email)) {
        setError("")
      }
    }

  }, [email, onBlur])

  function handleEmailChange(e) {
    setEmail(e.target.value)

  }

  return [email, handleEmailChange, emailError, setOnBlur];
}
