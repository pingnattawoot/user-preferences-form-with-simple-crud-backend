import React from 'react';
import styled from 'styled-components';

const NavagationBarWrapper = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  border: 1px solid rgba(238,238,238 ,1);
  color: rgba(117,117,117 ,1);
  box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const BigText = styled.span`
  font-size: 32px;
`;

const NavigationBar = () => (
  <NavagationBarWrapper>
    <BigText>
      <i className="fa fa-search" aria-hidden="true" />
      FANCY
    </BigText>
  </NavagationBarWrapper>
);

export default NavigationBar;
