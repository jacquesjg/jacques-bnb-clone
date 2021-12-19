import { useState, useEffect } from 'react';
import { isStrongPassword } from "validator";
export default function PasswordHooks() {

  const [password, setPassword] = useState("");
  const [passwordError, setError] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  useEffect(() => {
    if (onFocus) {
      if (password.length > 0) {
        if (!isStrongPassword(password)) {
          setError("Minimum 8 characters including 1 uppercase, 1 number, and 1 special character.")
        }

        if (isStrongPassword(password)) {
          setError("")
        }
      }
    }

    if (onBlur) {
      if (password.length === 0) {
        setError("Password cannot be empty")
      }
    }

  }, [password, onFocus, onBlur])

  function handlePasswordChange(e) {
    setPassword(e.target.value)

  }

  return [password, handlePasswordChange, passwordError, setOnFocus, setOnBlur];
}
