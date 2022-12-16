import { friends } from "./friends";
import { myprofile } from "./myprofile";

export interface infodata {
    "myprofile":myprofile,
    "friends":friends[]
}