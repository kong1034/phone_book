import { Action } from "@remix-run/router";
import { friends } from "../Interface/friends";
import db from '../DB/db.json';

export const reducer = (friendInfo:any, action:any) => {
    switch(action.type) {
        case "info" :
            return db.friends[action.id];
    }
}