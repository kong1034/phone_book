import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from '../styles/header.module.scss';

export default function Header() {
    let check = false;
    const router = useRouter();

    //뒤로가기 기능
    const goBack = () => {
        router.back();
    }

    //url에 따른 뒤로가기 버튼 조건부 렌더링
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