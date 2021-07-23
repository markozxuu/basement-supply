import s from './marquee.module.css';

const Marquee = () => (
  <div className={s.root}>
    <div className="animate-marquee py-3">
      <span className={s.text}>
        {' '}
        A man can’t have enough base­ment swag  —  A man can’t have enough
        base­ment swag
      </span>
      <span className={s.text}>
        {' '}
        A man can’t have enough base­ment swag  —  A man can’t have enough
        base­ment swag
      </span>
      <span className={s.text}>
        {' '}
        A man can’t have enough base­ment swag  —  A man can’t have enough
        base­ment swag
      </span>
      <span className={s.text}>
        {' '}
        A man can’t have enough base­ment swag  —  A man can’t have enough
        base­ment swag
      </span>
    </div>
  </div>
);

export default Marquee;
