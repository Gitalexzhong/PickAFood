
// import ReactDOM from 'react-dom';

import * as React from 'react';
// import useState from 'react';
// import Button from '@mui/material/Button';
import theme from '../Themes/MainTheme'
// import Container from '@mui/material/Container';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

// function ToggleState() {
//   alert("This is an alert"); 
// }

function ToggleButtonOnOff({textName}) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value='true'>{textName}</ToggleButton>
    </ToggleButtonGroup>
  );
}

// ReactDOM.render(
//   <ToggleButtonOnOff />,
//   document.getElementById('root')
// );

export default ToggleButtonOnOff;
