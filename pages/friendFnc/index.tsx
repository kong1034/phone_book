import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import classes from "../../styles/friendFnc.module.scss"
import axios from "axios";
import { Event } from "../../Interface/Event";
import { useRouter } from "next/router";
import Header from "../../Layout/Header";
import { friends } from "../../Interface/friends";

export default function FriendFnc() {
    const router = useRouter();
    const imgRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const birthRef = useRef<HTMLInputElement>(null);
    const numberRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState("");
    const [friendInfo, setFriendInfo] = useState<friends>();
    
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

    //수정시 친구 정보 가져오기
    useEffect(() => {
        if(router.query.id !== undefined) {
            axios.get(`/api/${router.query.id}`)
            .then(res => setFriendInfo(res.data));
        }
    }, [router.query.id])

    //수정기능
    const editFriendBtn = () => {
        axios.put('/api/friends',{
            id: router.query.id,
            img: image,
            username : nameRef.current?.value,
            birth: birthRef.current?.value,
            phone: numberRef.current?.value
        })
        .then(res => router.push('/'));
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
                    {
                        friendInfo !== undefined ?
                        <img src={friendInfo.img}/>
                        : image !== "" ?
                        <img src={image}/>
                        : ""
                    }
                    <button onClick={imageUploadBtn}>이미지 업로드</button>
                </div>
                <div className={classes.info_div}>
                    <p>
                    <label htmlFor="name">이름</label>
                    <input ref={nameRef} type='text' placeholder={friendInfo ? friendInfo.username : ""}/>
                    </p>
                    <p>
                    <label htmlFor="name">생년월일</label>
                    <input ref={birthRef} className={classes.birth_input} type='select' placeholder={friendInfo ? friendInfo.birth : ""}/>
                    </p>
                    <p>
                    <label htmlFor="name">번호</label>
                    <input ref={numberRef} type='text' placeholder={friendInfo ? friendInfo.phone : ""}/>
                    </p>
                    {
                        router.query.id === undefined ? 
                        <button onClick={addFriendBtn}>추가하기</button>
                        : <button onClick={editFriendBtn}>수정하기</button>
                    }
                    
                </div>
            </div>
        </section>
    </>
}