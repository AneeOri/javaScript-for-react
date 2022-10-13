import "./styles.css";

export default function App() {

  var topic = "javaScript";
  if(topic){
    var topic = "React";
    console.log("block", topic);
  }

  console.log("global", topic);

  return (
    <div className="App">
      
    </div>
  );
}
