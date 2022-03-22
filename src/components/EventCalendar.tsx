/** @format */

import React, { FC } from "react";
import { Calendar } from "antd";
import { IEvent } from "../models/IEvent";

export interface CalendarProps {
    events: IEvent[];
}

export const EventCalendar: FC<CalendarProps> = props => {
    return <Calendar />;
};
