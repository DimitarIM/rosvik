import Image from "next/image";
import mainTrailer from "/public/img/main_game_trailer.png";
import placeholder1 from "/public/img/main_placeholder_1.png";
import placeholder2 from "/public/img/main_placeholder_2.png";

const MediaTrailer = () => {
    return (
        <div className="media-trailer">
            <div className="main-trailer">
                <Image 
                    src={mainTrailer} 
                    alt="Main Game Trailer"
                    width={800}
                    height={450}
                    priority
                />
            </div>
            <div className="placeholder-images">
                <Image 
                    src={placeholder1} 
                    alt="Placeholder 1"
                    width={400}
                    height={225}
                />
                <Image 
                    src={placeholder2} 
                    alt="Placeholder 2"
                    width={400}
                    height={225}
                />
            </div>
        </div>
    );
};

export default MediaTrailer;