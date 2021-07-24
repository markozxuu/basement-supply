import { useState } from 'react';
import Image from 'next/image';

import shirt from '@public/static/remera.png';

import s from './fake.module.css';

const FakeProduct = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    if (counter > 0) {
      return setCounter(counter - 1);
    }
  };
  return (
    <section className="mt-5">
      <div>
        <div className="w-full flex flex-row border border-white">
          <Image
            alt="Photo a nice shirt"
            className={s.img}
            objectFit="contain"
            objectPosition="center"
            src={shirt}
            width={200}
            height={200}
            placeholder="blur"
          />
          <div className="w-1/2 px-2">
            <div className="flex flex-col">
              <h2 className="text-2xl font-basement font-bold uppercase">
                Black t-shirt
              </h2>
              <p className="capitalize text-[#999999] text-lg font-bold font-basement">
                Unisex Basic Softstyle T-Shirt
              </p>
            </div>
            <div className="flex lg:mt-10 mt-0">
              <h2 className="text-xl font-basement font-bold uppercase">
                Quantity:
              </h2>
              <div className={s.quantity}>
                <button
                  aria-label="Decrease count"
                  title="Decrease count"
                  className="font-bold mr-4 text-xl"
                  onClick={handleDecrease}
                >
                  {' '}
                  -{' '}
                </button>
                <span className="font-bold text-xl">{counter}</span>
                <button
                  aria-label="Increase count"
                  title="Increase count"
                  className="font-bold text-xl ml-4"
                  onClick={handleIncrease}
                >
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-basement font-bold uppercase">
                size:
              </h2>
              <div className="space-x-3">
                <button className={s.btSize}>s</button>
                <button className="text-xl font-basement font-bold rounded uppercase">
                  m
                </button>
                <button className="text-xl font-basement font-bold rounded uppercase">
                  l
                </button>
                <button className="text-xl font-basement font-bold rounded uppercase">
                  xl
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-base lg:text-3xl font-basement font-bold uppercase">
                $12,50
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FakeProduct;
