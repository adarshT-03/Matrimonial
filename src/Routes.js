import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoadingScreen from "./Components/LoadingScreen";
import LoginInsideContent from "./Components/LoginInsideContent";
import ProfileDetails from "./Components/ProfileDetails";
import RegisterPage from "./Components/RegisterPage";
import Search from "./Components/Search";
import UserProfile from "./Components/UserProfile";
import UserContext from "./Context/UserContext";
import UserInterest from "./Components/UserInterest";
import Trial from "./Service/Trial";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./Service/Actions/Actions";
import ChangePassword from "./Components/ChangePassword";

const Routes = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn,'login');
  const [details, setDetails] = useState("");
  const [basic, setBasic] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [religion, setReligion] = useState("");
  const [locationPrefer, setLocationPrefer] = useState("");
  const [professional, setProfessional] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [family, setFamily] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [partnerpreference, setPartnerPreference] = useState("");
  const [professionalprefer, setProfessionalPref] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getMdata = async (dispatch) => {
    await dispatch(fetchUsers());
    getData();
  };

  useEffect(() => {
    if (loggedIn) {
      // getData();
      getMdata(dispatch);
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  const getData = async () => {
    await fetch("http://localhost:3000/user-details", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        // console.log(results, "results");
        // global.userData = results.data;
        setDetails(results.data);
        setBasic(results.data.basic);
        setHoroscope(results.data.horoscope);
        setLocationPrefer(results.data.locationprefer);
        setReligion(results.data.religion);
        setProfessional(results.data.professional);

        setContact(results.data.contact);
        setLocation(results.data.location);
        setFamily(results.data.family);
        setLifestyle(results.data.lifestyle);
        setPartnerPreference(results.data.partnerpreference);
        setProfessionalPref(results.data.professionalprefer);

        setLoading(false);
      });
  };
  return (
    <Switch>
      {loading ? (
        <LoadingScreen />
      ) : (
        <UserContext.Provider
          value={{
            details,
            basic,
            horoscope,
            locationPrefer,
            religion,
            professional,
            contact,
            location,
            family,
            lifestyle,
            partnerpreference,
            professionalprefer,
          }}
        >
          <Route
            path="/"
            exact
            component={loggedIn ? LoginInsideContent : HomePage}
          />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/content" exact component={LoginInsideContent} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/search" exact component={Search} />
          <Route path="/profile/:id" exact component={ProfileDetails} />
          <Route path="/user-interests" exact component={UserInterest} />
          <Route path="/change-password" exact component={ChangePassword} />
          <Route path="/trial" exact component={Trial} />
        </UserContext.Provider>
      )}
    </Switch>
  );
};
export default Routes;
