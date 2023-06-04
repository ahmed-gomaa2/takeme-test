import axios from "axios";
import {
    GET_CATEGORIES_SUCCESS, GET_CATEGORY_SUCCESS
} from "./actionTypes";
import * as log from "react-dom/test-utils";

export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get('https://takeme-all.com/app/endpoints/categories/list?locale=ar');
        dispatch({
            type: 'GET_CATEGORIES_SUCCESS',
            categories: res.data.output
        });

    }catch (e) {
        console.error(e.message)
    }
}

export const getCategory = id => async dispatch => {
    try {
        const res = await axios.get(`https://takeme-all.com/app/endpoints/products-types?locale=ar&categoryId=${id}&page=0`);
        dispatch({
            type: GET_CATEGORY_SUCCESS,
            products: res.data
        });
    }catch (e){
        console.error(e.message)
    }
}