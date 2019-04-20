import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StickyContainer, Sticky } from 'react-sticky';
import { Navbar, Footer } from '../components';

class Layout extends PureComponent {
  render() {
    const { children, transparent } = this.props;
    return (
      <StickyContainer id="app">
        <Sticky>
          {({
            style,
          }) => (
            <Navbar transparent={transparent} style={style}>
              {/* ... */}
            </Navbar>
          )}
        </Sticky>
        {children}
        <Footer />
      </StickyContainer>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.any,
  transparent: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  transparent: null,
};

export { Layout };
