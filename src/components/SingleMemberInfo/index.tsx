import { SingleMemberProps } from "../../types/types";

const SingleMemberInfo = (member: SingleMemberProps) => {
  const { title, image, name, quote, linkedin, github, discord } = member;
  if (!quote) return (
    <div className="w-full font-labrada flex flex-col items-center p-9 pt-10 lg:p-25">
      <div className="w-full flex flex-col lg:flex-row justify-center gap-10 lg:gap-15">
        {/* First column box */}
        <div className="w-full flex justify-between items-center flex-col gap-5 lg:gap-10 
        text-[12px] md:text-[22px] lg:text-[34px]">
          <div className="flex-1 lg:flex-none">
            <p className="text-2xl md:text-4xl lg:text-6xl">{name}</p>
            <p>{title}</p>
          </div>
          <div className="shadow-2xl relative w-[70%] max-w-[25rem] aspect-square overflow-hidden rounded-full">
            <img
              src={image}
              alt={name}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            {
              linkedin && <a className="text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]" href={linkedin} target="_blank">
                LinkedIn
              </a>
            }
            <br />
            {
              github && <a className="text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]" href={github} target="_blank">
                GitHub
              </a>
            }
            <br />
            {
              discord && <a className="text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]" href={discord} target="_blank">
                Discord
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  )
  else
    return (
      <div className="w-full font-labrada flex flex-col items-center p-9 pt-10 lg:p-25 ">
        <div className="w-full flex flex-col lg:flex-row justify-center gap-10 lg:gap-15">

          {/* First column box */}
          <div className="w-full max-w-2xl flex justify-between items-center lg:justify-start flex-row-reverse 
        lg:flex-col gap-5 lg:gap-10 
        text-[12px] md:text-[18px] lg:text-[24px]">
            <div className="flex-1 lg:flex-none">
              <p className="text-2xl lg:text-4xl">{name}</p>
              <p>{title}</p>
            </div>
            <div className="shadow-2xl relative w-[90px] md:w-[150px] lg:w-[290px] aspect-square overflow-hidden rounded-full">
              <img
                src={image}
                alt={name}
                width={100}
                height={100}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Second column box */}
          <section className="flex flex-col-reverse lg:flex-col text-color-primary space-y-[50px] text-[12px] lg:text-[26px]">
            <div className="lg:mt-[170px] p-5 lg:p-[55px] flex-1 bg-foreground rounded-[10px] text-[14px] lg:text-[26px]">
              <span>{quote}</span>
            </div>
            <div className="flex justify-start items-center gap-4 lg:gap-15 p-4">
              {
                linkedin && <a className="text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]" href={linkedin} target="_blank">
                  LinkedIn
                </a>
              }
              <br />
              {
                github && <a className="text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]" href={github} target="_blank">
                  Github
                </a>
              }
              <br />
              {
                discord && <a className="text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]" href={discord} target="_blank">
                  Discord
                </a>
              }

            </div>
          </section>
        </div>
      </div>
    );
};
export default SingleMemberInfo;
