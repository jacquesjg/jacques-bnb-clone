import { useState, useEffect } from 'react';
import { isAlpha } from "validator";
export default function LastNameHooks() {

  const [lastName, setLastName] = useState("");
  const [lastNameError, setError] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  useEffect(() => {
    if (onFocus) {
      if (lastName.length > 0) {
        if (!isAlpha(lastName, "en-US", { "ignore": "-'" })) {
          setError("Only letters A-Z, hyphen, or apostrophe")
        }

        if (isAlpha(lastName, "en-US", { "ignore": "-'" })) {
          setError("")
        }
      }
    }

    if (onBlur) {
      if (lastName.length === 0) {
        setError("Last name cannot be empty")
      }
    }

  }, [lastName, onFocus, onBlur])

  function handleLastNameChange(e) {
    setLastName(e.target.value)

  }

  return [lastName, handleLastNameChange, lastNameError, setOnFocus, setOnBlur];
}
