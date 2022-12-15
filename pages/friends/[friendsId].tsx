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
import { PrismaClient } from "@prisma/client";

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
    let client = new PrismaClient();
    let friends = await client.friends.findMany()

    // const url = 'http://localhost:3000/api/friends';
    // let call = await axios.get(url)
    // let arr:friends[] = call.data;
    return {
        fallback: false,
        paths: friends.map(val => ({
            params: {
                friendsId : val.id.toString()
            }
        }))
    } 
}
export const getStaticProps = async (context:any) => {
    //프리즈마 클라이언트 생성
    let client = new PrismaClient();
    const paramId =  Number(context.params.friendsId);
    let friendInfo = await client.friends.findUnique({
        where: {
            id: paramId
        }
    })
    // const url = `http://localhost:3000/api/${context.params.friendsId}`;
    // let call = null;
    // await axios.get(url)
    //     .then(res => {call = res.data;})
    //     .catch(err => console.log(err));
    return {
        props: {
            infodata: friendInfo
        }
    }
}