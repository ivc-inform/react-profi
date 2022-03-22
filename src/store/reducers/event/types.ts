/** @format */

import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

interface EventState {
    guests: IUser[];
    events: IEvent[];
}
