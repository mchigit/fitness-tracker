import React from "react";
import "../css/Weight.css";
import moment from "moment";
import { WeightType, Weight } from "../store//types/WeightTypes";
import "../css/Weight.css";

export default class WeightTracker extends React.PureComponent<Weight> {
  state = {
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
      </div>
    );
  }
}
