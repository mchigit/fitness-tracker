import React from "react";
import "../css/Weight.css";
import moment from "moment";
import { WeightType, Weight } from "../store//types/WeightTypes";
import "../css/Weight.css";
import { Form, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import "react-day-picker/lib/style.css";

type State = {
  weight: number;
  month: number;
  day: number;
  year: number;
  weightType: WeightType;
};
export default class WeightTracker extends React.PureComponent<{}, State> {
  state: State = {
    weight: 0,
    month: moment().get("month"),
    year: moment().get("year"),
    day: moment().get("date"),
    weightType: WeightType.LB
  };

  render() {
    return (
      <div className="content weight">
        <h1 className="weight-header">Log Weight</h1>
        <div className="weight-form">
          <Form>
            <Form.Group
              as={Row}
              className="weight-form-group"
              controlId="formWeightInput"
            >
              <Form.Label className="weight-form-label" column xs="3">
                Weight
              </Form.Label>
              <Col xs="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="weight-form-group"
              controlId="formWeightInput"
            >
              <Form.Label className="weight-form-label" column xs="3">
                Date
              </Form.Label>
              <Col xs="9">/></Col>
            </Form.Group>
            <Form.Group className="weight-form-group">
              <ButtonGroup
                toggle={true}
                size="sm"
                className="weight-form-buttongroup"
              >
                <Button
                  active={this.state.weightType === WeightType.LB}
                  variant="light"
                  onClick={() => this.setState({ weightType: WeightType.LB })}
                >
                  {WeightType.LB}
                </Button>
                <Button
                  active={this.state.weightType === WeightType.KG}
                  variant="light"
                  onClick={() => this.setState({ weightType: WeightType.KG })}
                >
                  {WeightType.KG}
                </Button>
              </ButtonGroup>
            </Form.Group>
            <Form.Group className="weight-form-group">
              <Button className="weight-form-log-button" variant="light">
                Log
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
