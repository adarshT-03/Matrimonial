import {
  FETCH_USER_DATA,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  FILTER_DATA,
  UPDATE_SLIST,
} from "../Constant";

export const fetchUserData = () => {
  return {
    type: FETCH_USER_DATA,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUserFail = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};
export const filterValues = (values) => {
  console.log("filterValuses");
  return {
    type: FILTER_DATA,
    payload: values,
  };
};
export const updateSList = () => {
  return {
    type: UPDATE_SLIST,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/user-datas", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        gender: "Male",
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        const users = results.data;

        console.log(users, "location");

        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };
};
