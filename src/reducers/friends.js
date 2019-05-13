const initialState = {
    friends: [],
};

const friends = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                ...state,
                friends: [...state.friends, ...action.newFriend],
            };
        default:
            return state;
    }
};

export default friends;
