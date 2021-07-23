import Image from 'next/image';

import s from './card.module.css';

type ImageProduct = {
  url: string;
  alt: string;
};

interface CardProps {
  title: string;
  price: string;
  image: ImageProduct;
}

const Card = ({ title, price, image: { url, alt } }: CardProps) => (
  <div>
    <div className={s.root}>
      <Image
        src={url}
        alt={alt}
        width={800}
        height={1000}
        objectFit="contain"
        objectPosition="center"
      />
    </div>
    <div className="mt-4 flex justify-between items-center">
      <h3 className={s.title}>{title}</h3>
      <h3 className={s.title}>$ {price}</h3>
    </div>
  </div>
);

export default Card;
