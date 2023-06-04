import React, {useEffect, useRef, useState} from 'react';
import './Categories.css';
import {connect} from "react-redux";
import Category from "./Category/Category";
import {Link} from "react-router-dom";

const Categories = ({categories}) => {
    const categoriesRef = useRef();

    const leftArrowClickHandler = e => {
        categoriesRef.current.scrollLeft = categoriesRef.current.scrollLeft - 200;
    }

    const rightArrowClickHandler = e => {
        categoriesRef.current.scrollLeft = categoriesRef.current.scrollLeft + 200;
    }
    return (
        <div className={'Categories'}>
            <div className="Categories__left-arrow Categories__arrow" onClick={leftArrowClickHandler}><i className="fa-solid fa-arrow-left"></i></div>
            <div className="Categories__right-arrow Categories__arrow" onClick={rightArrowClickHandler}><i className="fa-solid fa-arrow-right"></i></div>
            <div ref={categoriesRef} className="Categories__parent">
                <div className="Categories__container">
                    {
                        categories.map((cat, i) => (
                            <Category key={cat.id} cat={cat} />
                        ))
                    }
                </div>
            </div>
            <Link style={{marginTop: '20px', display: 'block'}} to={'/localization'} >Localization Using i18next Tool.</Link>
        </div>
    );
};

const mapStateToProps = state => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps) (Categories);