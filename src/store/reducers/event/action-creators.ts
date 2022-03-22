import { IUser } from "../../../models/IUser";
import { SetEventAction, SetGuestAction } from "./types";
import { IEvent } from "../../../models/IEvent";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({}),
    setEvents: (payload: IEvent[]): SetEventAction => ({})
}
