import { Weight, WeightConstants } from "./weightTypes";

export const logWeight = (weight: Weight) => {
  return {
    type: WeightConstants.LOG_WEIGHT,
    weight: weight
  };
};