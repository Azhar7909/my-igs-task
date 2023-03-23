import axios from "axios";
import { ADD_EMPLOYEE, BASE_URL, EMPLOYEE_LIST } from "../Types";

export const empGetAction = () => async (dispatch) => {
    const res = axios
        .get(`${BASE_URL}Employee`)
        .then(res => {
            dispatch({
                type: EMPLOYEE_LIST,
                payload: res.data
            })
        }
        )
        .catch(err => console.error(err));
}

export const empAddAction = (data) => async (dispatch) => {
    const res = axios
        .post(`${BASE_URL}Employee`, data)
        .then(res => {
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            })
        })
        .catch(err => console.error(err));
}