import classes from '../styles/friends.module.scss';
import FriendsComponents from '../Components/FriendsComponents';

export default function Friends() {
    return <>
        <section className={classes.friends_boder}>
            <FriendsComponents/>
        </section>
    </>
}