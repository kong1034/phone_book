import classes from '../../styles/friends.module.scss';
import Search from './Search';

export default function Friends() {
    return <>
        <section className={classes.friends_boder}>
            <Search/>
        </section>
    </>
}