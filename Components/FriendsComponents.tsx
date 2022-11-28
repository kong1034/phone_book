import classes from '../styles/friends.module.scss';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { friends } from '../Interface/friends';


export default function FriendsComponents() {
    const [list, setList] = useState<friends[]>([]);
    const url = '/api/hello';
    
    useEffect(() => {
        axios.get(url)
        .then(res => setList(res.data))
        .catch(err => console.log(err));
    }, [url])

    return <>
    <ul>
        {
            list?.map(item => (
                <li key={item.id}><Link href={{pathname:"/friends",query:{query:item.id}}}><img src={item.img}/><h3>{item.username}</h3></Link></li>
            ))
        }
    </ul>
    </>
}