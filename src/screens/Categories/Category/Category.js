import React from 'react';
import './Category.css';
import {Link} from "react-router-dom";

const Category = ({cat}) => {
    return (
        <Link to={`/${cat.id}`} className={'Category'}>
            <img src={cat.imagePath} />
            <p>{cat.name}</p>
        </Link>
    );
};

export default Category;