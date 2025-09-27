export default function TabButton({children}) {

  function handleClick() {
    console.log(`Tab clicked: ${children}`);
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}