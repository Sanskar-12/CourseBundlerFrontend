import axios from 'axios';
import { server } from '../store';

export const userAction = (email, password) => async dispatch => {
  try {
    dispatch({
      type: 'loginRequest',
    });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'loginSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'loginFail',
      payload: error.response.data.message,
    });
  }
};


export const registerAction = (formdata) => async dispatch => {
  try {
    dispatch({
      type: 'registerRequest',
    });

    const { data } = await axios.post(
      `${server}/register`,
      formdata,
      {
        headers: {
          'Content-Type': 'mulitpart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'registerSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'registerFail',
      payload: error.response.data.message,
    });
  }
};


export const logoutAction = () => async dispatch => {
    try {
      dispatch({
        type: 'logoutRequest',
      });
  
      const { data } = await axios.get(
        `${server}/logout`,
        {
          withCredentials: true,
        }
      );
  
      dispatch({
        type: 'logoutSuccess',
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: 'logoutFail',
        payload: error.response.data.message,
      });
    }
  };

export const getMyprofileAction = () => async dispatch => {
  try {
    dispatch({
      type: 'profileRequest',
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: 'profileSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'profileFail',
      payload: error.response.data.message,
    });
  }
};



export const updateProfileAction = (name,email) => async dispatch => {
  try {
    dispatch({
      type: 'updateProfileRequest',
    });

    const { data } = await axios.put(
      `${server}/changeprofile`,
      {name,email},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'updateProfileSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};



export const updatePasswordAction = (oldPassword,newPassword) => async dispatch => {
  try {
    dispatch({
      type: 'updatePasswordRequest',
    });

    const { data } = await axios.put(
      `${server}/changepassword`,
      {oldPassword,newPassword},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'updatePasswordSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'updatePasswordFail',
      payload: error.response.data.message,
    });
  }
};



export const updateProfilePictureAction = (formdata) => async dispatch => {
  try {
    dispatch({
      type: 'updateProfilePictureRequest',
    });

    const { data } = await axios.put(
      `${server}/changeprofilepicture`,
      formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: 'updateProfilePictureSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'updateProfilePictureFail',
      payload: error.response.data.message,
    });
  }
};
