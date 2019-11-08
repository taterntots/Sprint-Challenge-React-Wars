import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

// const Page = styled(Pagination)`
//     width: 100%;
// `

const PageChange = ({ next, previous }) => {
  return (
    <div>
      <Button onClick={() => previous()} color="primary">Prev</Button>{' '}
      <Button onClick={() => next()} color="secondary">Next</Button>{' '}
  </div>
  );
}

export default PageChange;