const initialEmployeeReducerPage = {
    empDetailsObj: {},
};

const EmployeeReducer = (state = initialEmployeeReducerPage, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'EMP_DETAILS':
            return { ...state, empDetailsObj: payload.data };
        default:
            return state;
    }
}

export default EmployeeReducer;