import cx from 'clsx';

import Sparkles from '@components/icons/sparkles';

import s from './header.module.css';

const Header = () => (
  <div className="flex flex-col items-center justify-center mt-10">
    <h2 className={s.basement}>basement</h2>
    <div className="flex justify-between items-center">
      <span className={cx(s.button, 'hidden xl:inline')}>
        <span className="font-semibold text-lg">est</span>
      </span>
      <h2 className={s.supply}>supply</h2>
      <span className={s.button}>
        <span className="font-semibold text-lg hidden xl:inline">2k19</span>
        <span className="font-semibold text-lg inline xl:hidden">
          <Sparkles />
        </span>
      </span>
    </div>
  </div>
);

export default Header;
