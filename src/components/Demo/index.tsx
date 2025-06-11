const Demo = () => {
  return (
    <>
    <div className="relative min-h-scree font-labrada">
      <div className="absolute inset-0 bg-[length] bg-center opacity-70"
        style={{ backgroundImage:`url('/img/forest_bg.png')`}}
      />
      <div className="relative z-10 flex flex-col justify-center h-screen text-center px-4">
        <div className="font-labrada text-[14px] md:text-[40px] text-feature mb-32 md:mb-32">
          <h3>Do you think you could survive?</h3>
        </div>
        <h1 className="text-3xl lg:text-8xl md:text-6xl font-light text-feature">
          <a href="http://itch.io"
           target="_blank"
           rel="noopener noreferrer" 
           className="inline-block border-b-2 border-white transition"
          >
            Download to enter Røsvik
          </a>
          </h1>
          <p className="mt-2 text-xs font-light text-feature text-10px md:text-[26px] p-3">You’ll be redirected to itch.io.</p>
        </div>
      </div>
    
    </>
  );
}

export default Demo;
