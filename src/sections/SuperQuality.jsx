import Button from "../Components/Button";
import {qualityShoe} from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-2xl">
          Experience{" "}
          <span className="text-[rgb(1,151,178)] inline-block mt-3">
            top-tier footwear
          </span>
          <br />
          With us
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Experience premium comfort and style with our expertly crafted footwear, offering unmatched quality, innovative design, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our commitment to precision and quality guarantees your satisfaction</p>
        <div className="mt-10">
            <Button label="View Details"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
          <img 
              src={qualityShoe} 
              alt="shoe8"
              width={650}
              height={652}
              className="object-contain" 
              draggable="false"
          />
      </div>
    </section>
  );
};

export default SuperQuality;
