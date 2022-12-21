import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from '../styles/header.module.scss';

export default function Header() {
    let check = false;
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    router.pathname === "/" ? check = true : check = false;
    return <>
        <header className={classes.header}>
            <div>
                <div className={classes.back_btn} onClick={goBack}>
                    {
                        check === true ? "" : "<"
                    }
                </div>
            </div>
            <h1>Phone Book</h1>
            <div>
                <Link className={classes.link} href='/addFriend'>+</Link>
            </div>
        </header>
    </>
}