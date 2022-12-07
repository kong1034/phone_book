export const reducer = (friendInfo:any, action:any) => {
    switch(action.type) {
        case "info" :
            return action.data;
    }
}