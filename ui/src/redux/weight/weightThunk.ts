import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { logWeight } from '../weight/weightAction';
import { Weight } from '../weight/weightTypes';
import { AppState } from '../index';

export const logWeightThunk = (weight: Weight): ThunkAction<void, AppState, null, Action<string>> => dispatch => {
    console.log(weight);
    dispatch(logWeight(weight));
}