import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import {
  selectorProfileById, selectorPasswordChange, selectorPatron, selectorInfoChange,
} from '../selectors';
import { profileActions } from '../actions';
import { formatData } from '../util';

class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      password: {
        new1: '',
        new2: '',
      },
      editorOpen: false,
    };
  }

  setPassword() {
    this.props.actions.editProfile.changePassword({ new: this.state.password.new1 });
    this.setState({
      password: {
        new1: '',
        new2: '',
      },
    });
  }

  changeInfo() {
    this.props.actions.editProfile.changeInfo(this.props.me);
  }

  handleOpenEditor() {
    const open = this.state.editorOpen;
    this.setState({
      editorOpen: !open,
    });
  }

  closeEditor() {
    this.setState({
      editorOpen: false,
    });
  }

  equalPsw = () => this.state.password.new1 === this.state.password.new2;

  validPsw = () => this.equalPsw() && this.state.password.new1.length > 5;

  handlePassword(str, event) {
    const { password } = this.state;
    this.setState({ password: { ...password, [str]: event.target.value } });
  }

  render() {
    const { me, patron } = this.props;
    const editorClasses = classnames({
      hide: !this.state.editorOpen,
    });
    let changePasswordMsg = formatData(this.props.passwordChanged);
    if (typeof changePasswordMsg === 'object') changePasswordMsg = changePasswordMsg.status;
    let changeInfoMsg = formatData(this.props.infoChanged);
    if (typeof changeInfoMsg === 'object') changeInfoMsg = changeInfoMsg.status;
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <img src={`${me.avatar}`} style={{ width: '200px', height: '200px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            {me.name}
            {' '}
            {me.surname}
          </p>
          <p>{me.nickName}</p>
          <div style={{ border: '1px solid red' }}>
            <p><b>Освіта</b></p>
            <p>{me.degree.year}</p>
            <p>{me.degree.faculty}</p>
            <p>{me.degree.speciality}</p>
            <p>{me.degree.program}</p>
          </div>
          <p>
          Патрон:
            {' '}
            {patron.name}
            {' '}
            {patron.surname}
          </p>
          <p>{me.birth}</p>
          {me.phones.map(x => <p key={x}>{x}</p>)}
          {me.profiles.map(x => <a key={x} href={`//${x}`}>{x}</a>)}
          {me.emails.map(x => <p key={x}>{x}</p>)}
          {me.position.map(x => (
            <div style={{ display: 'flex' }} key={x}>
              {x.years.map((y, i) => (
                <p key={y}>
                  {y}
                  {i !== x.years.length - 1 && ', '}
                </p>
              ))}
              <p>
                {'- '}
                {x.name}
              </p>
            </div>
          ))}
          {me.interests.map(x => <p key={x}>{x}</p>)}
          <button onClick={this.handleOpenEditor.bind(this)}>Редагувати</button>
        </div>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="password" placeholder="Новий пароль" value={this.state.password.new1} onChange={this.handlePassword.bind(this, 'new1')} />
          <input type="password" placeholder="Повторіть пароль" value={this.state.password.new2} onChange={this.handlePassword.bind(this, 'new2')} />
          <button type="button" disabled={!this.validPsw() && 'disabled'} onClick={this.setPassword.bind(this)}>
      Змінити пароль
          </button>
          {!this.equalPsw() && <p>Паролі не співпадають</p>}
          {!this.validPsw() && <p>Не менше 6 символів</p>}
          <p>{changePasswordMsg}</p>
        </form>
        <div id="editForm" className={editorClasses}
          style={{
            position: 'fixed',
            left: 'calc(50% - 200px)',
            width: '400px',
            height: '400px',
            backgroundColor: 'gray',
          }}>
          <input type="text" placeholder="Need to be written" />
          <button onClick={this.changeInfo.bind(this)}>Зберегти зміни</button>
          <button onClick={this.closeEditor.bind(this)}>Close</button>
          <p>{changeInfoMsg}</p>
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  me: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  passwordChanged: PropTypes.object.isRequired,
  infoChanged: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  me: selectorProfileById(state, ownProps.id),
  patron: selectorPatron(state, ownProps.id),
  passwordChanged: selectorPasswordChange(state),
  infoChanged: selectorInfoChange(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    editProfile: bindActionCreators(profileActions, dispatch),
  },
});

const ProfileWrapped = connect(mapStateToProps, mapDispatchToProps)(Profile);

export { ProfileWrapped as Profile };
