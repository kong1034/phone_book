import classes from '../styles/home.module.scss';
import Header from '../Layout/Header';
import Head from 'next/head';
import MyProfileComponents from '../Components/MyProfileComponents';
import FriendsComponents from '../Components/FriendsComponents';
import { infodata } from '../Interface/infodata';
import { PrismaClient } from '@prisma/client';
import React, { useEffect } from 'react';

export default function Home({infodata}:{infodata:infodata}) {
  useEffect(() => {
    window.addEventListener('resize', () => {
      screen.orientation.lock('portrait')
      .then(res => console.log('가로모드 금지'));
    })
  }, [])
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
//파라미터 메모이징 => 리렌더링 최적화
export const renderMemo = React.memo(Home); 
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
