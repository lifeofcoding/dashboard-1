import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type State = {
  counterState: counterStateType,
  items: itemsStateType
};

export type counterStateType = {
  counter: number
};

export type itemsStateType = {
  items: Array<string>
};

export type Action = {
  type: string
};

export type GetState = () => State;

export type GetCounterState = () => counterStateType;

export type GetItemState = () => itemsStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
