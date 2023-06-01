import { Link } from 'react-router-dom';
import s from './Home.module.css';

export default function Home() {
  return (
    <div className={s.home}>
      <h1 className={s.home__title}>Welcome to tweets!</h1>
      <Link to="/tweets" className={s.home__btn}>
        Go to tweets
      </Link>
    </div>
  );
}
