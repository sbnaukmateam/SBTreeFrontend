import React, { PureComponent } from 'react';

import { PasswordChangeForm } from './PasswordChangeForm';
import { Button } from './Button';

class ProfileSidebar extends PureComponent {
  render() {
    return (
      <div className="r-col">
        <PasswordChangeForm />
        <div className="status-change-box">
          <h3>ДІЇ:</h3>
          <Button>ПОШАНУВАТИ(СЯ)</Button>
          <Button>ВІДНОВИТИСЯ</Button>
        </div>
      </div>
    );
  }
}

export { ProfileSidebar };
