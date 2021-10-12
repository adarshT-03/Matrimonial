import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";
import { connect } from "react-redux";
import { filterValues } from "../Service/Actions/Actions";

const SectorList = [
  { id: "Agriculture", type: "Agriculture" },
  { id: "Self-employment ", type: "Self-employment " },
  { id: "Private job", type: "Private job" },
  { id: "Physician", type: "Physician" },
  { id: "IT ", type: "IT " },
  { id: "Others ", type: "Others " },
  { id: "Not Working", type: "Not Working" },
];
class Sector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: [],
    };
  }
  handleChangeBox = (text, event) => {
    var filtersVal = this.state.activeFilter;
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
        activeFilter: filtersVal,
      },
      function (res) {
        console.log(this.state.activeFilter);
        this.props.filterValues({
          ftype: "professional.partsector",
          data: { "professional.partsector": this.state.activeFilter },
        });
      }
    );
  };
  render(){
  return (
    <Col>
        <Accordion defaultActiveKey="1">
          <ContextAwareToggle eventKey="0">Sector</ContextAwareToggle>

          <Accordion.Collapse eventKey="0">
            <Form id="dosham-check">
              {SectorList.map((value, index) => (
                <React.Fragment key={index}>
                  <Form.Check
                    type="checkbox"
                    label={value.type}
                    name={value.type}
                    onChange={(e) => this.handleChangeBox(value.id, e)}
                    // checked={Checked.indexOf(value.id)=== -1 ? false : true}
                    id={`Sector-${index}`}
                  />
                </React.Fragment>
              ))}
            </Form>
          </Accordion.Collapse>
        </Accordion>
      </Col>
  );
  }
};
const mapStateToProps = (state) => {
  console.log(state.user.filteredVals, "statecompx");
  return { userData: state.user.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterValues: (value) => dispatch(filterValues(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sector);
