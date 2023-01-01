import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from '../styles/header.module.scss';

export default function Header() {
    let check = false;
    let title = "";
    const router = useRouter();

    //뒤로가기 기능
    const goBack = () => {
        router.back();
    }

    //url에 따른 뒤로가기 버튼 조건부 렌더링
    router.pathname === "/" ? check = true : check = false;
    if (router.pathname === "/friendFnc" && router.query.id === undefined) {
        title = "친구 추가";
    } else if(router.pathname === "/") {
        title = "Phone Book";
    } else if(router.pathname === "/friendFnc" && router.query.id !== null) {
        title = '친구 정보 수정';
    } else {
        title = "친구 정보";
    }
    return <>
        <header className={classes.header}>
            <div>
                <div className={classes.back_btn} onClick={goBack}>
                    {
                        check === true ? "" : "<"
                    }
                </div>
            </div>
            <h1>{title}</h1>
            <div>
                {
                    check === true ?
                    <Link className={classes.link} href='/friendFnc'>+</Link>
                    : ""
                }
            </div>
        </header>
    </>
}