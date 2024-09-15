import Product from '@/components/Product';
import langData from '@/data/lang.json';
import productList from '@/data/products.json';
import Langs from '@/interfaces/Langs';

const Products = ({ lang = 'es' }: Langs) => {
  return (
    <section id='products'>
      <h2 className='lg:text-4xl md:text-3xl text-2xl py-12 text-primary font-bold text-center'>
        {langData.products.title[lang]}
      </h2>
      <div className='max-w-screen-xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {productList.map((product, index) => (
          <Product
            key={index}
            name={product.title[lang]}
            description={product.description[lang]}
            image={product.image}
          />
        ))}
      </div>
      <h3 className='lg:text-2xl md:text-1xl text-1xl py-12 text-primary font-bold text-center'>
        <a href={langData.products.catalog.link[lang]} type='download'>{langData.products.catalog.title[lang]}</a>
      </h3>
    </section>
  );
};
export default Products;
