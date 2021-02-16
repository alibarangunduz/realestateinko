import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes({ checked, setChecked }) {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
