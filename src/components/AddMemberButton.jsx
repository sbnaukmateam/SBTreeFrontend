/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { modalActions } from '../actions';

const AddMemberButton = ({ actions }) => (
  <i className="add-member-btn fas fa-plus" title="Додати користувача" onClick={actions.modals.openAddMemberModal} />
);

AddMemberButton.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    modals: bindActionCreators(modalActions, dispatch),
  },
});

const AddMemberButtonWrapped = connect(null, mapDispatchToProps)(AddMemberButton);

export { AddMemberButtonWrapped as AddMemberButton };
