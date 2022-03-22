import { EventAction, EventState } from "./types";

/** @format */

const initialState: EventState = {
    events: [],
    guests: []
};

export default function EventReducer (state = initialState, action: EventAction): EventState {
    switch ( action.type ) {
        default:
            return state;
    }
}
