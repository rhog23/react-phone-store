import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  text-transform: capitalize;
  background: transparent;
  border: 0.05rem solid;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop =>
      prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  ${"" /* removes the outline when the button is clicked */}
  &:focus {
    outline: none;
  }
`;
