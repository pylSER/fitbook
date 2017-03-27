import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import OneIcon from 'material-ui/svg-icons/image/looks-one';

import TwoIcon  from 'material-ui/svg-icons/image/looks-two';

import ThreeIcon  from 'material-ui/svg-icons/image/looks-3';

import Paper from 'material-ui/Paper';

const ListExampleContacts = () => (
<div>
  <Subheader>作息规律排行</Subheader>
    <List>
      <ListItem
        primaryText="Eric Hoffman"
        leftIcon={<OneIcon color="red" />}
        insetChildren={true}
        rightAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftIcon={<TwoIcon color="blue" />}
        insetChildren={true}
        rightAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftIcon={<ThreeIcon color="green" />}
        insetChildren={true}
        rightAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
    </List>
    <Divider />
    <Subheader>计步排行</Subheader>
    <List>

      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        leftIcon={<OneIcon color="red"/>}
        rightAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        leftIcon={<TwoIcon color="blue" />}
        rightAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        leftIcon={<ThreeIcon color="green" />}
        rightAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
    </List>

    <Divider />
    <Subheader>跑步排行</Subheader>
    <List>

      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        leftIcon={<OneIcon color="red" />}
        rightAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        leftIcon={<TwoIcon color="blue" />}
        rightAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        leftIcon={<ThreeIcon color="green" />}
        rightAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
    </List>

    <Divider />
    <Subheader>骑行排行</Subheader>
    <List>

      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        leftIcon={<OneIcon color="red" />}
        rightAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        leftIcon={<TwoIcon color="blue" />}
        rightAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        leftIcon={<ThreeIcon color="green" />}
        rightAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
    </List>
  </div>
);

export default ListExampleContacts;
