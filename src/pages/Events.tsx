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
    const { fetchGuests, createEvent } = useActions()
    const { guests, events } = useTypedSelector(state => state.event)

    useEffect(() => {
        fetchGuests()
    }, []);

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <Layout>
            { JSON.stringify(events) }
            <EventCalendar events={ [] } />
            <Row justify={ "center" }>
                <Button onClick={ () => setModalVisible(true) }>Добавить событие</Button>
            </Row>
            <Modal title={ "Новое событие" } visible={ modalVisible } footer={ null } onCancel={ () => setModalVisible(false) }>
                <EventForm guests={ guests } submit={ addNewEvent } />
            </Modal>
        </Layout>
    );
};
