import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MuiPhoneNumber from 'material-ui-phone-number';
import React, { useState } from 'react';
import { keys } from './sidebarInputKeys';

const MainSidebar = (props) => {
  let [emailError, setEmailError] = useState(false);
  let [emailHelperText, setEmailHelperText] = useState('');

  const checkEmailValidity = (target) => {
    if (target.validity.tooShort === true) {
      setEmailError(true);
      return setEmailHelperText('Email address too short.');
    } else if (target.validity.tooShort === false) {
      setEmailError(false);
      setEmailHelperText('');
    }
    if (target.validity.tooLong === true) {
      setEmailError(true);
      return setEmailHelperText('Email address too long.');
    } else if (target.validity.tooLong === false) {
      setEmailError(false);
      setEmailHelperText('');
    }
    if (target.validity.patternMismatch === true) {
      setEmailError(true);
      return setEmailHelperText('Invalid email address.');
    } else if (target.validity.patternMismatch === false) {
      setEmailError(false);
      setEmailHelperText('');
    }
  };

  const bottomRowInputsArr = [
    [
      'text',
      'Email address',
      props.setUserEmail,
      'sidebar__email sidebar__input w-full',
      keys.sidebar.userEmailKey,
    ],
    [
      'text',
      'Address',
      props.setUserAddress,
      'sidebar__address sidebar__input w-full',
      keys.sidebar.userAddressKey,
    ],
    [
      'phoneNumber',
      'Phone number *',
      props.setUserPhoneNumber,
      'sidebar__phonenumber sidebar__input w-full',
      keys.sidebar.userPhoneNumberKey,
    ],

    [
      'text',
      'LinkedIn',
      props.setUserLinkedin,
      'sidebar__linkedin sidebar__input w-full',
      keys.sidebar.userLinkedinKey,
    ],
    [
      'text',
      'GitHub',
      props.setUserGithub,
      'sidebar__github sidebar__input w-full',
      keys.sidebar.userGithubKey,
    ],
  ];

  const bottomRowInputs = bottomRowInputsArr.map((input) => {
    if (input[0] === 'phoneNumber') {
      return (
        <MuiPhoneNumber
          defaultCountry={'ro'}
          label={input[1]}
          inputProps={{ maxLength: 12 }}
          variant="outlined"
          error={
            props.userPhoneNumber.length > 1 &&
            props.userPhoneNumber.length < 12
              ? true
              : false
          }
          helperText={
            props.userPhoneNumber.length > 1 &&
            props.userPhoneNumber.length < 12
              ? 'Phone number too short.'
              : false
          }
          className={input[3]}
          onChange={(e) => {
            console.log(e);
            input[2](e);
          }}
          key={input[4]}
        />
      );
    } else if (input[1] === 'Email address' || input[1] === 'Address') {
      // conditional used to separate the required from non-required fields and add email validation
      if (input[1] === 'Email address') {
        return (
          <TextField
            type="email"
            required
            label={input[1]}
            inputProps={{
              minLength: 8,
              maxLength: 32,
              pattern: '^(.+)@(.+)$',
            }}
            error={emailError}
            helperText={emailError ? emailHelperText : false}
            onInput={(e) => {
              let target = document.querySelector(
                '#root > div > main > div.sidebar.w-2\\/12.p-8 > form > div.sidebar__row.pt-8 > div.MuiFormControl-root.MuiTextField-root.\\"sidebar__email.sidebar__input.w-full.w-full\\".css-1u3bzj6-MuiFormControl-root-MuiTextField-root > div > input'
              );
              checkEmailValidity(target);
              input[2](e.target.value);
            }}
            className={`"${input[3]} w-full"`}
            key={input[4]}
          />
        );
      } else
        return (
          <TextField
            required
            label={input[1]}
            inputProps={{ minLength: 8 }}
            error={
              props.userAddress.length < 8 && props.userAddress.length >= 1
                ? true
                : false
            }
            helperText={
              props.userAddress.length < 8 && props.userAddress.length >= 1
                ? 'Address too short.'
                : false
            }
            onChange={(e) => {
              input[2](e.target.value);
            }}
            className={`"${input[3]} w-full"`}
            key={input[4]}
          />
        );
    } else {
      return (
        <TextField
          inputProps={{ type: 'link' }}
          label={input[1]}
          onChange={(e) => input[2](e.target.value)}
          className={`"${input[3]} w-full"`}
          key={input[4]}
        />
      );
    }
  });

  return (
    <div className="sidebar w-2/12 p-8">
      <form>
        <div>
          <TextField
            required
            label="Your name"
            inputProps={{ minLength: 6 }}
            error={
              props.userName.length > 0 && props.userName.length < 6
                ? true
                : false
            }
            helperText={
              props.userName.length > 0 && props.userName.length < 6
                ? 'Name too short'
                : false
            }
            onInput={(e) => props.setUserName(e.target.value)}
            className="w-full"
          />

          <Button
            variant="contained"
            component="label"
            className="sidebar__uploadbtn"
          >
            Upload Image
            <input
              hidden
              accept=".jpg,.jpeg,.png"
              type="file"
              className="sidebar__uploadbtn"
              onInput={props.setUserImg}
            />
          </Button>

          {props.userImg === null ? (
            <div className="sidebar__imgcontainer bg-slate-200 mx-auto mt-6 rounded-full" />
          ) : (
            <div
              className="sidebar__imgcontainer bg-slate-200 mx-auto mt-6 rounded-full"
              style={{ backgroundImage: `url(${props.userImg})` }}
            />
          )}
        </div>
        <div className="pt-8">
          <h3 className="sidebar__heading text-lg">Contact information:</h3>
          {bottomRowInputs}
        </div>
      </form>
    </div>
  );
};

export default MainSidebar;
