import Button from "../Components/Button";
import { shoes, statistics } from "../constants";
import { snefersShoe1 } from "../assets/images";
import { useState } from "react";

const HeroSection = () => {
  const [showImg, setShowImg] = useState(snefersShoe1);

  return (
    // <section
    //   id="home"
    //   className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen"
    // >
    //   <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-[55px]">
    //       <p className="text-xl font-montserrat text-[rgb(1,151,178)] mb-4 mt-6">Our awesome collections</p>
    //       <h1 className='mt-2 font-palanquin text-[75px] max-sm:text-[72px] leading-[90px] font-semibold'>
    //         <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Brand New Arrival</span>
    //         <br />
    //         <span className='mt-3 text-[rgb(1,151,178)] inline-block font-oswald-400'>Snefers</span> Shoes
    //       </h1>
    //       <p className='font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-4 sm:max-w-sm '>Take a look at our trending arrivals, quality comfort <span className='text-[rgb(1,151,178)] font-bold'>Snefers</span> to make your life more perfect
    //       </p>
    //       <Button label="Grab it"/>

    //       <div  className='flex justify-start items-start flex-wrap w-full gap-16'>
    //         { statistics.map((stat)=>(
    //             <div key={stat.label} className='mt-4'>
    //               <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
    //               <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
    //             </div>
    //         )) }
    //       </div>
    //   </div>

    //   <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max:xl:py-40 bg-primary bg-hero bg-cover bg-center'>
    //     <img
    //       src={snefersShoe1}
    //       alt="shoe collection"
    //       width={610}
    //       height={500}
    //       className='object-contain relative z-10'
    //     />
    //   </div>

    // </section>
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/4 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        {/* <p className="text-xl font-montserrat text-[rgb(1,151,178)] ml-2">
          Our awesome collections
        </p> */}

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap lg:relative lg:z-10 pr-10">
            Brand New Arrival
          </span>
          <br />
          <span className="text-[rgb(1,151,178)] inline-block mt-3">
            Snefers
          </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm">
          Take a look at our trending arrivals, quality comfort{" "}
          <span className="text-[rgb(1,151,178)] font-bold">Snefers</span> to
          make your life more perfect
        </p>

        <Button label="Shop now" />

        <div className="flex justify-start items-start flex-wrap w-full mt-5 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-[rgb(1,151,178)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
        <img
          src={showImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain lg:relative lg:z-10"
          draggable="false"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((index) => (
            <img
              className={`border-black border-4 rounded-xl bg-white cursor-pointer hover:bg-[rgb(1,151,178)] transition-all`}
              key={index}
              width={140}
              height={110}
              src={index.thumbnail}
              onMouseEnter={()=>{setShowImg(index.bigShoe)}}
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
