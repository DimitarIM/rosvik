const GameLowerSection = () => {
    return (
        <div className={`relative bg-[url('/img/about_sticky.png')] bg-cover bg-no-repeat flex  items-center px-15 md:p-70 lg:p-80  `}>
            <div 
                className="sm:relative sm:flex-col sm:z-[2] md:absolute lg:absolute flex justify-start bg-foreground text-color-primary lg:w-[513px] md:w-[300px] w-[300px] h-[300px] lg:h-[390px] md:h-[240px] left-[85px]  lg:top-[890px] md:top-[686px]  rounded-[10px] shadow-lg max-w-xl opacity 30% lg:z-[1] md:z-[1]">
                <div className='pl-8 mt-10'>
                <p>World & Mythology</p>
                <p>(...)</p>
                </div>
            </div>  
        </div>
    )
}

export default GameLowerSection;