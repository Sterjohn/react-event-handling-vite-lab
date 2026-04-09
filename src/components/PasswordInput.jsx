// PasswordInput component - renders a password input field
// Connected to: App (parent)

function PasswordInput() {
  // handleChange fires on every keystroke in the input
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <input type="password" onChange={handleChange} />
  );
}

export default PasswordInput;