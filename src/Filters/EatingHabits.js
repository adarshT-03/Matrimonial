import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";
import { connect } from "react-redux";
import { filterValues, fetchUsers } from "../Service/Actions/Actions";

const EatingHabitsList = [
  { id: "Vegetarian", type: "Vegetarian" },
  { id: "Non-Vegetarian", type: "Non-Vegetarian" },
  { id: "Eggetarian", type: "Eggetarian" },
  { id: "Not Specified", type: "Not Specified" },
];
class EatingHabits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eatingFilter: [],
    };
  }

  handleChangeBox = (text, event) => {
    var filtersVal = this.state.eatingFilter;
    if (event.target.checked) {
      filtersVal.push(text);
    } else {
      const index = filtersVal.indexOf(text);
      if (index > -1) {
        filtersVal.splice(index, 1);
      }
    }
    this.setState(
      {
        eatingFilter: filtersVal,
      },
      function (res) {
        console.log(this.state.eatingFilter);
        this.props.filterValues({
          ftype: "basic.eating",
          data: { "basic.eating": this.state.eatingFilter },
        });
      }
    );
  };
  render() {
    return (
      <Col>
        <Accordion defaultActiveKey="1">
          <ContextAwareToggle eventKey="0">Eating Habits</ContextAwareToggle>

          <Accordion.Collapse eventKey="0">
            <Form id="dosham-check">
              {EatingHabitsList.map((value, index) => (
                <React.Fragment key={index}>
                  <Form.Check
                    type="checkbox"
                    label={value.type}
                    name={value.type}
                    onChange={(e) => this.handleChangeBox(value.id, e)}
                    // checked={Checked.indexOf(value.id)=== -1 ? false : true}
                    id={`eating-${index}`}
                  />
                </React.Fragment>
              ))}
            </Form>
          </Accordion.Collapse>
        </Accordion>
      </Col>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.user.filteredVals, "stateEating");
  return { userData: state.user.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterValues: (value) => dispatch(filterValues(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EatingHabits);
