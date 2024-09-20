
"use client";
import Product from '@/components/Product';
import langData from '@/data/lang.json';
import productList from '@/data/products.json';
import Langs from '@/interfaces/Langs';
import ArrowUpRightSVG from '@/icons/ArrowUpRightSVG';
import Modal from '@/components/Modal';
import { useState, useEffect } from 'react';

const Products = ({ lang = 'es' }: Langs) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <section id="products">
        <h2 className="lg:text-4xl md:text-3xl text-2xl py-12 text-primary font-bold text-center">
          {langData.products.title[lang]}
        </h2>
        <div className="max-w-screen-xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {productList.map((product, index) => (
            <Product
              key={index}
              name={product.title[lang]}
              description={product.description[lang]}
              image={product.image}
            />
          ))}
        </div>
        <div className="flex justify-center my-10 px-3">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary md:w-auto p-4 font-bold self-center animate-bounce flex flex-row gap-2"
          >
            {langData.products.catalog.title[lang]}
            <ArrowUpRightSVG className="w-6" />
          </button>
        </div>
      </section>
      {isOpen && <Modal setIsOpen={setIsOpen} pdfUrl={langData.products.catalog.link[lang]} />}
    </>
  );
};

export default Products;
