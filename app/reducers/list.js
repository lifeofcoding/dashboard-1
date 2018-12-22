// @flow
import type { Action } from './types';
import { ADD_ITEM, REMOVE_ITEM } from "../actions/list";

// IState: {
//   items: Array<string>
// }

// initState = {
//   items: Array<string> = ["test", "test"]
// }

export default function counter(state: Array<string> = ["test", "test"], action: Action) {
  switch (action.type) {
    case ADD_ITEM: 
      return [...state, action.payload];
    case REMOVE_ITEM:
      return action.payload;
    default:
      return state;
  }
}
