'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { SingleMemberProps } from '@/types/types';

function Carousel({ work }: SingleMemberProps) {
    //Placeholder Image Array  
    work = ["/img/slideshow-img_1.png", "/img/slideshow-img_2.png", "/img/slideshow-img_3.png", "/img/slideshow-img_4.png", "/img/slideshow-img_5.png"]; 
    const workSize = work.length;
    const [posIndexes, setPosIndexes] = useState(work.map((_, index) => index));
    const [isLower] = useState<boolean>(workSize < 3)

    if (work === undefined || work.length === 0) return null;

    let positions: string[] = [];
    let imageVariants: Record<string, any> = {}

    //Button logic

    const handleNext = () => {
        setPosIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % workSize
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPosIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + workSize - 1) % workSize
            );
            return updatedIndexes;
        });
    };

    if (isLower) {
        if (workSize !== 1) {
            positions = ["left0", "right0"];

            imageVariants =
            {
                right0: { x: "-50%", scale: 0.8, zIndex: 2 },
                left0: { x: "50%", scale: 0.8, zIndex: 2 },
            }
        }
        else {
            positions = ["center"];

            imageVariants =
            {
                center: { x: "0", scale: 1, zIndex: 2 }
            }
        }
    }
    else {
        //SetPositions    
        positions = ["center"];
        const positions_left: string[] = [];
        const positions_right: string[] = [];

        for (let i = 0; i < workSize - 1; i++) {
            if (i % 2 === 0) positions_right.push("right" + positions_right.length)
            else positions_left.push("left" + positions_left.length)
        }
        positions = positions.concat(positions_left.concat(positions_right));

        //SetVariants
        imageVariants =
        {
            center: { x: "0%", scale: 1, zIndex: 5 },
            //  right1: { x: "100%", scale: 0.8, zIndex: 3 },
            //  right0: { x: "200%", scale: 0.8, zIndex: 2 },
            // left0: { x: "-100%", scale: 0.8, zIndex: 2 },
            //  left1: { x: "-200%", scale: 0.8, zIndex: 3 },
        }

        for (let i = 1; i <= positions_left.length; i++) {
            imageVariants[positions_left[i - 1]] = {
                x: `-${i * 100}%`, scale: 0.8, zIndex: 1 + i
            }
        }

        for (let i = 0; i < positions_right.length; i++) {
            imageVariants[positions_right[i]] = {
                x: `${(positions_right.length - i) * 100}%`, scale: 0.8, zIndex: positions_right.length - i
            }
        }
    }
    console.log(imageVariants);
    console.log(positions);

    return (
        <div className='flex flex-col gap-10 justify-center items-center'>  
            <h3 className='text-5xl'>Portfolio</h3>
            <div className="relative overflow-hidden flex items-center flex-col justify-center w-full h-full">
                <img className='w-full sm:w-[40%] invisible' src={work[0]} alt="" />
                {work.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={image}
                        className="rounded-[12px] w-full sm:w-[40%]"
                        initial="center"
                        animate={positions[posIndexes[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.2 }}
                        style={{position: "absolute" }}
                    />
                ))}
            </div>
            <div className="flex flex-row gap-3 justify-center">
                {
                    isLower ? null :
                        <>
                            <button onClick={handleBack}>
                                <img className='w-full h-full' src="/btn/arrow-btn_left.png" alt="" />
                            </button>
                            <button onClick={handleNext}>
                                <img src="/btn/arrow-btn_right.png" alt="" />
                            </button>
                        </>
                }
            </div>
        </div>


    );
}

export default Carousel