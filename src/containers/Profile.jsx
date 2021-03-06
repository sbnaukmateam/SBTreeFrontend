/* eslint-disable */
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
import { Layout } from './Layout';
import { privateRoute } from '../hoc';

class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      newPass: '',
      newPassConf: '',
      editorOpen: false,
    };
  }

  setPassword() {
    const { actions } = this.props;
    const { newPass } = this.state;
    actions.editProfile.changePassword({ new: newPass });
    this.setState({
      newPass: '',
      newPassConf: '',
    });
  }

  equalPsw = () => {
    const { newPass, newPassConf } = this.state;
    return newPass === newPassConf;
  };

  validPsw = () => {
    const { newPass } = this.state;
    return this.equalPsw() && newPass.length > 5;
  };

  closeEditor() {
    this.setState({
      editorOpen: false,
    });
  }

  handleOpenEditor() {
    const { editorOpen: { open } } = this.state;
    this.setState({
      editorOpen: !open,
    });
  }

  changeInfo() {
    const { actions, me } = this.props;
    actions.editProfile.changeInfo(me);
  }

  handlePassword(str, event) {
    this.setState({ [str]: event.target.value });
  }

  render() {
    const {
      me, patron, passwordChanged, infoChanged,
    } = this.props;
    const { editorOpen, newPass, newPassConf } = this.state;
    const editorClasses = classnames({
      hide: !editorOpen,
    });
    let changePasswordMsg = formatData(passwordChanged);
    if (typeof changePasswordMsg === 'object') changePasswordMsg = changePasswordMsg.status;
    let changeInfoMsg = formatData(infoChanged);
    if (typeof changeInfoMsg === 'object') changeInfoMsg = changeInfoMsg.status;
    if (!me) return (<div />);
    return (
      <Layout>
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
              {me.degrees.map(x => (
                <div key={x.year}>
                  <p>{x.year}</p>
                  <p>{x.faculty}</p>
                  <p>{x.speciality}</p>
                  <p>{x.program}</p>
                </div>
              ))}
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
            {me.positions.map(x => (
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
            <button type="button" onClick={this.handleOpenEditor.bind(this)}>Редагувати</button>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="password" placeholder="Новий пароль" value={newPass} onChange={this.handlePassword.bind(this, 'newPass')} />
            <input type="password" placeholder="Повторіть пароль" value={newPassConf} onChange={this.handlePassword.bind(this, 'newPassConf')} />
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
            <button type="button" onClick={this.changeInfo.bind(this)}>Зберегти зміни</button>
            <button type="button" onClick={this.closeEditor.bind(this)}>Close</button>
            <p>{changeInfoMsg}</p>
          </div>
        </div>
      </Layout>
    );
  }
}
Profile.propTypes = {
  me: PropTypes.object,
  patron: PropTypes.object,
  actions: PropTypes.object.isRequired,
  passwordChanged: PropTypes.object.isRequired,
  infoChanged: PropTypes.object.isRequired,
};
Profile.defaultProps = {
  patron: null,
  me: null,
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

const ProfileWrapped = privateRoute(connect(mapStateToProps, mapDispatchToProps)(Profile));

export { ProfileWrapped as Profile };
