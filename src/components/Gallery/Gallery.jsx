import React, { useState } from "react";
import item from "./data";
import './Gallery.scss'

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("Все работы");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = item.filter((image) =>
        selectedCategory === 'Все работы' || image.category === selectedCategory
    );

    const categories = ["Все работы", "Подушки", "Одеяла", "Вышивка"];

    return (
        <div className="gallery">
            <h1 className="gallery__title">Заголовок</h1>

            <div className="gallery__categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={selectedCategory === category ? "active" : ""}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="gallery__items">
                {filteredItems.length > 0 ? (
                    filteredItems.map((image) => (
                        <div key={image.id}>
                            <img src={image.img} alt={image.title} />
                            <h2>{image.title}</h2>
                            <p>{image.desc}</p>
                            {/* {image.category && <p>Category: {image.category}</p>} */}
                        </div>
                    ))
                ) : (
                    <p>Фотографий не найдено</p>
                )}
            </div>
        </div>
    );
};

export default Gallery;
