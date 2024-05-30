import { products } from '../constants/index';
import PopularProductsCard from '../Components/PopularProductCard';

const Products = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-4xl font-palanquin font-bold'>Pitch-Perfect <span className='text-[rgb(1,151,178)]'>Snefers Shoes</span></h2>
          <p className='lg:max-w-xl mt-2 font-oswald text-slate-grey info-text'>Elevate your lifestyle with our high-quality, stylish selections. Explore the perfect blend of comfort, design, and affordability</p>
      </div>
      <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product)=>(
            <PopularProductsCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default Products