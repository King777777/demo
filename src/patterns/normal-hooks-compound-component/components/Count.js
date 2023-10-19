import React from "react";
import styled from "styled-components";

function Count({ max, count }) {


  return <StyledCount>{count <= max ? count : max}</StyledCount>;
}

const StyledCount = styled.div`
  background-color: #17a2b8;
  color: white;
  padding: 5px 7px;
`;

export { Count };
