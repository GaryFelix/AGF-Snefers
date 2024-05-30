import { star } from "../assets/icons";

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
            src={imgURL}
            alt={name}
            className="w-[280px] h-[280px] rounded-[20px] hover:cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:transition-all hover:shadow-2xl hover:shadow-[#0197b2]"
            draggable="false"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img 
                src={star}
                alt="ratings"
                width={24}
                height={24}
                draggable="false"
            />
            <p className="font-oswald text-xl leading-normal text-slate-gray">(4.7)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-oswald text-[rgb(1,151,178)] text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard