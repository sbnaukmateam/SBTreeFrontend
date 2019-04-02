import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { membersActions, modalActions } from '../actions';
import { modalWrapper } from '../hoc';
import { selectorMembersProfile } from '../selectors';
import { FormFileField } from '.';

class ModalChangeAva extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.newAvatar = null;
  }

  updateAvatar(avatar) {
    const r = new FileReader();
    r.onloadend = () => {
      this.newAvatar = r.result;
    };
    r.readAsDataURL(avatar);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      actions: { members }, profile: { id },
    } = this.props;
    members.updateMember(id, {
      avatar: this.newAvatar,
    });
  }

  render() {
    const { submitting, pristine, invalid } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">Змінити аватар</span>
        <Field component={FormFileField} name="image" className="input" onChange={this.updateAvatar} />
        <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>ЗAВАНТАЖИТИ</button>
      </form>
    );
  }
}
ModalChangeAva.propTypes = {
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  profile: selectorMembersProfile(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const WrappedModalChangeAva = modalWrapper('changeAva')(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'ChangeAvaForm' })(ModalChangeAva)));

export { WrappedModalChangeAva as ModalChangeAva };
