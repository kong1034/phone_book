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
    return <>
        <header className={classes.header}>
            <div>
                <div onClick={goBack}>
                    {
                        check === true ? "" : "<"
                    }
                </div>
            </div>
            <h1>Phone Book</h1>
            <div>
                <div>+</div>
            </div>
        </header>
    </>
}