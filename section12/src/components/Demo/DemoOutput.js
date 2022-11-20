const DemoOutput = (props) => {

  console.log("Demo running");

  return <p>{props.show && "This is new!"}</p>;
};

export default DemoOutput;