import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from '../styles/header.module.scss';
import { useState } from 'react';

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
    if (router.pathname === "/addFriend") {
        title = "친구 추가";
    } else if(router.pathname === "/") {
        title = "Phone Book";
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
                    <Link className={classes.link} href='/addFriend'>+</Link>
                    : ""
                }
            </div>
        </header>
    </>
}