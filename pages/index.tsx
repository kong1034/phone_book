import classes from '../styles/home.module.scss';
import Header from '../Layout/Header';
import Head from 'next/head';
import axios from 'axios';
import MyProfileComponents from '../Components/MyProfileComponents';
import FriendsComponents from '../Components/FriendsComponents';
import { friends } from '../Interface/friends';
import { myprofile } from '../Interface/myprofile';

export default function Home({infodata}:{infodata:any}) {
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
export const getStaticProps = async () => {
  const friendUrl = 'http://localhost:3000/api/friends';
  let getFriends = await axios.get(friendUrl)
  let friends:friends = getFriends.data

  const myprofileUrl = 'http://localhost:3000/api/myprofile';
  let getMyprofile = await axios.get(myprofileUrl)
  let myprofile:myprofile = getMyprofile.data

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
