import axios from 'axios';
import { server } from '../store';




export const getAllCoursesAction = (category="",keyword="") => async dispatch => {
    try {
      dispatch({
        type: 'getAllCourseRequest',
      });
  
      const { data } = await axios.get(`${server}/courses?keyword=${keyword}&category=${category}`);
  
      dispatch({
        type: 'getAllCourseSuccess',
        payload: data.course,
      });
    } catch (error) {
      dispatch({
        type: 'getAllCourseFail',
        payload: error.response.data.message,
      });
    }
  };