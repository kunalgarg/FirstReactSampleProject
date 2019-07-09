const initialMralexgrayState = {
    mralexgrayDetailsObj: {},
};

const MralexgrayReducer = (state = initialMralexgrayState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'MRA_DETAILS':
            return { ...state, MralexgrayDetailsObj: payload.data };
        default:
            return state;
    }
}

export default MralexgrayReducer;