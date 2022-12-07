import Header from "../../Layout/Header";
import classes from '../../styles/home.module.scss';
import Head from 'next/head';
import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../../Reducer/reducer";
import { FriendProfileComponents } from "../../Components/FriendProfileComponents";
import FriendInfoComponents from "../../Components/FriendInfoComponents";
import { friends } from "../../Interface/friends";


export default function FriendId({ infodata } : { infodata:friends }) {
    //const router = useRouter();
    //const [infoData, dispatch] = useReducer(reducer, undefined);
    // useEffect(() => {
    // }, [url])
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
        <FriendProfileComponents info={infodata}/>
        <FriendInfoComponents info={infodata}/>
        </section>
    </>
}

//미리 렌더링 (SEO에 좋음)
export const getStaticPaths = async () => {
    let arr = null;
    const url = 'http://localhost:3000/api/friends';
    await axios.get(url)
        .then(res => arr = res.data)
        .catch(err => console.log(err));
    return {
        fallback: true,
        paths: [
            {params: {friendsId: "1"}},
            {params: {friendsId: "2"}}
        ]
    }
}
export const getStaticProps = async (context:any) => {

    const url = `http://localhost:3000/api/${context.params.friendsId}`;
    let call = null;
    await axios.get(url)
        .then(res => {call = res.data; console.log(res.data)})
        .catch(err => console.log(err));
    return {
        props: {
            infodata: call
        }
    }
}