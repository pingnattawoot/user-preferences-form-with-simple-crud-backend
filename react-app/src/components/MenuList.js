import React from 'react';
import styled, { css } from 'styled-components';

const MenuListWrapper = styled.ul`
  width: 230px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e5e6e8;
  list-style: none;
  padding: 4px 0px;
  margin: 0px 8px;
`;

const ListItem = styled.li`
  font-size: 14px;
  padding: 4px 16px;
  color: #676e6e;
  cursor: pointer;
  &:hover {
    background: #f6f6f7;
    color: #383d48;
    font-weight: bold;
  }
  ${props => props.selected && css`
    background: #f6f6f7;
    color: #383d48;
    font-weight: bold;
  `}
`;

const ListDivider = styled.li`
  margin: 4px 16px;
  height: 1px;
  background: #f2f2f2;
`;

const Icon = styled.i`
  margin-right: 8px;
`;

const MenuList = () => (
  <MenuListWrapper>
    <ListItem>
      <Icon className="fa fa-user-circle-o fa-fw" aria-hidden="true" />
      Edit Profile
    </ListItem>
    <ListItem selected>
      <Icon className="fa fa-cogs fa-fw" aria-hidden="true" />
      Preferences
    </ListItem>
    <ListItem>
      <Icon className="fa fa-lock fa-fw" aria-hidden="true" />
      Password
    </ListItem>
    <ListItem>
      <Icon className="fa fa-bell fa-fw" aria-hidden="true" />
      Notifications
    </ListItem>
    <ListItem>
      <Icon className="fa fa-th-large fa-fw" aria-hidden="true" />
      Connected Accounts
    </ListItem>
    <ListDivider />
    <ListItem>
      <Icon className="fa fa-list-ol fa-fw" aria-hidden="true" />
      Orders
    </ListItem>
    <ListItem>
      <Icon className="fa fa-credit-card fa-fw" aria-hidden="true" />
      Payment
    </ListItem>
    <ListItem>
      <Icon className="fa fa-truck fa-fw" aria-hidden="true" />
      Shipping
    </ListItem>
    <ListDivider />
    <ListItem>
      <Icon className="fa fa-usd fa-fw" aria-hidden="true" />
      Credit & Referrals
    </ListItem>
  </MenuListWrapper>
);


export default MenuList;
