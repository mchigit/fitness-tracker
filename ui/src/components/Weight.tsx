import React from "react";
import { connect } from 'react-redux';
import "../css/Weight.css";
import moment from "moment";
import {
  Form,
  Col,
  Row,
  FormControl,
  FormControlProps,
  ButtonGroup,
  Button
} from "react-bootstrap";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import { WeightType, Weight, WeightState } from '../redux/weight/weightTypes';
import { AppState } from '../redux/index';
import { logWeightThunk } from '../redux/weight/weightThunk';

interface AppProps {
  weight: WeightState;
  logWeightThunk: any;
}


export class WeightTracker extends React.Component<AppProps> {
  state = {
    weight: 0,
    logDate: moment().toDate(),
    weightType: WeightType.LB,
    isWeightInputValid: false
  };

  onDateChange = (date: Date | null) => {
    this.setState({
      logDate: date
    });
  };

  handleWeightInputChange = (
    event: React.FormEvent<FormControl & FormControlProps>
  ) => {
    if (event.currentTarget.value) {
      const weight = parseFloat(event.currentTarget.value);
      if (weight && weight > 0) {
        this.setState({
          weight: weight,
          isWeightInputValid: true
        });
      } else {
        this.setState({
          isWeightInputValid: false
        });
      }
    } else {
      this.setState({
        isWeightInputValid: false
      });
    }
  };

  handleLogWeight = () => {
    const weight: Weight = {
      weight: this.state.weight,
      month: this.state.logDate.getMonth() + 1,
      day: this.state.logDate.getDate(),
      year: this.state.logDate.getFullYear(),
      weightType: this.state.weightType,
    }
    this.props.logWeightThunk(weight);
  }

  render() {
    const inputProps = {
      disableUnderline: true
    };
    return (
      <div className="content weight">
        <h1 className="weight-header">Log Weight</h1>
        <div className="weight-form">
          <Form>
            <Form.Group
              className="weight-form-group"
              as={Row}
              controlId="formPlaintextEmail"
            >
              <Form.Label className="weight-form-label" column xs="3">
                Weight
              </Form.Label>
              <Col xs="9">
                <Form.Control
                  onChange={this.handleWeightInputChange}
                  type="number"
                  isValid={this.state.isWeightInputValid}
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="weight-form-group"
              as={Row}
              controlId="date-picker"
            >
              <Form.Label className="weight-form-label" column xs="3">
                Date
              </Form.Label>
              <Col xs="9">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className="weight-date-picker form-control"
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    value={this.state.logDate}
                    onChange={this.onDateChange}
                    autoOk
                    disableFuture
                    InputProps={inputProps}
                  />
                </MuiPickersUtilsProvider>
              </Col>
            </Form.Group>
            <div className="weight-form-type-selector">
              <ButtonGroup
                className="weight-form-type-buttons"
                aria-label="weight type selector"
              >
                <Button
                  active={this.state.weightType === WeightType.LB}
                  onClick={() =>
                    this.setState({
                      weightType: WeightType.LB
                    })
                  }
                  variant="secondary"
                >
                  lb
                </Button>
                <Button
                  active={this.state.weightType === WeightType.KG}
                  onClick={() =>
                    this.setState({
                      weightType: WeightType.KG
                    })
                  }
                  variant="secondary"
                >
                  kg
                </Button>
              </ButtonGroup>
            </div>
            <div className="weight-form-log-button">
              <Button variant="secondary" disabled={!this.state.isWeightInputValid} onClick={this.handleLogWeight}>Log</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  weight: state.weight
});


export default connect(mapStateToProps,  {
  logWeightThunk
})(WeightTracker);
