export default function Tabs({ children, buttons, buttonsContainer }) {
  
  // Only works with upper case variable
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
