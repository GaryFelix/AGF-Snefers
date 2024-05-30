import { offer } from "../assets/images";
import Button from "../Components/Button";

const Offers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offers"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-2xl">
          Special footwear with {""}
          <span className="text-[rgb(1,151,178)] inline-block mt-3">
          Special offers
          </span>
          
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Discover a shopping adventure like no other with exceptional deals. Enjoy top-tier selections and remarkable savings, delivering unmatched value that stands out.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Enter a universe crafted to fulfill your individual wishes, surpassing all expectations. Your experience with us is genuinely exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" />
          <Button label="Learn more"
              backgroundColor="bg-black"
              borderColor="border-slate-gray"
              textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
