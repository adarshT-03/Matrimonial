import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Accordion, Form } from "react-bootstrap";
import ContextAwareToggle from "../Components/CustomToggleHeader";
import { connect } from "react-redux";
import { filterValues } from "../Service/Actions/Actions";

const complexionList = [
  { id: "Very Fair", type: "Very Fair" },
  { id: "Fair", type: "Fair" },
  { id: "Wheatish", type: "Wheatish" },
  { id: "Dark", type: "Dark" },
  { id: "Not Specified", type: "Not Specified" },
];

class Complexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: [],
    };
  }

  componentDidMount() {
    console.log("hello");
  }

  // const handleToggle=(value)=>{
  //   const curreentIndex = Checked.indexOf(value);
  //   const newChecked =[...Checked];

  //   if (curreentIndex===-1){
  //     newChecked.push(value)
  //   }else{
  //     newChecked.splice(curreentIndex,1)
  //   }
  //   SetChecked(newChecked)
  //   props.handleFilters(newChecked)

  // }
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
          ftype: "basic.complexion",
          data: { "basic.complexion": this.state.activeFilter },
        });
      }
    );
  };

  render() {
    console.log(this.props.userData, "hello");
    return (
      <Col>
        <Accordion defaultActiveKey="1">
          <ContextAwareToggle eventKey="0">Complexion</ContextAwareToggle>

          <Accordion.Collapse eventKey="0">
            <Form id="dosham-check">
              {complexionList.map((value, index) => (
                <React.Fragment key={index}>
                  <Form.Check
                    type="checkbox"
                    label={value.type}
                    name={value.type}
                    onChange={(e) => this.handleChangeBox(value.id, e)}
                    // checked={Checked.indexOf(value.id)=== -1 ? false : true}
                    id={`compexion-${index}`}
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
  console.log(state.user.filteredVals, "statecompx");
  return { userData: state.user.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterValues: (value) => dispatch(filterValues(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Complexion);
