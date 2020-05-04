import { WeightActionTypes, WeightConstants, WeightMap, WeightState } from "./weightTypes";

const initialState: WeightState = {
  weights: {},
};

export function weightReducer(
  state: WeightState = initialState,
  action: WeightActionTypes
): WeightState {
    switch(action.type) {
        case WeightConstants.LOG_WEIGHT:
            const key = `${action.weight.day}-${action.weight.month}-${action.weight.year}`
            const newWeight: WeightMap = {
               [key]: {
                   weight: action.weight
               }
            }
            return {
                weights: {
                    ...newWeight,
                    ...state.weights
                }
            }
        default: 
            return state;
    }
}
