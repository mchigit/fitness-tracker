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
  
  export interface WeightState {
    weights: WeightMap
  }
  
  export interface WeightMap {
    [date: string]: {
      weight: Weight
    };
  }
  
  export enum WeightConstants {
    LOG_WEIGHT = "LOG_WEIGHT",
    UPDATE_WEIGHT = "UPDATE_WEIGHT",
    VIEW_WEIGHT = "VIEW_WEIGHT",
    DELETE_WEIGHT = "DELETE_WEIGHT"
  }
  
  interface LogWeightAction {
    type: typeof WeightConstants.LOG_WEIGHT;
    weight: Weight;
  }
  
  export type WeightActionTypes = LogWeightAction;
  
  