import React from "react";
import { TextField } from "@material-ui/core";

function Card() {
  return (
    <>
      <TextField
        id="name"
        name="name"
        label="Car-Name"
        margin="normal"
        variant="outlined"
      ></TextField>

      <TextField
        style={{ marginLeft: "10px" }}
        id="number"
        name="Model"
        label="Model"
        margin="normal"
        variant="outlined"
      ></TextField>
    </>
  );
}

export default Card;
