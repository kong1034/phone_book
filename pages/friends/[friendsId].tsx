import FriendInfo from "../../Layout/FriendInfo";
import FriendProfile from "../../Layout/FriendProfile";
import Header from "../../Layout/Header";
import classes from '../../styles/home.module.scss';
import Head from 'next/head';
import { useRouter } from "next/router";
import { friends } from "../../Interface/friends";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer } from "../../Context/reducer";


export default function FriendId({info,}:{info:any}) {
    const router = useRouter();
    //const [data, setData] = useState<friends>();
    const initial:friends = info;
    const [friendInfo, dispatch] = useReducer(reducer, initial);
    const url = `/api/${router.query.friendsId}`;
    
    useEffect(() => {
        dispatch({type: 'info', id: router.query.friendsId});

        // axios.get(url)
        // .then(res => setData(res.data))
        // .catch(err => console.log(err));
    }, [url])

    //reducer
    

    //dispatch
    console.log(friendInfo);
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