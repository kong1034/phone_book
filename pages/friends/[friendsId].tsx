import Header from "../../Layout/Header";
import classes from '../../styles/home.module.scss';
import Head from 'next/head';
import { FriendProfileComponents } from "../../Components/FriendProfileComponents";
import FriendInfoComponents from "../../Components/FriendInfoComponents";
import { friends } from "../../Interface/friends";
import { PrismaClient } from "@prisma/client";
import React from "react";

export default function FriendId({ infodata } : { infodata:friends }) {
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

//리렌더링 최적화
//export const renderMemo2 = React.memo(FriendId);
//미리 렌더링 (SEO에 좋음)
export const getServerSideProps = async (context:any) => {
    const paramId =  Number(context.params.friendsId);
    let client = new PrismaClient();
    let friendInfo = await client.friends.findUnique({
        where: {
            id: paramId
        }
    })
    return {
        props: {
            infodata: friendInfo
        }
    }
}