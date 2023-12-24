import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes';

const Body = styled.div`
  background-color:${({theme})=>theme.bg};
  width:100%;
  height:100%;
  overflow-x:hidden;
  `;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>PortFolio</Body>
    </ThemeProvider>
  );
}

export default App;

//The code you provided is a styled component for a div element. It uses the 
//styled.div function from the styled-components library to create a component
// that can be styled using CSS. The background-color property is set to the value of the theme.
//body property, which is passed in as a prop to the component.
//This means that the background color of the div element will be determined by the value of the 
//theme.body property in the current theme. This allows you to easily change the background color 
//of all div elements in your application by changing the value of the theme.body property in the theme object.

//9:25