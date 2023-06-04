import React, {useState} from 'react';
import {Slider} from "@mui/material";
import './Slider.css';

const SliderComponent = ({value, setValue}) => {

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    }

    const handleMinusClick = e => {
        if(value === 0) return;
        setValue(prevState => prevState - 50);
    }
    const handlePlusClick = e => {
        if(value === 100) return;
        setValue(prevState => prevState + 50);
    }

    return (
        <div className={'Slider'}>
            <i className="fa-solid fa-minus Slider__icon" onClick={handleMinusClick}></i>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                value={value}
                onChange={handleSliderChange}
                step={50}
                min={0}
                max={100}
            />
            <i className="fa-solid fa-plus Slider__icon" onClick={handlePlusClick}></i>
        </div>
    );
};

export default SliderComponent;