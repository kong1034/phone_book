import { friendIdProps } from '../Interface/friendIdProps';
import classes from '../styles/myprofile.module.scss';


export const FriendProfileComponents = (infodata:friendIdProps) => {
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