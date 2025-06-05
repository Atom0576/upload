import React from "react";
import { usePlayer} from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function InstructionSecond3() {
  const textStyle = {
    maxWidth: '600px',  // Adjust this value as needed
    margin: '0 auto',   // This centers the text block
  };

  const player = usePlayer();

  const buttonContainerStyle = {
    display: 'flex',       // Enables flexbox
    justifyContent: 'center', // Centers content horizontally in the flex container
    marginTop: '20px',     // Optional: adds space above the button
  };

  function handleSubmit() {
    player.stage.set("submit", true);
  }

  return (
    <div style={textStyle}>
     <p> {"If you are assigned an AI manager, We will inform you about the"} <strong>{"style"}</strong> {"of your manager and their"} <strong>{"gender."}</strong> </p> 
     <br>{}</br>   
     <p> {"In the case of a human manager, gender is based on how the manager identifies."} </p>
     <br>{}</br>   
     <p> {"To train the AI manager, we used data exclusively from human groups who shared the same gender identity (for instance, only female or only male). We then assigned this gender identity to the trained AI algorithm."} </p>
     
     <div style={buttonContainerStyle}>
        <Button handleClick={handleSubmit} style={{ backgroundColor: 'blue', color: 'white' }}>
          Continue
        </Button>
      </div>
   </div>
  );
}


