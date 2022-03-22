import React, { FC } from "react";
import { Calendar } from "antd";

export interface CalendarProps {
}

export const EventCalendar: FC<CalendarProps> = props => {
    return (
        <Calendar />
    )
};
