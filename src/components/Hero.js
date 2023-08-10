import React from "react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <>
      <div class="flex justify-center items-center w-full mt-[1rem] mt-[3rem]">
        <div class="flex justify-center items-center flex-col xl:max-w-[630px] lg:max-w-[506px] md:max-w-[335px] max-w-[250px]">
          <div class="w-full flex justify-end">
            <h3 class="text-right">Best Fitness Club</h3>
          </div>
          <h1
            class=" xl:text-[150px] font-bold text-transparent 
                    bg-clip-text bg-gradient-to-r from-[#29B21E] to-[#DDA2E6]
                    lg:text-[120px] md:text-[80px] text-[60px]"
          >
            FITNESS
          </h1>
          <div class="w-full mb-[20px]">
            <p class="text-[12px] xl:text-[23px] w-full text-center lg:text-[18px] md:text-[15px]">
              In here we will help you to shape and build your ideal body and
              leave up your life to the fullest
            </p>
          </div>
          <div class="flex mb-[30px]">
            <div class="bg-greenish rounded-[5px] w-[100px] cursor-pointer xl:w-[120px] lg:w-[100px] py-1 text-center mx-[10px]">
              <a href="#a">Get Started</a>
            </div>
            <div class="border rounded-[5px] cursor-pointer border-greenish py-1 w-[100px] xl:w-[120px] lg:w-[100px]  text-center mx-[10px]">
              <a href="#a" className="cursor-pointer">
                Learn More
              </a>
            </div>
          </div>
          <div class="flex items-center justify-center text-center">
            <div class="flex items-center justify-center text-center flex-col mx-[20px] md:mx-[10px]">
              <h4 class="font-bold text-[24px] md:text-[20px]">
              <CountUp start={0} end={140} suffix="+" duration={3} />
              </h4>
              <p class="text-[12px] md:text-[10px]">Expert Coaches</p>
            </div>
            <div class="mx-[20px] flex items-center justify-center text-center flex-col md:mx-[10px]">
              <h4 class="font-bold text-[24px] md:text-[20px]">
                <CountUp start={0} end={978} suffix="+" duration={3} />
              </h4>
              <p class="text-[12px] md:text-[10px]">Members Joined</p>
            </div>
            <div class="flex items-center justify-center text-center flex-col mx-[20px] md:mx-[10px]">
              <h4 class="font-bold text-[24px] md:text-[20px]">
              <CountUp start={0} end={50} suffix="+" duration={3} />
              </h4>
              <p class="text-[12px] md:text-[10px]">Fitness Programs</p>
            </div>
          </div>
        </div>
        <img
          src="/assets/pic1.png"
          alt=""
          class="absolute left-0 top-[100px] w-[170px] md:top-[50px] md:left-[-70px] md:w-[650px] lg:left-[0px] lg:top-[50px] lg:w-[650px] lg:max-h-[10000px] xl:top-[20px] xl:left-[0] xl:w-[950px] xl:max-h-[250000px] "
        />
        <img
          src="/assets/Group2.png"
          alt=""
          class="absolute left-0 top-[90px] w-[80px] md:w-[200px] md:left-[-50px] lg:left-[-50px] lg:top-[50px] lg:w-[250px] xl:w-[250px] xl:max-h-[2500px]"
        />
      </div>
      <div class="flex w-full justify-evenly my-[2rem]">
        <div
          class="flex flex-col bg-grayish md:absolute right-[3vw] z-10 xl:w-[200px] lg:w-[160px] xl:h-[120px] lg:h-[110px]  
                 xl:top-[280px] lg:top-[190px] rounded-[5px] top-[170px] w-[120px] h-[100px]"
        >
          <div class="w-full flex justify-end pt-[10px] pr-[5px]">
            <img alt="" src="/assets/Star2.png" class="h-[20px] xl:h-[30px]" />
          </div>
          <div class="flex justify-between items-end h-[100%] w-full ">
            <div class="flex items-end mx-[6px] mb-[10px]">
              <img
                alt=""
                src="/assets/grouped/Group3.png"
                class="xl:h-[50px] lg:h-[30px] mr-[3px] h-[24px]"
              />
              <img
                alt=""
                src="/assets/grouped/Group4.png"
                class="xl:h-[60px] lg:h-[45px] mr-[3px] h-[38px]"
              />
              <img
                alt=""
                src="/assets/grouped/Group5.png"
                class="xl:h-[35px] lg:h-[25px] mr-[3px] h-[20px]"
              />
              <img
                alt=""
                src="/assets/grouped/Group6.png"
                class="xl:h-[70px] lg:h-[55px] mr-[3px] h-[45px]"
              />
              <img
                alt=""
                src="/assets/grouped/Group7.png"
                class="xl:h-[50px] lg:h-[30px] h-[24px]"
              />
            </div>
            <div class="w-[55%]  mb-[6px]">
              <p class="xl:text-[12px] lg:text-[10px] text-[8px]">
                Calories Burned
              </p>
              <h4 class="xl:text-[16px] lg:text-[14px] font-bold text-[12px]">
                220 kcal
              </h4>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col bg-grayish md:absolute lg:right-[3vw] xl:w-[200px] lg:w-[160px] xl:h-[120px] lg:h-[110px]
                  z-10 right-[3vw] top-[300px] lg:top-[320px] xl:top-[420px] rounded-[5px] w-[120px] h-[100px]"
        >
          <div class="w-full flex justify-end  pt-[10px] pr-[5px]">
            <img alt="" src="/assets/Star1.png" class="h-[20px] xl:h-[30px]" />
          </div>
          <div class="flex justify-between items-end h-[100%] w-full ">
            <img
              alt=""
              src="/assets/heartecg.png"
              class="h-[50px] lg:h-[40px] m-[6px]"
            />
            <div class="w-[55%]  mb-[6px]">
              <p class="text-[12px] lg:text-[10px] text-[8px]">Heart Rate</p>
              <h4 class="xl:text-[16px] lg:text-[14px] font-bold text-[12px]">
                116 bpm
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
