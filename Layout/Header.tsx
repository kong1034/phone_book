import { useRouter } from 'next/router';
import { useState } from 'react';
import classes from '../styles/header.module.scss';

export default function Header() {
    let check = false;
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    router.pathname === "/" ? check = true : check = false;
    console.log(check);
    return <>
        <header className={classes.header}>
            <div>
                <div onClick={goBack}>
                    {
                        check === true ? "" : "<"
                    }
                </div>
                {/* <img onClick={goBack} src="https://w7.pngwing.com/pngs/50/539/png-transparent-arrow-computer-icons-white-angle-white-text-thumbnail.png" alt="뒤로가기"/> */}
            </div>
            <h1>Phone Book</h1>
            <div>
                <div>+</div>
            </div>
        </header>
    </>
}