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
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events_str = localStorage.getItem("events") || "[]"
            const events = JSON.parse(events_str) as IEvent[]
            events.push(event)
            dispatch(EventActionCreators.setEvents(events))
            localStorage.setItem("events", JSON.stringify(events))
        } catch ( e ) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events_str = localStorage.getItem("events") || "[]"
            const events = JSON.parse(events_str) as IEvent[]
            const currentUserEvents = events.filter(event => event.author === username || event.guest === username)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch ( e ) {
            console.log(e)
        }
    }
}
