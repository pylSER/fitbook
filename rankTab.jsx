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
import {Link} from 'react-router';

import Paper from 'material-ui/Paper';

const ListExampleContacts = () => (
<div>
  <Subheader>作息规律排行</Subheader>
    <List>
      <Link to="/myinfo/KILLER?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="KILLER"
        rightIcon={<OneIcon color="#ea4335" />}
        insetChildren={true}
        leftAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/Adam?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="Adam"
        rightIcon={<TwoIcon color="#4285f4" />}
        insetChildren={true}
        leftAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/tracy?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="tracy"
        rightIcon={<ThreeIcon color="#fbbc05" />}
        insetChildren={true}
        leftAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
        </Link>
    </List>
    <Divider />
    <Subheader>计步排行</Subheader>
    <List>
      <Link to="/myinfo/Adam?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="Adam"
        insetChildren={true}
        rightIcon={<OneIcon color="#ea4335"/>}
        leftAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/KILLER?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="KILLER"
        insetChildren={true}
        rightIcon={<TwoIcon color="#4285f4" />}
        leftAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/tracy?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="tracy"
        insetChildren={true}
        rightIcon={<ThreeIcon color="#fbbc05" />}
        leftAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
        </Link>
    </List>

    <Divider />
    <Subheader>跑步排行</Subheader>
    <List>
      <Link to="/myinfo/Adam?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="Adam"
        insetChildren={true}
        rightIcon={<OneIcon color="#ea4335" />}
        leftAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/KILLER?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="KILLER"
        insetChildren={true}
        rightIcon={<TwoIcon color="#4285f4" />}
        leftAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/tracy?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="tracy"
        insetChildren={true}
        rightIcon={<ThreeIcon color="#fbbc05" />}
        leftAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
        </Link>
    </List>

    <Divider />
    <Subheader>骑行排行</Subheader>
    <List>
      <Link to="/myinfo/Adam?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="Adam"
        insetChildren={true}
        rightIcon={<OneIcon color="#ea4335" />}
        leftAvatar={<Avatar src="assets/avatar/2.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/KILLER?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="KILLER"
        insetChildren={true}
        rightIcon={<TwoIcon color="#4285f4" />}
        leftAvatar={<Avatar src="assets/avatar/1.jpeg" />}
      />
        </Link>
      <Link to="/myinfo/tracy?refs=yes" style={{ textDecoration: 'none' }}>
      <ListItem
        primaryText="tracy"
        insetChildren={true}
        rightIcon={<ThreeIcon color="#fbbc05" />}
        leftAvatar={<Avatar src="assets/avatar/3.jpeg" />}
      />
        </Link>
    </List>
  </div>
);

export default ListExampleContacts;
