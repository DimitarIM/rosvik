const Demo = () => {
  return (
    <>
    <div className="relative min-h-screen font-labrada">
      <div className="bg-no-repeat md:bg-center md:bg-cover bg-bottom bg-[url(/img/forest_bg.png)] opacity-150 bg-[length:100%_100%] ">
      <div className="relative z-10 flex flex-col justify-start text-center h-screen px-8 pt-30 md:pt-38">
        <div className="font-labrada text-[14px] md:text-[40px] text-feature mb-20 md:mb-16">
          <h3>Do you think you could survive?</h3>
        </div>
        <h1 className="text-3xl lg:text-8xl md:text-6xl font-light text-feature">
          <a href="http://itch.io"
           target="_blank"
           rel="noopener noreferrer" 
           className="inline-block border-b-2 border-white transition">
            Download to enter Røsvik
          </a>
          </h1>
          <p className="mt-2 text-xs font-light text-feature text-10px md:text-[26px] p-3">You’ll be redirected to itch.io.</p>
        </div>
        </div>
      </div>
    
    </>
  );
}

export default Demo;
