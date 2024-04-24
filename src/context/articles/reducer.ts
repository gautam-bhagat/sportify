import { Action, ActionTypes, State } from "./types";

export const articleReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionTypes.FETCH_SUCCESS:
        
      return {
        ...state,
        articles : action.payload
      }

      default:
        return state;
    }
};