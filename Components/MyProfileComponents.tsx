import axios from 'axios';
import { useEffect, useState } from 'react';
import { myprofile } from '../Interface/myprofile';
import classes from '../styles/myprofile.module.scss';

export default function MyProfileComponents() {
    const [data,setData] = useState<myprofile>();
    const url = '/api/myprofile';

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [url])

    return <>
        <section className={classes.profile}>
            <div className={classes.img_div}>
                {
                    <img className={classes.img} src={data?.img} alt="MyImg"/>
                }
            </div>
            <div className={classes.my_name}>
                {
                    <h2>{data?.username}</h2>
                }
            </div>
        </section>
    </>
}