import classes from '../styles/friends.module.scss';
import FriendsComponents from '../Components/FriendsComponents';
import SearchComponents from '../Components/SearchComponents';

export default function Friends() {
    return <>
        <section className={classes.friends_boder}>
            <SearchComponents/>
            <FriendsComponents/>
        </section>
    </>
}