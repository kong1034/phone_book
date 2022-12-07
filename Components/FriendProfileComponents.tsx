import classes from '../styles/myprofile.module.scss';
import { friends } from '../Interface/friends';
import { NextPage } from 'next';


export const FriendProfileComponents = (infodata:any) => {
    return <>
        <section className={classes.profile}>
            <div className={classes.img_div}>
                {
                    <img className={classes.img} src={infodata.info.img} alt="MyImg"/>
                }
            </div>
            <div className={classes.my_name}>
                <h2>{infodata.info.username}</h2>
            </div>
        </section>
    </>
}