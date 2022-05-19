/** @format */

import React, { FC } from "react";
import { Calendar } from "antd";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";

export interface CalendarProps {
    events: IEvent[];
}

export const EventCalendar: FC<CalendarProps> = props => {
    function dateCellRender (value: Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
        return (
            <div>
                { currentDayEvents.map((event, index) => <div key={ index }>{ event.description }</div>) }
            </div>
        );
    }

    return (
        <Calendar
            dateCellRender={ dateCellRender }
        />
    );
};
