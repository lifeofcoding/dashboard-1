/* eslint-disable object-shorthand */
// @flow
import type { GetItemState, Dispatch } from '../reducers/types';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const add = (payload) => {
    return (dispatch: Dispatch) => {

        if(payload.length < 1) {
            return;
        }
        dispatch({
            type: ADD_ITEM,
            payload: payload
        })
    }
}

export const remove = (payload) => {
    return (dispatch: Dispatch, getItemState: GetItemState) => {
    
        const { items }  = getItemState();
        const filteredList = items.filter( (item, i) => {
            if(i !== payload) {
                return item;
            }
        })

        dispatch({
            type: REMOVE_ITEM,
            payload: filteredList
        })
    }
}
