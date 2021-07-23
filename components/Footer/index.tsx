import Link from 'next/link';

import Basement3d from '@components/icons/basement3d';
import World from '@components/icons/world';

import s from './footer.module.css';

const Footer = () => (
  <footer className={s.root}>
    <hr className={s.divider} />
    <div className={s.container}>
      <div className="flex flex-col space-y-4 lg:space-y-8">
        <Link href="/">
          <a>
            <Basement3d />
          </a>
        </Link>
        <span className="text-sm">
          © basement.studio LLC 2021 all rights reserved.
        </span>
      </div>
      <div className="flex lg:flex-row flex-col">
        <span className="lg:mr-5 mr-0">
          <World />
        </span>
        <p className="w-[59%]">
          Enough about us, tell us about you. We are at the basement.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col">
        <p className="text-sm font-normal">sayhi@basement.studio</p>
      </div>
      <div className="flex flex-col space-y-4 uppercase font-bold font-basement">
        <a
          href="https://www.instagram.com/basementdotstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
        <a
          href="https://twitter.com/basementstudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <a>facebook</a>
        <a
          href="https://www.linkedin.com/company/basementstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
