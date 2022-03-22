import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventAction, SetGuestAction } from "./types";
import { IEvent } from "../../../models/IEvent";
import { AppDispatch } from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestAction => ({ type: EventActionEnum.SET_GUEST, payload }),
    setEvents: (payload: IEvent[]): SetEventAction => ({ type: EventActionEnum.SET_EVENT, payload }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const quests = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(quests.data))
        } catch ( e ) {
            console.log(e)
        }
    }
}
