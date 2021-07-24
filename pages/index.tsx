import products from '@data/products.json';

import Header from '@components/Header';
import Description from '@components/Description';
import Layout from '@components/Layout';
import Marquee from '@components/Marquee';
import ProductCard from '@components/Product/Card';

const Index = () => (
  <Layout>
    <div className="container mx-auto">
      <Header />
    </div>
    <Marquee />
    <div className="container mx-auto px-5 lg:px-0">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-6 grid gap-12 mx-auto lg:grid-cols-3 grid-cols-1">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Description />
    </div>
  </Layout>
);

export default Index;
