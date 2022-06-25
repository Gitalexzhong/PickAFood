import React from "react";
import "./ToggleSwitch.css";
// import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

const ToggleSwitch = ({ label }) => {
  // return (
  //   // <div className="container">
  //   //   {/* {label}{" "} */}
  //   //   <div className="toggle-switch">
  //   //     <input type="checkbox" className="checkbox"
  //   //       name={label} id={label} />
  //   //     <label className="label" htmlFor={label}>
  //   //       <span className="inner" />
  //   //       <span className="switch" />
  //   //     </label>
  //   //   </div>
  //   // </div>
  //   <div className="container">
  //   {/* <Button variant="text">Text</Button> */}
  //   {/* <Button variant="contained">Contained</Button>
  //   <Button variant="outlined">Outlined</Button> */}
  //   </div>
  // );
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
      <input type="checkbox" className="checkbox"
          name={"label"} id={"label"} />
      {/* <FormatAlignLeftIcon /> */}
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>

  );

};

export default ToggleSwitch;
