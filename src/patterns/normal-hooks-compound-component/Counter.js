import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Count, Label, Decrement, Increment } from "./components";

const Counter = ({children}) => {
  return <StyledCounter>{children}</StyledCounter>
}

const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export { Counter };
