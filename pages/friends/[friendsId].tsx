import Header from "../../Layout/Header";
import classes from '../../styles/home.module.scss';
import Head from 'next/head';
import axios from "axios";
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
// export const getStaticPaths = async () => {
//     let client = new PrismaClient();
//     let friends = await client.friends.findMany();
//     return {
//         fallback: false,
//         paths: friends.map((val:friends) => ({
//             params: {
//                 friendsId : val.id.toString()
//             }
//         }))
//     } 
// }
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