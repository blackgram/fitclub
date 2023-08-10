import React, { useState, useEffect } from "react";
import ExercisesSmall from "./ExercisesSmall";

function Exercises() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set the initial screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const exerciseItems = [
    {
      imageClass: "bg-Rectangle7",
      title: "Lifting Weight",
      duration: "42 mins",
      calories: "210 calories",
    },
    {
      imageClass: "bg-Rectangle8",
      title: "Treadmill Workout",
      duration: "30 mins",
      calories: "335 calories",
    },
    {
      imageClass: "bg-Rectangle9",
      title: "Stretching Session",
      duration: "20 mins",
      calories: "115 calories",
    },
    {
      imageClass: "bg-Rectangle10",
      title: "Push Up",
      duration: "30 mins",
      calories: "210 calories",
    },
    {
      imageClass: "bg-Rectangle11",
      title: "Yoga",
      duration: "60 mins",
      calories: "150 calories",
    },
  ];


  return (
    <div class="w-full flex flex-col pb-[2rem]">
      <div class="w-full lg:text-[24px] p-[2rem]">Popular Exercises</div>
      {isSmallScreen ? (
        <div className="mx-[20px]">
            <ExercisesSmall />
        </div>
      ) : (
        <div class="flex justify-evenly overflow-hiddenj">
          {exerciseItems.map((item, index) => (
            <div
              key={index}
              class={`flex flex-col  rounded-t-[10px] cursor-pointer bg-fit  ${
                item.imageClass
              } w-[170px] h-[321px] flex justify-end lg:h-[321px] lg:w-[180px] xl:w-[220px] lg:mx-[.5rem] lg:px-[15px] lg:py-[7px] transform transition-all hover:scale-110 xl:hover:scale-110 transition duration-[0.5s] ease ${
                isHovered ? "hover:justify-center hover:items-center" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div class="lg:text-[16px] font-bold  ">{item.title}</div>
              <div class="lg:text-[12px]">{item.duration}</div>
              <div class="lg:text-[12px]">{item.calories}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercises;
