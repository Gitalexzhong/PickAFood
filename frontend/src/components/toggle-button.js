import React, { Component } from 'react'
import { Button } from 'react-native'

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
// Usage
<Button onClick={sayHello}>
  Disabled Button
</Button>