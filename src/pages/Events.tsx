/** @format */

import React, { FC, useEffect, useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import { EventCalendar } from "../components/EventCalendar";
import { EventForm } from "../components/EventForm";
import { useActions } from "../hooks/useActions";

export interface EventsProps {}

export const Events: FC<EventsProps> = props => {
    const [visible, setVisible] = useState(false);
    const { setGuests } = useActions()

    useEffect(() => {

    }, []);

    return (
        <Layout>
            <EventCalendar events={ [] } />
            <Row justify={ "center" }>
                <Button onClick={ () => setVisible(true) }>Добавить событие</Button>
            </Row>
            <Modal title={ "Новое событие" } visible={ visible } footer={ null } onCancel={ () => setVisible(false) }>
                <EventForm />
            </Modal>
        </Layout>
    );
};
