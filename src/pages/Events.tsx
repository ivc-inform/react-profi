/** @format */

import React, { FC, useEffect, useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import { EventCalendar } from "../components/EventCalendar";
import { EventForm } from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

export interface EventsProps {}

export const Events: FC<EventsProps> = props => {
    const [modalVisible, setModalVisible] = useState(false);
    const { fetchGuests, createEvent, fetchEvents } = useActions()
    const { guests, events } = useTypedSelector(state => state.event)
    const { username } = useTypedSelector(state => state.auth.user)

    useEffect(() => {
        fetchGuests()
        fetchEvents(username)
    }, []);

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <Layout>
            <EventCalendar events={ events } />
            <Row justify={ "center" }>
                <Button onClick={ () => setModalVisible(true) }>Добавить событие</Button>
            </Row>
            <Modal title={ "Новое событие" } visible={ modalVisible } footer={ null } onCancel={ () => setModalVisible(false) }>
                <EventForm guests={ guests } submit={ addNewEvent } />
            </Modal>
        </Layout>
    );
};
