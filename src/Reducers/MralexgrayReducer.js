const initialMralexgrayState = {
    MralexgrayDetailsObj: {},
    isLoading: true
};

const MralexgrayReducer = (state = initialMralexgrayState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'MRA_DETAILS':
            return { ...state, MralexgrayDetailsObj: payload.data, isLoading: false };
        case 'MRA_DETAILS_FAILED':
            return { ...state, isLoading: false };
        default:
            return state;
    }
}

export default MralexgrayReducer;