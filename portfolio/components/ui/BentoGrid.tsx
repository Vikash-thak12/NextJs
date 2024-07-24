import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  img,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  imgClassName?: string
  titleClassName?: string
  img?: string
  spareImg?: string
}) => {
  return (
    <div
      className={cn(
        // "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 border-red-500",
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {
            img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover, object-center")}
              />
            )
          }
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {
            spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={"object-cover, object-center, w-full h-full"}
              />
            )
          }
        </div>
        {
          id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
            </BackgroundGradientAnimation>
          )
        }

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition w-full duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 text-left">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-left">
            {title}
          </div>
          {
            id === 2 && <GlobeDemo />
          }
          {
            id === 3 && (
              <div className="flex gap-3 w-fit absolute lg:top-5 right-5">
                <div className="flex flex-col gap-2 lg:gap-2">
                  {["NextJs", "ReactJs", "TypeScript"].map(
                    (item) => ( 
                      <span key={item} className="py-1 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    )
                  )}
                  <span className="py-4 px-2 rounded-lg text-center bg-[#10132E]" />
                </div>
                <div className="flex flex-col gap-2 lg:gap-2">
                <span className="py-4 px-2 rounded-lg text-center bg-[#10132E]" />
                  {["Tailwind", "NodeJs", "JavaScript"].map(
                    (item) => ( 
                      <span key={item} className="py-1 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          }

          {/* {
            id === 6 (

            )
          } */}
        </div>
      </div >
    </div>
  );
};
