import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getCategory} from "../../store/actions/categories.action";
import {Slider} from "@mui/material";
import SliderComponent from "./Slider/Slider";
import Products from "./Products/Products";
import Gallery from "./Gallery/Gallery";
import {Swiper} from "swiper";

const Category = ({getCategory, products}) => {
    const [value, setValue] = useState(50);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [index, setIndex] = useState(null);

    const params = useParams();

    useEffect(() => {
        getCategory(params.id);
    }, [params.id]);


    return (
        <div className={'CategoryComp'} >
            <SliderComponent setValue={setValue} value={value} />
            <Products setIndex={setIndex} setGalleryOpen={setGalleryOpen} products={products} value={value} />
            {
                products.length > 0 && galleryOpen &&  (
                    <Gallery index={index} setGalleryOpen={setGalleryOpen} products={products} />
                )
            }
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.categories.products
})

export default connect(mapStateToProps, {getCategory}) (Category);