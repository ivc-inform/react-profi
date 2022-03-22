import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventAction, SetGuestAction } from "./types";
import { IEvent } from "../../../models/IEvent";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({ type: EventActionEnum.SET_GUEST, payload }),
    setEvents: (payload: IEvent[]): SetEventAction => ({ type: EventActionEnum.SET_EVENT, payload })
}
