import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { removeUserTokenFromStorage } from '../api';

const NavagationBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #cecfd0;
  color: rgba(117,117,117 ,1);
  box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const Brand = styled.span`
  font-size: 24px;
`;

const NavigationList = styled.ul`
  height: 32px;
  list-style: none;
  padding: 0px;
  display: flex;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.center && css`
    margin-left: auto;
    margin-right: auto;
  `}
`;

const SearchBox = styled.input`
  width: 220px;
  height: 28px;
  margin-left: 40px;
  background-color: #f2f2f2;
  border: 1px solid #dedfe0;
  border-radius: 3px;
  text-indent: 24px;
  font-size: 12px;
  &::placeholder {
    color: #b4b8bd;
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  z-index: 1;
  left: 48px;
  color: #b4b8bd;
`;

const ActionList = styled.ul`
  width: 260px;
  list-style: none;
  padding: 0px;
  font-size: 16px;
  display: flex;
`;

const ActionListItem = styled.li`
  margin-right: 16px;
  color: #92979d;
  cursor: pointer;
  &:hover {
    color: #42a7f4;
  }
`;

const NavigationBar = ({ history }) => {
  const handleSignOut = () => {
    removeUserTokenFromStorage();
    history.push('/signin');
  };

  return (
    <NavagationBarWrapper>
      <NavigationList>
        <ListItem>
          <SearchIcon className="fa fa-search" />
          <SearchBox type="text" placeholder="Seach Fancy" />
        </ListItem>
        <ListItem center>
          <Brand>FANCY</Brand>
        </ListItem>
        <ListItem>
          <ActionList>
            <ActionListItem>
              <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" />
            </ActionListItem>
            <ActionListItem><i className="fa fa-archive fa-fw" aria-hidden="true" /></ActionListItem>
            <ActionListItem><i className="fa fa-bolt fa-fw" aria-hidden="true" /></ActionListItem>
            <ActionListItem><i className="fa fa-user fa-fw" aria-hidden="true" /></ActionListItem>
            <ActionListItem onClick={handleSignOut}>Sign out</ActionListItem>
          </ActionList>
        </ListItem>
      </NavigationList>
    </NavagationBarWrapper>
  );
};

NavigationBar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(NavigationBar);
