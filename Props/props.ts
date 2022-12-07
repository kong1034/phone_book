import { friends } from "../Interface/friends";

export async function getStaticProps(friendInfo:friends) {
    return {
        props: {
            info: friendInfo
        },
        revalidate:1
    }
}