import Head from "next/head"
import { useRef, useState } from "react"
import classes from "../../styles/addfriend.module.scss"
import axios from "axios";
import { Event } from "../../Interface/Event";

export default function AddFriend() {
    const imgRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState("");

    const imageUploadBtn = () => {
        imgRef.current?.click();
    }

    const fileChange = async (e: Event<HTMLInputElement>) => {
        const uploaded = await imageUploadFnc(e.target.files?.[0]);
        setImage(uploaded.data.eager[0].url);
    }

    const imageUploadFnc = async (file:any) => {
        console.log(file);
        const cloudName = "dlyhfjp5p";
        const presetName = "friend-img";
        const data = new FormData();
        
        data.append("file", file);
        data.append("upload_preset", presetName);
        data.append("public_id", cloudName);
        data.append('api_key', "813433467112589");

        const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload` ,data)

        return res;
    }
    return <>
    <Head>
        <title>add Friend</title>
        <meta
            name="add Friend"
            content="you can add new friend"
        />
    </Head>
    <section className={classes.container}>
        <header className={classes.header}>
            <h1>친구 추가</h1>
        </header>
        <div className={classes.add_div}>
            <div className={classes.img_div}>
                <input type="file" accept="image/*" ref={imgRef} onChange={fileChange}/>
                <img src={image} className={image ? "uploadedImg" : "noneImg"}></img>
                <button onClick={imageUploadBtn}>이미지 업로드</button>
            </div>
            <div className={classes.info_div}>
                <p>
                <label htmlFor="name">이름</label>
                <input type='text'/>
                </p>
                <p>
                <label htmlFor="name">생년월일</label>
                <input className={classes.birth_input} type='select'/>
                </p>
                <p>
                <label htmlFor="name">번호</label>
                <input type='text'/>
                </p>

                <button>추가하기</button>
            </div>
        </div>
    </section>
    </>
}