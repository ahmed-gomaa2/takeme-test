import React, {useEffect, useRef} from 'react';
import './Product.css';

const Product = ({product, value, setGalleryOpen, setIndex, index}) => {

    const productRef = useRef();

    const changeHeightToWidth = () => {
        const productWidth = productRef.current.getBoundingClientRect().width;
        productRef.current.style.height = `${productWidth}px`;
    }

    useEffect(() => {
        changeHeightToWidth();
    }, [value]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            changeHeightToWidth()
        })
    }, [])


    return (
        <div ref={productRef} className={'Product'}>
            <img onClick={() => {
                setIndex(index)
                setGalleryOpen(true);
            }} src={product.imagePath} alt=""/>
            <p>{product.title}</p>
        </div>
    );
};

export default Product;