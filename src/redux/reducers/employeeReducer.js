import { ADD_EMPLOYEE, EMPLOYEE_LIST } from "../Types";

const initState = {
    employee: [],
    loading: true
}

export default function employeeReducer(state = initState, action) {
    switch (action.type) {
        case EMPLOYEE_LIST:
            return {
                ...state,
                employee: action.payload,
                loading: false
            }

        case ADD_EMPLOYEE:
            return {
                ...state,
                employee: [action.payload, ...state.employee],
                loading: false
            }
        default:
            return state
    }
}