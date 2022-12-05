import classes from '../styles/myprofile.module.scss';
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { friends } from '../Interface/friends';


export default function FriendProfileComponents({info} : {info : Number | undefined}) {
    const router = useRouter();

    return <>
         <div className={classes.img_div}>
            {
                <img className={classes.img} alt="MyImg"/>
            }
        </div>
        <div className={classes.my_name}>
            <h2>{}</h2>
        </div>
    </>
}