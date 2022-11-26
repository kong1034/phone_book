import FriendInfo from "../../Layout/FriendInfo";
import FriendProfile from "../../Layout/FriendProfile";
import Header from "../../Layout/Header";
import classes from '../../styles/home.module.scss';
import Head from 'next/head';


export default function FriendId() {
    return <>
    <Head>
        <title>Friends List</title>
        <meta
            name="Friends List"
            content="Get Your friends list"
        />
    </Head>
        <section className={classes.container}>
        <Header/>
        <FriendProfile/>
        <FriendInfo/>
        </section>
    </>
}