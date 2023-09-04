    // reducers/nameReducer.js
    const initialState = {
        names: 'anak',
        emails: 'citayam'
    };
    
    const formReducer = (state = initialState, action) => {
        switch (action.type) {
        case 'SET_NAME':
            return {
            ...state,
            names: action.payload.name,
            emails: action.payload.email
            };
        default:
            return state;
        }
    };
    
    export default formReducer;
    