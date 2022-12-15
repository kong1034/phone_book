import axios from 'axios';
import { useEffect, useState } from 'react';
import { myprofile } from '../Interface/myprofile';
import { myprofileProps } from '../Interface/myprofileProps';
import classes from '../styles/myprofile.module.scss';

export default function MyProfileComponents(arr:any) {
    const [data,setData] = useState<myprofile>();
    //const url = '/api/myprofile';

    useEffect(() => {
        setData(arr.vals);
        // axios.get(url)
        // .then(res => setData(res.data))
        // .catch(err => console.log(err));
    }, [arr])

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