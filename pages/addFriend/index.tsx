import Head from "next/head"
import { useRef, useState } from "react"
import classes from "../../styles/addfriend.module.scss"
import axios from "axios";
import { Event } from "../../Interface/Event";
import { useRouter } from "next/router";
import Header from "../../Layout/Header";

export default function AddFriend() {
    const router = useRouter();
    const imgRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const birthRef = useRef<HTMLInputElement>(null);
    const numberRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState("");
    const query = useState(router.query.id);
    

    //input 파일버튼 대신 일반버튼 기능
    const imageUploadBtn = () => {
        imgRef.current?.click();
    }

    //업로드 한 이미지 url 가져오기
    const fileChange = async (e: Event<HTMLInputElement>) => {
        const uploaded = await imageUploadFnc(e.target.files?.[0]);
        setImage(uploaded.data.eager[0].url);
    }

    //이미지 서버에 업로드
    const imageUploadFnc = async (file:any) => {
        const cloudName = "dlyhfjp5p";
        const presetName = "friend-img";
        const data = new FormData();
        
        data.append("file", file);
        data.append("upload_preset", presetName);
        data.append("public_id", cloudName);
        data.append('api_key', "813433467112589");

        return await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload` ,data);
    }

    //추가 기능
    const addFriendBtn = async () => {
        let datas:any = {
            img: image,
            username : nameRef.current?.value,
            birth: birthRef.current?.value,
            phone: numberRef.current?.value
        }

        await axios.post('/api/friends', datas)
        .then(res => {
            alert('친구 추가가 완료되었습니다.');
            router.push('/');
        })
    }
    const editFriendBtn = () => {
        console.log('수정하기')
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
            <Header/>
            <div className={classes.add_div}>
                <div className={classes.img_div}>
                    <input type="file" accept="image/*" ref={imgRef} onChange={fileChange}/>
                    <img src={image} className={image ? "uploadedImg" : "noneImg"}></img>
                    <button onClick={imageUploadBtn}>이미지 업로드</button>
                </div>
                <div className={classes.info_div}>
                    <p>
                    <label htmlFor="name">이름</label>
                    <input ref={nameRef} type='text'/>
                    </p>
                    <p>
                    <label htmlFor="name">생년월일</label>
                    <input ref={birthRef} className={classes.birth_input} type='select'/>
                    </p>
                    <p>
                    <label htmlFor="name">번호</label>
                    <input ref={numberRef} type='text'/>
                    </p>
                    {
                        query === null ? 
                        <button onClick={addFriendBtn}>추가하기</button>
                        : <button onClick={editFriendBtn}>수정하기</button>
                    }
                    
                </div>
            </div>
        </section>
    </>
}