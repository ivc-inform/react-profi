/** @format */

import React, { FC, useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import { EventCalendar } from "../components/EventCalendar";

export interface EventsProps {}

export const Events: FC<EventsProps> = props => {
    const [visible, setVisible] = useState(false);
    return (
        <Layout>
            <EventCalendar events={ [] } />
            <Row justify={ "center" }>
                <Button>
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title={ "Новое событие" }
                visible={ visible }
            >

            </Modal>
        </Layout>
    );
};
