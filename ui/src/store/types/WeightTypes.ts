export enum WeightType {
  LB = "lb",
  KG = "kg"
}

export interface Weight {
  weight: number;
  month: number;
  day: number;
  year: number;
  weightType: WeightType;
}

export interface WeightMap {
  weights: Weight[];
}

export enum WeightConstants {
  LOG_WEIGHT = "LOG_WEIGHT"
}

interface LogWeightAction {
  type: typeof WeightConstants.LOG_WEIGHT;
  payload: Weight;
}

export type WeightActionTypes = LogWeightAction;
