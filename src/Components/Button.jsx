
const Button = ({label, backgroundColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-[rgb(1,151,178)] rounded-full text-white border-[rgb(1,151,178)] hover:shadow-md hover:shadow-[#0197b2] hover:-translate-y-1 hover:transition-all 
    ${
      backgroundColor ? `${backgroundColor} 
      ${borderColor}` : "bg-[#0197b2] text-white border-[#0197b2]"} rounded-full ${fullWidth && "w-full"}"}`}>
        {label}
    </button>
  )
}

export default Button