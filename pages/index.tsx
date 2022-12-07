import classes from '../styles/home.module.scss';
import Header from '../Layout/Header';
import Head from 'next/head';
import axios from 'axios';
import MyProfileComponents from '../Components/MyProfileComponents';
import FriendsComponents from '../Components/FriendsComponents';
import { friendsProps } from '../Interface/friendsProps';

export default function Home({arr}:{arr:any}) {
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
      <MyProfileComponents/>
      <FriendsComponents vals = {arr}/>
    </section>
  </>
}
//미리 렌더링
export const getStaticProps = async () => {
  const url = 'http://localhost:3000/api/friends';
  let call = await axios.get(url)
  let arr:any = call.data
  return {
      props: {
          arr
      }
  }
}
