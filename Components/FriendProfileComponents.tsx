import classes from '../styles/myprofile.module.scss';

export default function FriendProfileComponents() {
    return <>
         <div className={classes.img_div}>
            <img className={classes.img} src="http://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201106/12/htm_2011061223531330003010-002.JPG" alt="MyImg"/>
        </div>
        <div className={classes.my_name}>
            <h2>Friend</h2>
        </div>
    </>
}