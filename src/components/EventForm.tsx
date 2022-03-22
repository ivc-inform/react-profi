/** @format */

import React, { FC, useState } from "react";
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";
import { useTypedSelector } from "../hooks/useTypedSelector";

export interface EventFormProps {
    guests: IUser[]
    submit (event: IEvent): void
}

export const EventForm: FC<EventFormProps> = props => {
    const [event, setEvent] = useState<IEvent>({ author: "", date: "", description: "", guest: "" } as IEvent);
    const { username } = useTypedSelector(state => state.auth.user)
    const selectDate = (date: Moment | null) => {
        setEvent({ ...event, date: formatDate(date?.toDate()) })
    }

    const submitForm = () => {
        props.submit({ ...event, author: username })
    }

    return (
        <Form onFinish={ submitForm }>
            <Form.Item label="Описание события" name="description" rules={ [rules.required()] }>
                <Input value={ event.description } onChange={ e => setEvent({ ...event, description: e.target.value }) } />
            </Form.Item>
            <Form.Item label="Дата события" name="date" rules={ [rules.required()] }>
                <DatePicker onChange={ date => selectDate(date) } />
            </Form.Item>
            <Form.Item label="Выберите гостя" name="quest" rules={ [rules.required()] }>
                <Select onChange={ (guest: string) => setEvent({ ...event, guest }) }>
                    { props.guests.map(guest => <Select.Option key={ guest.username } value={ guest.username }>{ guest.username }</Select.Option>) }
                </Select>
            </Form.Item>
            <Row justify={ "end" }>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
