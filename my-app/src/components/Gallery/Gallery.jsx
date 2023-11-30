import React from "react";
import "./Gallery.scss";

const Gallery = (props) => {
    return (
        <>
            <div className="gallery__card">
                <img className="hero-image" src={props.image} alt="фото"></img>
            </div>
        </>
    );
};

export default Gallery;
