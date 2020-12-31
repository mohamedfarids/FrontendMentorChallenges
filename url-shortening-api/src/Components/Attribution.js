import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 11px;
  text-align: center;
  margin-top: 6rem;
`;
const Link = styled.a`
  color: hsl(228, 45%, 44%);
`;

function Attribution() {
  return (
    <Wrapper>
      Challenge by
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreference">
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link href="https://www.linkedin.com/in/mohamed-farid-049835156/">Mohame Farid</Link>
    </Wrapper>
  );
}

export default React.memo(Attribution);