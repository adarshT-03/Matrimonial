import {
  FETCH_USER_DATA,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  FILTER_DATA,
  UPDATE_SLIST,
} from "../Constant";

const initialState = {
  loading: false,
  users: [],
  filteredUsers: [],
  filteredVals: [],
  error: "",
  sList: 0,
};
const Userreducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      console.log(action, "payload12345");
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case FILTER_DATA:
      console.log(state.filteredUsers, "fillllll");
      const filteredArrays = [
        ...state.filteredVals.filter(
          (value) =>
            Object.keys(value)[0] !== Object.keys(action.payload.data)[0]
        ),
        action.payload.data,
      ];
      console.log(filteredArrays, "Filter Data");
      var filtered = [];
      for (let i = 0; i < filteredArrays.length; i++) {
        const element = filteredArrays[i];
        // if ("physical" in element) {
        state.users.forEach((value, key) => {
          // Iterating over Physical object
          Object.values(element).map((val, index) => {
            // Iterating over physical array data
            val.map((vals) => {
              var ftype = Object.keys(element)[0];
              console.log(ftype,"ftype");
              const filteredUsersdata =
                value.basic == undefined ||
                value.basic == null ||
                value.basic == ""
                  ? null
                  : GetPropertyValue(value,  ftype) == vals
                  ? value
                  : null;
              console.log(filteredUsersdata, "filtkkkkkk");
              if (filteredUsersdata == null) {
              } else {
                filtered = [...filtered, filteredUsersdata];
              }
            });
          });
        });

        // Removing duplicated data
        const ids = filtered.map((obj) => obj._id);
        filtered = filtered.filter(
          ({ _id }, index) => !ids.includes(_id, index + 1)
        );
        console.log(filtered, "filtered");
      }

      return {
        ...state,
        loading: false,
        users: state.users,
        filteredUsers: filtered,
        filteredVals: filteredArrays,
      };

    case UPDATE_SLIST:
      var slength = state.sList + 1;
      console.log(slength, "updateslist");
      return {
        ...state,
        sList: slength,
      };

    default:
      return state;
  }
};

export default Userreducer;

function GetPropertyValue(obj1, dataToRetrieve) {
  return dataToRetrieve
    .split(".") // split string based on `.`
    .reduce(function (o, k) {
      return o && o[k]; // get inner property if `o` is defined else get `o` and return
    }, obj1); // set initial value as object
}
