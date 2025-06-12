'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { SingleMemberProps } from '@/types/types';
  
function Carousel({work}:SingleMemberProps) {
    // if (work === undefined || work.length === 0 ) return null;
    const images = ["/img/slideshow-img_1.png", "/img/slideshow-img_2.png", "/img/slideshow-img_3.png", "/img/slideshow-img_4.png", "/img/slideshow-img_5.png"];

    const [posIndexes, setPosIndexes] = useState(images.map((_,index) => index));
    console.log(posIndexes);
    const workSize = images.length;


    const handleNext = () => {
        setPosIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % workSize
            );
            console.log(updatedIndexes)
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPosIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + workSize - 1) % workSize
            );
            console.log(updatedIndexes)
            return updatedIndexes;
        });
    };

    let positions:string[] = ["center"];
    let positions_left:string[] = [];
    let positions_right:string[] = [];

    for (let i = 0; i < workSize -1; i++) {
        if (i % 2 === 0) positions_right.push("right" + positions_right.length)
        else positions_left.push("left" + positions_left.length)
    }

    positions = positions.concat(positions_left.concat(positions_right));
    console.log(positions);
    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        right0: { x: "100%", scale: 0.8, zIndex: 2 },
        right1: { x: "200%", scale: 0.8, zIndex: 3 },
        left0: { x: "-100%", scale: 0.8, zIndex: 2 },
        left1: { x: "-200%", scale: 0.8, zIndex: 3 },
    };
    return (
        <div className="relative overflow-hidden flex items-center flex-col justify-center w-full h-full">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="rounded-[12px]"
                    initial="center"
                    animate={positions[posIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.2 }}
                    style={{ width: "40%", position: "absolute" }}
                />
            ))}
            <div className="mt-[300px] sm:mt-[400px] md:mt-[400px] lg:mt-[600px] xl:mt-[1000px] flex flex-row gap-3 ">
                <button
                    onClick={handleBack}
                >
                    <img className='w-full h-full' src="/btn/arrow-btn_left.png" alt="" />
                </button>
                <button
                    onClick={handleNext}
                >
                    <img src="/btn/arrow-btn_right.png" alt="" />
                </button>
            </div>
        </div>
    );
}

export default Carousel