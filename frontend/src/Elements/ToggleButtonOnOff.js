
// import ReactDOM from 'react-dom';

import * as React from 'react';
// import useState from 'react';
// import Button from '@mui/material/Button';
import theme from '../Themes/MainTheme'
// import Container from '@mui/material/Container';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// function ToggleState() {
//   alert("This is an alert"); 
// }
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function ToggleButtonOnOff({ textName }) {
  // const [alignment, setAlignment] = React.useState('web');

  // const handleChange = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

  // return (
  //   <ToggleButtonGroup
  //     color="secondary"
  //     value={alignment}
  //     exclusive
  //     onChange={handleChange}
  //   >
  //     <ToggleButton value='false'>{textName}</ToggleButton>
  //   </ToggleButtonGroup>
  // );

  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label={textName} />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />

      </FormGroup>
    </div>
  )
}

// ReactDOM.render(
//   <ToggleButtonOnOff />,
//   document.getElementById('root')
// );

export default ToggleButtonOnOff;
