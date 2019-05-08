import React, { PureComponent } from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { membersActions } from '../actions';
import {
  selectorMembersPatron, selectorMembersProfile,
} from '../selectors';
import { DATE_FORMAT } from '../util';
import { DropDown } from './DropDown';
import { INTERESTS } from '../constants';


const hasSomeParentTheClass = (element, classname) => {
  if (typeof element.className === 'string' && element.className.split(' ')
    .includes(classname)) {
    return true;
  }
  return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
};
const formatDate = (value) => {
  if (!value) {
    return null;
  }
  const momentValue = moment(value);
  if (!momentValue.isValid()) {
    return null;
  }
  return momentValue.format(DATE_FORMAT);
};

class ProfileCard extends PureComponent {
  _isMounted = false;

  constructor() {
    super();
    this.state = ({
      editName: false,
      editNickName: false,
      editBirth: false,
      editInterests: false,
      editPatron: false,
      birth: null,
    });
    this.updateAvatar = this.updateAvatar.bind(this);
    this.saveName = this.saveName.bind(this);
    this.saveNickName = this.saveNickName.bind(this);
    this.toggleNameEditor = this.toggleNameEditor.bind(this);
    this.toggleNickNameEditor = this.toggleNickNameEditor.bind(this);
    this.handleChangeBirth = this.handleChangeBirth.bind(this);
    this.handleChangePatron = this.handleChangePatron.bind(this);
    this.openBirthPicker = this.openBirthPicker.bind(this);
    this.openPatronSelector = this.openPatronSelector.bind(this);
    this.updateInterests = this.updateInterests.bind(this);
    this.closePatronEditor = this.closePatronEditor.bind(this);
    this.closeInterestsEditor = this.closeInterestsEditor.bind(this);
    this.openInterestsSelector = this.openInterestsSelector.bind(this);
    this.newAvatar = null;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener('click', this.closePatronEditor);
  }


  closePatronEditor = (e) => {
    if (hasSomeParentTheClass(e.target, 'members-select')) return;
    if (this._isMounted) {
      this.setState({
        editPatron: false,
      });
    }
    document.removeEventListener('click', this.closePatronEditor);
  };

  closeInterestsEditor = (e) => {
    if (hasSomeParentTheClass(e.target, 'multi-select') || hasSomeParentTheClass(e.target, 'select__menu')) return;
    if (this._isMounted) {
      this.setState({
        editInterests: false,
      });
    }
    document.removeEventListener('click', this.closeInterestsEditor);
  };

  toggleNameEditor() {
    this.setState(prevState => ({
      editName: !prevState.editName,
    }));
    const { editName } = this.state;
    const elem = document.getElementById('nameEditor');
    if (editName) {
      this.updateName(elem.value);
      document.removeEventListener('keydown', this.saveName);
    } else {
      document.addEventListener('keydown', this.saveName);
    }
  }

  openBirthPicker() {
    this.setState({
      editBirth: true,
    });
  }

  openPatronSelector() {
    this.setState({
      editPatron: true,
    });
    document.addEventListener('click', this.closePatronEditor, false);
  }

  openInterestsSelector() {
    this.setState({
      editInterests: true,
    });
    document.addEventListener('click', this.closeInterestsEditor, false);
  }

  toggleNickNameEditor() {
    this.setState(prevState => ({
      editNickName: !prevState.editNickName,
    }));
    const { editNickName } = this.state;
    const elem = document.getElementById('nickNameEditor');
    if (editNickName) {
      document.removeEventListener('keydown', this.saveNickName);
      this.updateNickName(elem.value);
    } else {
      document.addEventListener('keydown', this.saveNickName);
    }
  }

  handleChangeBirth(date) {
    this.updateBirthday(date);
    this.setState({
      birth: date,
      editBirth: false,
    });
  }

  handleChangePatron(e) {
    this.updatePatron(e.value);
    this.setState({
      editPatron: false,
    });
    document.removeEventListener('click', this.closePatronEditor);
  }

  updatePatron(patronId) {
    const {
      actions: { members }, profile: { id },
    } = this.props;
    members.updateMember(id, {
      patronId,
    });
  }

  updateBirthday(date) {
    const {
      actions: { members }, profile: { id },
    } = this.props;
    members.updateMember(id, {
      birthday: formatDate(date),
    });
  }

  saveName(event) {
    if (event.keyCode !== 13) return;
    const elem = document.getElementById('nameEditor');
    this.updateName(elem.value);
    this.setState({ editName: false });
  }

  saveNickName(event) {
    if (event.keyCode !== 13) return;
    const elem = document.getElementById('nickNameEditor');
    this.updateNickName(elem.value);
    this.setState({ editNickName: false });
  }

  updateInterests(values) {
    const {
      actions: { members }, profile: { id },
    } = this.props;
    const interests = values.map(val => val.value);
    members.updateMember(id, {
      interests,
    });
  }

  updateName(value) {
    const {
      actions: { members }, profile: { id },
    } = this.props;
    const name = value.split(' ');
    members.updateMember(id, {
      name: name[0],
      surname: name[1],
    });
  }

  updateNickName(value) {
    const {
      actions: { members }, profile: { id },
    } = this.props;
    members.updateMember(id, {
      nickName: value,
    });
  }

