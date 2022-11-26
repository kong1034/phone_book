import classes from '../styles/home.module.scss';
import Friends from '../Layout/Friends';
import Header from '../Layout/Header';
import MyProfile from '../Layout/MyProfile';
import Head from 'next/head';

export default function Home() {
  return <>
  <Head>
    <title>PhoneBook</title>
    <meta 
      name="description"
      content="add, delete, update your friends in the PhoneBook"
    />
  </Head>
    <section className={classes.container}>
      <Header/>
      <MyProfile/>
      <Friends/>
    </section>
  </>
}
