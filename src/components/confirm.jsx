import React from "react";
import Confirmation from "./confirmations";


function Confirm() {



  return (
    <div>
      <h2>Please confirm your selections:</h2>
      <p>Name:  </p>
      <p>Email: </p>
      <p>Selected courses:</p>

      <button type="button" >
        Back
      </button>
      <button type="button" >
        Confirm
        
      </button>
    </div>
  );
}

export default Confirm;
