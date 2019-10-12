import { Weight, WeightConstants } from "../types/WeightTypes";

export const logWeight = (weight: Weight) => {
  return {
    type: WeightConstants.LOG_WEIGHT,
    payload: weight
  };
};
