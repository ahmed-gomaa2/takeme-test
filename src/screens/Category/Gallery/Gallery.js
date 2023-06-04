import React, {useState} from 'react';
import './Gallery.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Gallery = ({products, setGalleryOpen, index}) => {
    // const [currProduct, setCurrentProduct] = useState(index);

    // const nextImg = () => {
    //     if(currProduct === products.length - 1) {
    //         setCurrentProduct(prevState => 0);
    //     }else {
    //         setCurrentProduct(prevState => prevState + 1);
    //     }
    // }
    //
    // const prevImg = () => {
    //     if(currProduct === 0) {
    //         setCurrentProduct(prevState => products.length - 1);
    //     }else {
    //         setCurrentProduct(prevState => prevState - 1);
    //     }
    // }

    return (
        <div className={'Gallery'}>
            {/*<div onClick={nextImg} className="Gallery__right-arrow Gallery__arrow">*/}
            {/*    <i className="fa-solid fa-arrow-right"></i>*/}
            {/*</div>*/}
            {/*<div onClick={prevImg} className="Gallery__left-arrow Gallery__arrow">*/}
            {/*    <i className="fa-solid fa-arrow-left"></i>*/}
            {/*</div>*/}
            <div onClick={() => setGalleryOpen(false)} className="Gallery__backdrop"></div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"

                // className={'Gallery__swiper'}
            >
                {
                    products.map((p, i) => (
                        <SwiperSlide key={i}>
                            <img src={p.imagePath} alt="Current Image"/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div onClick={() => setGalleryOpen(false)} className="Gallery__close">
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    );
};

export default Gallery;