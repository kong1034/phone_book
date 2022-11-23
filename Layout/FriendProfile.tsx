import FriendProfileComponents from "../Components/FriendProfileComponents";
import classes from '../styles/myprofile.module.scss';

export default function FriendProfile() {
    return <>
        <section className={classes.profile}>
            <FriendProfileComponents/>
        </section>
    </>
}