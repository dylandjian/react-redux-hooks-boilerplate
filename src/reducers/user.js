const initialState = {
    username: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.username,
            };
        default:
            return state;
    }
};

export default user;
