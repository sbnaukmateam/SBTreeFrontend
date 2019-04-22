import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends React.Component {
  render() {
    return (
      <Menu disableAutoFocus width="100%" {...this.props}>
        <Link to="/">
          <b>Головна</b>
        </Link>
        <Link to="/about">
          ПРО НАС
        </Link>
        {/* TODO: Uncomment after projects will be finished */}
        {/* <Link to="/projects">
              ПРОЕКТИ
            </Link> */}
        <Link to="/contacts">
          КОНТАКТИ
        </Link>
        {/* TODO: Uncomment after tree will be finished */}
        {/* <Link to="/">
              ДЕРЕВО
            </Link> */}
      </Menu>
    );
  }
}
export { Sidebar };
