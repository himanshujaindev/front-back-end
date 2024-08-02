import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["NYC", "USA", "SF", "Chicago", "Miami", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [buttonClicked, updateButton] = useState(false);

  return (
    // <div className="alert alert-primary">
    //   {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
    //   <Alert>
    //     Hello <h1>World</h1>
    //   </Alert>
    // </div>

    <div>
      {buttonClicked && (
        <Alert onClose={() => updateButton(false)}>My alert</Alert>
      )}
      <Button color="secondary" onClick={() => updateButton(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
