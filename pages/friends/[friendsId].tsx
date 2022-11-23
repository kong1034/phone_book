import FriendInfo from "../../Layout/FriendInfo";
import FriendProfile from "../../Layout/FriendProfile";
import Header from "../../Layout/Header";
import classes from '../../styles/home.module.scss';


export default function FriendId() {
    return <>
        <section className={classes.container}>
        <Header/>
        <FriendProfile/>
        <FriendInfo/>
        </section>
    </>
}