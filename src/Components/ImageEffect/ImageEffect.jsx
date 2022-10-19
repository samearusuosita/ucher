import React from 'react';
// import {Images} from "../../Constant";
import "./ImageEffect.scss";

import ImageEffect from "react-photo-album";

const photos = [
    {
        src: '../../Img/tewizy_bbg.JPG',
        width: 800,
        height: 600
    },
    {
        // src: "Images.tewizy_bbg.JPG",
        width: 1600,
        height: 900
    }
];

<ImageEffect layout="rows" photos={photos} />

export default ImageEffect;