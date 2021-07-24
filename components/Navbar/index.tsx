import { useState } from 'react';
import Link from 'next/link';

import ProductCart from '../Product/Cart';

// Icons
import Icon4K from '@components/icons/4k';
import BMW from '@components/icons/bmw';
import Circle from '@components/icons/circle';
import HD from '@components/icons/hd';
import Warning from '@components/icons/warning';

import s from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="body-font">
      <div className={s.root}>
        <Link href="/">
          <a className="flex title-font font-medium justify-center items-center">
            <span className="hidden xl:inline text-2xl font-basement font-bold">
              basement.
            </span>
            <span className="inline xl:hidden text-5xl font-basement font-bold">
              b.
            </span>
          </a>
        </Link>
        <nav className={s.containerIcons}>
          <BMW />
          <HD />
          <span className="px-3">
            <Circle />
          </span>
          <Icon4K />
          <span className="pl-3">
            <Warning />
          </span>
        </nav>
        <button
          title="View of cart"
          aria-label="View of cart"
          className={s.buttonCart}
          onClick={() => setOpen(!isOpen)}
        >
          cart (1)
        </button>
        <ProductCart open={isOpen} onClose={() => setOpen(!setOpen)} />
      </div>
    </header>
  );
};

export default Navbar;
