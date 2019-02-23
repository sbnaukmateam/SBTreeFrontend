import React, { PureComponent } from 'react';
import { AdminNav, AdminSearch } from '../components';

class Admin extends PureComponent {
  render() {
    return (
      <div>
        <AdminNav />
        <AdminSearch />
      </div>
    );
  }
}

export { Admin };
