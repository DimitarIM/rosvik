
import SlideShow from "@/components/SlideShow";

const Test = () => {
  const images = ["/img/slideshow-img_1.png","/img/slideshow-img_2.png","/img/slideshow-img_3.png","/img/slideshow-img_4.png","/img/slideshow-img_5.png","/img/slideshow-img_6.png",]
  return (
    <>
      <main className="w-full h-full min-h-[100vh] flex flex-col justify-center items-center">
        <SlideShow imageUrls={images}/>
      </main>

    </>
  );
};
export default Test;
