import { FriendProfileComponents } from '../Components/FriendProfileComponents';
import classes from '../styles/myprofile.module.scss';

export default function FriendProfile(info:any) {
    return <>
            <FriendProfileComponents val={info}/>
    </>
}