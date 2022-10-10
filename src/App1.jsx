import ImageSlider from "./ImageSlider";
const App1 = () => {
  const slides = [
    { url: "https://images.unsplash.com/photo-1639851831822-36b6deeea50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"},
    { url: "https://images.unsplash.com/photo-1608020932658-d0e19a69580b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"},
    { url: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1></h1>
      <br>
      </br>
      <div style={containerStyles}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App1;