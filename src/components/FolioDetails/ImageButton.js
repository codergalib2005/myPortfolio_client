import React from 'react';
import image from "../../assets/ss.png";

const ImageButton = ({images}) => {
    return (
        <div className='h-150 overflow-hidden'>
            <img src={image} alt="" />
        </div>
    );
};

export default ImageButton;