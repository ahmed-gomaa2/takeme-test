import * as actionTypes from '../actions/actionTypes';
const initialState = {
    categories: [],
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return (() => {
                return {
                    ...state,
                    categories: action.categories
                }
            })();
        case actionTypes.GET_CATEGORY_SUCCESS:
            return (() => {
                return {
                    ...state,
                    products: action.products
                }
            })();
        default:
            return state;
    }
}