import classes from '../styles/home.module.scss';
import Header from '../Layout/Header';
import Head from 'next/head';
import axios from 'axios';
import MyProfileComponents from '../Components/MyProfileComponents';
import FriendsComponents from '../Components/FriendsComponents';
import { friends } from '../Interface/friends';
import { myprofile } from '../Interface/myprofile';
import { infodata } from '../Interface/infodata';
import { PrismaClient } from '@prisma/client';

export default function Home({infodata}:{infodata:infodata}) {
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
      <MyProfileComponents vals = {infodata.myprofile}/>
      <FriendsComponents vals = {infodata.friends}/>
    </section>
  </>
}
//미리 렌더링
export const getServerSideProps = async () => {
  let client = new PrismaClient();
  let friends = await client.friends.findMany();
  let myprofile = await client.myprofile.findUnique( {
    where : {
      id : 1
    }
  });

  let jsonData = {
    friends,
    myprofile
  };
  return {
      props: {
        infodata: jsonData
      }
  }
}
