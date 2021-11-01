import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5em 1.5em;
  font-family: sans-serif;
  font-size: 1.25em;
  border: ${(props) => (props.outline ? "lightblue" : "white")} 1px solid;
  background-color: ${(props) => (props.outline ? "white" : "lightblue")};
  color: ${(props) => (props.outline ? "Lightblue" : "white")};
  width: ${(props) => (props.fullwidth !== null ? props.fullwidth : "100%")};
  hover {
    border: ${(props) => (props.outline ? "lightblue" : "cornflowerblue")} 1px
      solid;
    background-color: ${(props) =>
      props.outline ? "lightblue" : "cornflowerblue"};
    color: white;
  }
`;
