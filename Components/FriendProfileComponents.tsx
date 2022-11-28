import classes from '../styles/myprofile.module.scss';
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function FriendProfileComponents() {
    const [data, setData] = useState([]);
    const router = useRouter()
    
    const str = router.asPath;
    const str2 = str.substring(str.lastIndexOf("/"));
    const result = str2.substring(1,2);
    
    const url = `http://localhost:3001/friends/${result}`;

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [url])

    console.log(data);
    return <>
         <div className={classes.img_div}>
            {
                <img className={classes.img} src="http://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201106/12/htm_2011061223531330003010-002.JPG" alt="MyImg"/>
            }
        </div>
        <div className={classes.my_name}>
            <h2>Friend</h2>
        </div>
    </>
}