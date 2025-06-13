'use client'
import Image from "next/image";
import mainTrailer from "/public/img/main_game_trailer.png";
import placeholder1 from "../../../public/img/main_placeholder_1.png";
import placeholder2 from "../../../public/img/main_placeholder_2.png";
import leftArrow from "../../../public/btn/arrow-btn_left.png";
import rightArrow from "../../../public/btn/arrow-btn_right.png";
import { useState } from "react";
import KeyFeatures from "../KeyFeatures";
import { keyfeaturesData } from "@/data/keyfeaturesdata";

const MediaTrailer = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [mainTrailer, placeholder1, placeholder2];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div
            className="media-container w-screen relative"
            style={{
                backgroundImage: "url('/img/bg_1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                width: '100%'
            }}
        >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-center section-title text-3xl font-bold mb-6 font-[var(--font-labrada)]">
                    Trailer & media
                </h2>

                <div className="hidden md:block">
                    <div className="main-trailer w-full max-w-4xl mx-auto cursor-pointer">
                        <a href="https://changemakereducation-my.sharepoint.com/personal/andreas_holewa_edu_futuregames_se/_layouts/15/stream.aspx?id=%2Fpersonal%2Fandreas%5Fholewa%5Fedu%5Ffuturegames%5Fse%2FDocuments%2FDocuments%2FGP3%2FEXPORT%2FTESTGREJER%2FFogstyle%5Ftest%5F4%5Fhigh%5F2%2Emov&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E822cf7be%2Db8a4%2D4bdd%2Dac31%2D218587e91148" target="_blank" rel="noopener noreferrer">
                            <div className="relative group">
                                <Image
                                    src={mainTrailer}
                                    alt="Main Game Trailer"
                                    className="w-full h-auto rounded-lg shadow-lg transition-opacity group-hover:opacity-90"
                                    placeholder="blur"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-black/50 p-4 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="placeholder-images w-full max-w-4xl mx-auto flex gap-4 justify-center mt-6">
                        <Image
                            src={placeholder1}
                            alt="Placeholder 1"
                            className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                            placeholder="blur"
                        />
                        <Image
                            src={placeholder2}
                            alt="Placeholder 2"
                            className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                            placeholder="blur"
                        />
                    </div>
                </div>

                <div className="md:hidden relative w-full max-w-4xl mx-auto">
                    <div className="relative aspect-video">
                        <a href="https://www.youtube.com/watch?v=gQwgbpyIuEc" target="_blank" rel="noopener noreferrer" className="block relative group">
                            <Image
                                src={slides[currentSlide]}
                                alt={`Slide ${currentSlide + 1}`}
                                className="w-full h-auto rounded-lg shadow-lg transition-opacity group-hover:opacity-90"
                                placeholder="blur"
                            />
                            {currentSlide === 0 && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-black/50 p-4 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </a>
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2"
                    >
                        <Image
                            src={leftArrow}
                            alt="Previous"
                            width={40}
                            height={40}
                        />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2"
                    >
                        <Image
                            src={rightArrow}
                            alt="Next"
                            width={40}
                            height={40}
                        />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>


            </div>
            <KeyFeatures keyfeatures={keyfeaturesData} />
        </div>
    );
};

export default MediaTrailer;