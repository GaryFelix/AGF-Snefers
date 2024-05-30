import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex flex-col justify-between items-center max-lg:flex-col gap-10 p-12 capitalize"
      id="contact"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-full font-palanquin font-bold">
        Sign Up from
        <span className="text-[#0197b2]"> Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@snefers.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full capitalize">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
