import { useState, useEffect } from 'react';
import { isAlpha } from "validator";
export default function FirstNameHooks() {

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setError] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  useEffect(() => {
    if (onFocus) {
      if (firstName.length > 0) {
        if (!isAlpha(firstName, "en-US", { "ignore": "-'" })) {
          setError("Only letters A-Z, hyphen, or apostrophe")
        }

        if (isAlpha(firstName, "en-US", { "ignore": "-'" })) {
          setError("")
        }
      }
    }

    if (onBlur) {
      if (firstName.length === 0) {
        setError("First name cannot be empty")
      }
    }

  }, [firstName, onFocus, onBlur])

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)

  }

  return [firstName, handleFirstNameChange, firstNameError, setOnFocus, setOnBlur];
}
