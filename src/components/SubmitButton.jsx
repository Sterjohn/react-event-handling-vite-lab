// SubmitButton component - renders a submit button with mouse tracking
// Connected to: App (parent)

function SubmitButton() {
  // handleEnter fires when mouse enters the button
  function handleEnter() {
    console.log("Mouse Entering");
  }

  // handleLeave fires when mouse leaves the button
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password
    </button>
  );
}

export default SubmitButton;