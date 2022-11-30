import classes from '../styles/myprofile.module.scss';
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { friends } from '../Interface/friends';


export default function FriendProfileComponents() {
    const router = useRouter();
    const [data, setData] = useState<friends>();
    const url = `/api/${router.query.friendsId}`;
    
    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [url])

    return <>
         <div className={classes.img_div}>
            {
                <img className={classes.img} src={data?.img} alt="MyImg"/>
            }
        </div>
        <div className={classes.my_name}>
            <h2>{data?.username}</h2>
        </div>
    </>
}