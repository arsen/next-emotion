import React from 'react';
import styled, { hydrate, keyframes, css, injectGlobal } from 'react-emotion';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

const Container = styled('div')`
  background: #333;
`;
const myStyle = css`
  color: rebeccapurple;
`;

export default () => (
  <Container>
    <p className={myStyle}>Hello World</p>
  </Container>
);