  updateAvatar(avatar, event) {
    event.preventDefault();
    const r = new FileReader();
    r.onloadend = () => {
      this.newAvatar = r.result;

      const {
        actions: { members }, profile: { id },
      } = this.props;
      members.updateMember(id, {
        avatar: this.newAvatar,
      });
    };
    r.readAsDataURL(avatar);
  }

  render() {
    // TODO add projects

    const {
      avatar, name, surname, nickName,
      birthday, patron, interests,
    } = this.props;
    const {
      editName, editNickName, editBirth, birth, editPatron, editInterests,
    } = this.state;
    const birthdayFormatted = birthday && formatDate(birthday);
    const selectedInterests = INTERESTS.filter(i => (interests || []).includes(i.value));
    const interestsShort = selectedInterests.slice(0, 3);
    const { name: patronName, surname: patronSurname, id: patronId } = patron || {};
    return (
      <React.Fragment>
        <div className="profile-card">
          <div>
            <img src={avatar || '/images/profile-default-02.png'} className="profile-ava" />
            <div className="profile-ico-r">
              <label htmlFor="update-photo">
                <img src="/images/r-ico.png" alt="update" />
                <input type="file" name="file" id="update-photo" className="update-photo"
                  onChange={e => this.updateAvatar(e.target.files[0], e)} />
              </label>
            </div>
            <img src="/images/l-ico.png" className="profile-ico-l" />
          </div>
          <div className="profile-info">
            <div className="name-wrapper">
              <div className="name-box">
                {editName
                  ? <input className="card-name" type="text" id="nameEditor" defaultValue={`${name} ${surname}`} />
                  : (
                    <p className="card-name">
                      {name}
                    &nbsp;
                      {surname}
                    </p>
                  )}
                <button type="button" className="pen-icon-btn" onClick={this.toggleNameEditor}>
                  <img src="/images/pen.png" className="pen-icon-big" />
                </button>
              </div>
              <div className="name-box">
                {editNickName
                  ? <input className="card-nickname" type="text" id="nickNameEditor" defaultValue={nickName} />
                  : (
                    <p className="card-nickname">
                      {nickName}
                    </p>
                  )}
                <button type="button" className="pen-icon-btn" onClick={this.toggleNickNameEditor}>
                  <img src="/images/pen.png" className="pen-icon-medium" />
                </button>
              </div>
            </div>
            <div className="card-info-box">
              <div className="card-info">
                <p>Дата народження:</p>
                <div className="name-box">
                  {editBirth
                    ? (
                      <DatePicker className="input datepicker"
                        placeholderText="Дата народження"
                        selected={birth}
                        onChange={this.handleChangeBirth}
                        isClearable
                        showMonthDropdown
                        showYearDropdown
                    />
                    )
                    : (
                      <React.Fragment>
                        <p>{birthdayFormatted}</p>
                        <button type="button" className="pen-icon-btn" onClick={this.openBirthPicker}>
                          <img src="/images/pen.png" className="pen-icon-medium" />
                        </button>
                      </React.Fragment>
                    )
                }

                </div>
              </div>
              <div className="card-info">
                <p>Патрон:</p>
                <div className="name-box">
                  {editPatron
                    ? (
                      <DropDown
                        placeholder="Патрон"
                        defaultValue={patronId}
                        onchange={this.handleChangePatron} />
                    )
                    : (
                      <React.Fragment>
                        <p>
                          {patronName}
                        &nbsp;
                          {patronSurname}
                        </p>
                        <button type="button" className="pen-icon-btn" onClick={this.openPatronSelector}>
                          <img src="/images/pen.png" className="pen-icon-medium" />
                        </button>
                      </React.Fragment>
                    )
                }
                </div>
              </div>
              <div className="card-info">
                <p>Проекти:</p>
                <div>
                  <img src="/images/point.png" alt="" />
                  <img src="/images/point.png" alt="" />
                  <img src="/images/point.png" alt="" />
                  <img src="/images/add-point.png" alt="" />
                </div>
              </div>
              <div className="card-info">
                <p>Інтереси:</p>
                <div>
                  {interestsShort.map(item => <img key={item.value} src={item.img || '/images/point.png'} alt="" />)}
                  <button type="button" className="hidden-btn" onClick={this.openInterestsSelector}>
                    {' '}
                    <img src="/images/add-point.png" alt="" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
        {editInterests
          ? (
            <Select
              isMulti
              defaultValue={selectedInterests}
              name="Інтереси"
              className="multi-select"
              classNamePrefix="select"
              options={INTERESTS}
              onChange={this.updateInterests}
            />
          )
          : (
            <React.Fragment>

            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

ProfileCard.propTypes = ({
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  avatar: PropTypes.string,
  surname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickName: PropTypes.string,
  patron: PropTypes.object,
  birthday: PropTypes.string,
  interests: PropTypes.array,
});
ProfileCard.defaultProps = ({
  patron: null,
  birthday: null,
  interests: null,
  nickName: null,
  avatar: null,
});
const mapStateToProps = state => ({
  profile: selectorMembersProfile(state),
  patron: selectorMembersPatron(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
  },
});
const ProfileCardWrapped = connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
export { ProfileCardWrapped as ProfileCard };
