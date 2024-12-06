import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

import { BsCalendar2CheckFill } from "react-icons/bs";

function App() {
  let items = ["NYC", "USA", "SF", "Chicago", "Miami", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [buttonClicked, updateButton] = useState(false);

  return (
    // <div className="alert alert-primary">
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    //   <BsCalendar2CheckFill />
    //   {/* <Alert>
    //     Hello <h1>World</h1>
    //   </Alert> */}
    // </div>

    // <div>
    //   {buttonClicked && (
    //     <Alert onClose={() => updateButton(false)}>My alert</Alert>
    //   )}
    //   <Button color="primary" onClick={() => updateButton(true)}>
    //     My button
    //   </Button>
    //   <BsCalendar2CheckFill />
    // </div>

    <div>
      {/* <Like onClick={() => console.log("clicked")} /> */}
    </div>
  );
}

export default App;
