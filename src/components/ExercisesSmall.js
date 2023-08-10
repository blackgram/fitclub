import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ExercisesSmall = () => {

    const [isHovered, setIsHovered] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 301 },
      items: 2,
    },

  };

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
    <Carousel 
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    removeArrowOnDeviceType={["mobile"]}
    >
      {exerciseItems.map((item, index) => (
            <div
              key={index}
              class={`flex flex-col  rounded-t-[10px] cursor-pointer bg-fit  ${
                item.imageClass
              } flex items-start justify-end w-[120px] h-[250px] xs:w-[150px] xs:h-[300px] sm:w-[160px] sm:h-[310px] md:w-[170px] md:h-[321px] lg:h-[321px] lg:w-[180px] xl:w-[220px] lg:mx-[.5rem] lg:px-[15px] lg:py-[7px] transform transition-all hover:scale-110 xl:hover:scale-125 transition duration-[0.5s] ease ${
                isHovered ? "hover:justify-center hover:items-center" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div class="text-[12px] sm:text-[16px] font-bold ml-[5px] ">{item.title}</div>
              <div class="text-[10px] sm:text-[12px] ml-[5px]">{item.duration}</div>
              <div class="text-[10px] sm:text-[12px] ml-[5px] mb-[5px]">{item.calories}</div>
            </div>
          ))}
    </Carousel>
  );
};

export default ExercisesSmall;
