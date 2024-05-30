import {loaderCSS} from "../assets/images";

const Loader = () => {

    
  
return (
    <div className="flex justify-center items-center h-[100vh] gap-10">
      <img src={loaderCSS} alt="loader" className="w-[150px] h-[100px]" />
    </div>
  );
};

export default Loader;
