import cx from 'clsx';

import s from './description.module.css';

import { Spring, SrpingMobile } from '@components/icons/spring';

const Description = () => (
  <div className="mt-20">
    <div className="flex justify-end items-center mb-5 lg:mb-10">
      <span className="mr-10 hidden xl:inline">
        <Spring />
      </span>
      <span className="mr-5 inline xl:hidden">
        <SrpingMobile />
      </span>
      <h2 className={cx(s.wear)}>wear</h2>
    </div>
    <div className="flex items-center">
      <h2 className={s.everyday}>everyday</h2>
    </div>
  </div>
);

export default Description;
