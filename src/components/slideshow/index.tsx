'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion';
  
function SlideShow() {
    const [posIndexes, setPosIndexes] = useState([0, 1, 2, 3, 4]);
    const images = ["/img/slideshow-img_1.png", "/img/slideshow-img_2.png", "/img/slideshow-img_3.png", "/img/slideshow-img_4.png", "/img/slideshow-img_5.png"]
    const handleNext = () => {
        setPosIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPosIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
    return (
        <div className="flex items-center flex-col justify-center w-full h-full">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="rounded-[12px]"
                    initial="center"
                    animate={positions[posIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: "40%", position: "absolute" }}
                />
            ))}
            <div className="mt-[300px] sm:mt-[400px] md:mt-[400px] lg:mt-[600px] xl:mt-[1000px] flex flex-row gap-3 ">
                <button
                    className="rounded-md py-2 px-4"
                    onClick={handleBack}
                >
                    <img className='w-full h-full' src="/btn/arrow-btn_left.png" alt="" />
                </button>
                <button
                    className="rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    <img src="/btn/arrow-btn_right.png" alt="" />
                </button>
            </div>
        </div>
    );
}

export default SlideShow