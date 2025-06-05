import Image from "next/image";
import mainTrailer from "/public/img/main_game_trailer.png";
import placeholder1 from "/public/img/main_placeholder_1.png";
import placeholder2 from "/public/img/main_placeholder_2.png";
import { Labrada } from "next/font/google";

const MediaTrailer = () => {
    return (
        <div 
            className="media-container max-w-6xl mx-auto text-center font-labrada dark:text-white relative"
            style={{
                backgroundImage: "url('/img/bg_2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                  width: '100vw',
                marginLeft: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            <div className="absolute inset-0  z-0"></div>
            
            <div className="relative z-10 container mx-auto px-4 py-8">
                <h2 className="section-title text-2xl font-bold mb-6 font-[var(--font-labrada)]">
                    Trailer & media
                </h2>
                
                <div className="media-trailer flex flex-col items-center gap-6 mb-12">
                    <div className="main-trailer w-full max-w-4xl">
                        <Image 
                            src={mainTrailer} 
                            alt="Main Game Trailer"
                            className="w-full h-auto rounded-lg shadow-lg"
                            placeholder="blur"
                        />
                    </div>
                    
                    <div className="placeholder-images w-full max-w-4xl flex flex-col sm:flex-row gap-4 justify-center">
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
                
                <h2 className="section-title text-2xl font-bold mb-6 text-center font-[var(--font-labrada)]">
                    Key features
                </h2>
                
                <div className="key-features flex flex-col gap-4 mb-8 max-w-md mx-auto">
                    <div className="feature bg-gray-100/20 dark:bg-gray-800/40 p-4 rounded-lg text-center font-medium backdrop-blur-sm">
                        Scavenge & survive
                    </div>
                    <div className="feature bg-gray-100/20 dark:bg-gray-800/40 p-4 rounded-lg text-center font-medium backdrop-blur-sm">
                        Navigate wilderness
                    </div>
                    <div className="feature bg-gray-100/20 dark:bg-gray-800/40 p-4 rounded-lg text-center font-medium backdrop-blur-sm">
                        Unlock mystical relics
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaTrailer;