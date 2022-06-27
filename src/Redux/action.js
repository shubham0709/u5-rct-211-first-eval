//Create ActionCreator functions here
import axios from "axios";
import {
    GET_SHOES_REQUEST,
    GET_SHOES_SUCCESS,
    GET_SHOES_FAILURE,
    UPDATE_SHOE_COUNT_REQUEST,
    UPDATE_SHOE_COUNT_SUCCESS,
    UPDATE_SHOE_COUNT_FAILURE
} from "./actionTypes";

export const fetchshoes = (dispatch) => {
    dispatch({ type: GET_SHOES_REQUEST });

    axios.get("http://localhost:8080/shoes")
        .then(r => {
            dispatch({ type: GET_SHOES_SUCCESS, payload: r.data });
        }).catch(e => {
            dispatch({ type: GET_SHOES_FAILURE, payload: e });
        })
}
export const updateCount = (elem, dispatch, value) => {

    let id = elem.id;
    if (elem.cart_quantity == 0 && value == -1) {
        return;
    }
    elem.cart_quantity += value;
    dispatch({ type: UPDATE_SHOE_COUNT_REQUEST })
    axios.patch(`http://localhost:8080/shoes/${id}`, elem)
        .then(res => {
            dispatch({ type: UPDATE_SHOE_COUNT_SUCCESS, payload: res.data });
        }).catch(e => {
            dispatch({ type: UPDATE_SHOE_COUNT_FAILURE, payload: e });
        })
}