// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import theme from '../Themes/MainTheme'
import Container from '@mui/material/Container';

const ToggleButtonOnOff = () => {
  // const [isOff, setIsOff] = useState(true);

  return (
    // <button onClick={() => setIsOff(!isOff)}>
    //   {isOff ? 'ON' : 'OFFo'}
    // </button>
    <Container>
    <Button variant="text for button" theme>Text</Button>
    <Button variant="text for button" theme>Text</Button>
    <Button variant="text for button" theme>Text</Button>
    <Button variant="text for button" theme>Text</Button>
    <Button variant="text for button" theme>Text</Button>
    </Container>
  );
}

// ReactDOM.render(
//   <ToggleButtonOnOff />,
//   document.getElementById('root')
// );

export default ToggleButtonOnOff;
