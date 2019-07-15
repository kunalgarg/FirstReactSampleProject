const initialEmployeeReducerPage = {
    empDetailsObj: {},
    colorArr: ['red', 'green', 'blue']
};

const EmployeeReducer = (state = initialEmployeeReducerPage, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'EMP_DETAILS':
            return { ...state, empDetailsObj: payload.data, colorArr: 'black' };
        default:
            return state;
    }
}

export default EmployeeReducer;