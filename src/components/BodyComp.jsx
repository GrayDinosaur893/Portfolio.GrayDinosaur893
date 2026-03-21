// Assignment: Create a BodyComp component
import { useState } from "react";
export default function BodyComp( {body} ) {
  const [count, setCount] = useState(0);
  const [Cardtext, setCardtext] = useState("Hello");
  function handleClick() {
    setCount(count + 1);
  }
  function handleCardClick() {
    setCardtext("You clicked the card!");
  }
  return (
    <div className="card-container">
      <p>{body}</p>
      <button onClick={handleClick} onClickCapture={handleCardClick} className="cardbutton">Click me</button>
      <p>{Cardtext}</p><br></br>
      <p>You clicked {count} times</p>
      
    </div>
  )
}