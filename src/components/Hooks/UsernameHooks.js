import { useState, useEffect } from 'react';
import { isAlphanumeric } from "validator";
export default function UsernameHooks() {

  const [username, setUsername] = useState("");
  const [usernameError, setError] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  useEffect(() => {
    if (onFocus) {
      if (username.length > 0) {
        if (!isAlphanumeric(username)) {
          setError("Username cannot contain any special characters")
        }

        if (isAlphanumeric(username)) {
          setError("")
        }
      }
    }

    if (onBlur) {
      if (username.length === 0) {
        setError("Username cannot be empty")
      }
    }

  }, [username, onFocus, onBlur])

  function handleUsernameChange(e) {
    setUsername(e.target.value)

  }

  return [username, handleUsernameChange, usernameError, setOnFocus, setOnBlur];
}
