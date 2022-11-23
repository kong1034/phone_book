import classes from '../styles/home.module.scss';
import Friends from '../Layout/Friends';
import Header from '../Layout/Header';
import MyProfile from '../Layout/MyProfile';

export default function Home() {
  return <>
    <section className={classes.container}>
      <Header/>
      <MyProfile/>
      <Friends/>
    </section>
  </>
}
