import classes from '../styles/friends.module.scss';
import Link from 'next/link';
import {  useRef } from 'react';
import { friendsProps } from '../Interface/friendsProps';


export default function FriendsComponents(arr:friendsProps) {
    const serachValue = useRef<HTMLInputElement>(null);
    //const [list, setList] = useState<friends[]>([]);
    // const [search, setSearch] = useState<String>("");
    // const [check, setCheck] = useState<Boolean>(false);
    //const url = '/api/friends';
    
    //친구 리스트 불러오기
    // useEffect(() => {
    //     axios.get(url)
    //     .then(res => setList(res.data))
    //     .catch(err => console.log(err));
    // }, [url])

    //함수 정의
    // const searchFnc = (e:React.KeyboardEvent<HTMLInputElement>) => {
    //     if(e.key == 'Enter') {
    //         serachValue.current!.value !== "" ?
    //         arr.vals.map(item => {
    //             if(item.username == serachValue.current!.value) {
    //                 setSearch(serachValue.current!.value);
    //                 setCheck(!check);
    //             }
    //         })
    //         : setSearch("");
    //     }
    // }
    // const searchClick = () => {
    //     serachValue.current!.value !== "" ?
    //     arr.vals.map(item => {
    //         if(item.username == serachValue.current!.value) {
    //             setSearch(serachValue.current!.value);
    //             setCheck(!check);
    //         }
    //     })
    //     : setSearch("");
    // }
    
    // if(serachValue.current?.value !== "") {
    //     return <>
    //     <section className={classes.friends_boder}>
    //         <section className={classes.search_border}>
    //             <input className={classes.input} onKeyUp={searchFnc} ref={serachValue} type="text"/>
    //             <img className={classes.img} onClick={searchClick} src="data:image/png;base64,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" alt="search icon"></img>
    //         </section>
    //         <ul>
    //             {
    //                 arr.vals.map(item => (
    //                     item.username == search ?
    //                     <li key={item.id}><Link href={`/friends/${item.id}`}><img src={item.img}/><h3>{item.username}</h3></Link></li>
    //                     : ""
    //                 ))
    //             }
    //         </ul>
    //     </section>
    //     </>
    // } else if(serachValue.current?.value === ""){
    //     return <>
    //     <section className={classes.friends_boder}>
    //         <section className={classes.search_border}>
    //             <input className={classes.input} onKeyUp={searchFnc} ref={serachValue} type="text"/>
    //             <img className={classes.img} onClick={searchClick} src="data:image/png;base64,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" alt="search icon"></img>
    //         </section>
    //         <ul>
    //             {
    //                 arr.vals.map(item => (
    //                     <li key={item.id}><Link href={`/friends/${item.id}`}><img src={item.img}/><h3>{item.username}</h3></Link></li>
    //                 ))
    //             }
    //         </ul>
    //     </section>
    //     </>
    // }
    return <>
        <section className={classes.friends_boder}>
            <section className={classes.search_border}>
                <input className={classes.input} ref={serachValue} type="text"/>
                <img className={classes.img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8AAADKysrHx8fNzc2IiIj4+Pjq6ur7+/vt7e3X19eAgIDn5+fc3NzExMTj4+MbGxuoqKh4eHiRkZFKSkpZWVm1tbUrKysiIiLz8/NwcHBeXl6cnJyurq48PDwMDAxLS0soKCh8fHygoKC7u7s4ODhlZWUeHh4xMTE6OjoLCwsVFRVTU1NCQkKVlZV44B4NAAAH3ElEQVR4nO2dbXvqLAyAfWt1depcfa0653TTzen//3nP9jghlba2mgQO5f54rjNCJIUEAqlUHA6Hw+FwOBwOxz9LM2h0N4v+er7uLzbdRtDU3SFEOqNwuKqqrIbhKNDduXtpbryXBN0gL97oXx1Ov+Edrmh35tBu+Lq7W5hu9JRTvRNPUVd3l4vQaRfS7ky7o7vj+WiNXm/S75fByHxrnc7HN+v3y+Q41a1CJn54l3onPHPH0T9m9Pvp/TCM2l44D712NDy8Z01ER0N1HKV0ejt7WwS9S+Ob9oJRe5b2JwstGmQTJC9+UV/RDTLt9Z8T/+5gmrfT8hJ6OT42cv1xcEyandot4j4Xoj5ROrgLi4xCEO6UFp7qZP0tjDqAH/WiI9CqfSiteCS9LU5Pca7bvZsaelR+qZfbGkJmo/zyt39ALWU93SD29EYu++Q93NXc9HIcdVtqaxbvz+x+s+pdfI8zrXPq9D3Wmad8q8M1GttYq+8aPdUelUHFTfVL23wTfMF+7HAG8K/p2PL4pcnBCWI/dIT7ubSiWOtaVOzEuoDvKo9i7WsI/2MKrih+485Kq4q9PZD+QjPbTaGztH8kkZGKD6OBIZkYuDROeMNiGAy2CeXATbsDoRwFONHRulVwZYxIJcXosykYV7FPLEvQYDLRE1BFTKcigykQ+cwgD27k8Mw2IJz4ZhEI9tBnHPLARzjmCWx84KQyfIognvjiOvhrAhefPs74lsL4zsO6jB/GQso6UssCgPOCEa0kX0pidTGgE0U7n4KZ+74dp6I0peA3SjkgZCI2FgUQLlIGUnIpZFmYYgw5ZAN3jT9DBNgpnfM2EDLmZDLSmQvpAyoRNSFiSyUikwn5IMoh1JP7Ik9IXmkEyN1DHodbRbrgNLuLMrDXdXRZFz0gCfcfqW0kB/I7oZjLpWuoLwNNeuAEk3lLBGkr/MZzI06ldvhty6VCZ66LDG3wFwzpc+s8sZSxDf4OkWiafnctC7lFjN2y/Mb1JivJRRl7vhOLIW/gqyJOa7CXRJFiFyI3XBSR+4E8pUvj0J2pLINw3M9FRC5j1GZvQUQYuIu+CLD1zqS/iNkUNdSfih9O/50BMatPME+epfEjNnorJFOCOKsgcAcL83nuDOYZhrB93Xl0v3gUnRHBNfcuaRJi5xRxQ6olTJ855SMRGYrjtfkg2jThIoQ8g8Y7WBCxIdlGZSHEN1NDa1LEnRzH9tcRUQBeLC58NhOmUjCZ4vltIr5nS2jJpI9vUsIrNeOOh5gW8BLqRDa37tDphAjlPtGaXJ6bNOKCh/SSn9CaNGrBhwkvaE0apiGBU3NukC1FKJvmkkzDPW/+RRoPe6dhYcpjpfbPNIZoSLBa2L/im+q1vaA1ab/nbX/0ZGoEvEZrUuxiMN5ayYBgF8P+nSj7dxPt3xGWVxCM2tV/RWzUzJMZzNNasQLpP+QGHhbm6mzSCamcFDC9ZHnKrd9voznltj9TwaRsE5GAiZttYk7GkOwJcoKd2PzhvLGWBFXWVwky9+pUxlEQaaTos7po2dYMWkOyoOVyj3/gLu+t2ZrJXhG3ESb4bedGJPJSpJ/Jy3GW3igx7FYQSSgeaR9EOYQ0W2KB9kGUQ0i0KJtzw5Jqz09efdoTSchGPjpMdtVZ3uHUcdP5SD6Esdvq/NuKLLfVwcMmOl8coHs9TeurEeBRFdIg/E3K4c1akP4GcXADXm/hPaWRK1WV+MFWTS/wgNeKyT8P+cHreUWJcpo5AV/W5VoyoEyGdBDwmtmOJ9xvgfeYWTIJwIt0rxzy4CzDswyD+ZTlYB8+tMl0Bg1fhiR9lup/4BOmTC9DViprIJTzdU+87JKrwOcoaV0MOIKsN3YGTIKBl4h49yAP/gqI/iATEysisMRLn8nDI8Nr1/5nNQ7vAXQHPqq/p9gZCvbVS5hVjMnG9zUWin5VzDyvPFxUDkBuPUpSkFvFzhLKRrXUILVoGa+h9uLFRO4ooRMnsT6WHhUvqrDscKTX1epW+gz1spLO8P6QsTlLVkyXiuTVkPQbakJFq9t1fMhZIZJ5FJWqZF+3ViXLX6CVWcWEynLD4oZUGyqthDXln85wZxDW1AKGy7DI1nQnVOsLrurxYFuvin7SBHEIG7lWyCBMqn95KriaPorchloJEgtwbz8W2a5OZ/Ghjt4Pu/OfGaRiaqXV6sFbBNPLPSR/GixSC3dvwca2OYb6Wy1XjXck79/RW9sLj6HXfou+3zP+5zJeLdckFSvTrIrAeQkv42mTDPVnHOfL1P7kIqnasVkq/nyPg9QOXWOQcrBklKH+0vGyalKnsW2nT7vpKuoZxR9jrSWXak7nuZu5Y2+aoZ46lVDFOJmVd3273jhDPdHreq9ZK0i1uh88b/L56Yaq+MNDZ+RFgwQ9D5E36hSItIw0VEnLf2xsFv31er5e9xebxqNf/KDMcBUxMNdQ0SiBiiUw1BKoWAJDNc+BQ8cZqg2UQMUSGGoJVCyBobpFwwbMObYhowTfYqkN1RoVS2CoJVCxBIZaAhVLYKjOgbOBUhuqNSqWwFBLoGIJDLUEKqYaqp5S8BSkqGhIwQMUEg11bEa9AyQSVFyZ8DIwIoqhLi0y0RMXozixTsELFceWmegJYKgTKxUEKtr3DZ75M9SVtQr+qWjnN3jmx1D3Vi30KjUblwmHw+FwOBwOh8NhFP8BxfhYVXrDP/oAAAAASUVORK5CYII=" alt="search icon"></img>
            </section>
            <ul>
                {
                    arr.vals.map(item => (
                        <li key={item.id}><Link href={`/friends/${item.id}`}><img src={item.img}/><h3>{item.username}</h3></Link></li>
                    ))
                }
            </ul>
        </section>
    </>
}