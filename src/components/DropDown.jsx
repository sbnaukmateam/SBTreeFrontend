import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { db } from '../nedb';

async function loadMembers() {
  try {
    return await db.members.findAsync({});
  } catch (e) {
    return [];
  }
}

class DropDown extends PureComponent {
  constructor() {
    super();
    this.state = ({
      list: null,
    });
    loadMembers().then(res => this.setState({ list: res }));
  }

  render() {
    const { onchange, defaultValue } = this.props;
    const { list } = this.state;
    const options = list ? [
      list
        .find(l => l.id === defaultValue)]
      .map(({ id, name: firstName, surname: lastName }) => ({ value: id, label: `${firstName} ${lastName}` }))
      .concat(
        list
          .filter(l => l.id !== defaultValue)
          .map(({ id, name: firstName, surname: lastName }) => ({ value: id, label: `${firstName} ${lastName}` })),
      ) : [];
    // TODO find better way to place default val as first option
    return (
      <Select
        onChange={onchange}
        defaultValue={defaultValue}
        options={options}
        className="text-mid-blue members-select"
      />

    );
  }
}

DropDown.propTypes = {
  onchange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
DropDown.defaultProps = {
  defaultValue: '',
};

export { DropDown };
