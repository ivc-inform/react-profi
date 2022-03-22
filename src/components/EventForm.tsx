/** @format */

import React, { FC } from "react";
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";

export interface EventFormProps {}

export const EventForm: FC<EventFormProps> = props => {
    return (
        <Form>
            <Form.Item label="Описание события" name="description" rules={[rules.required()]}>
                <Input />
            </Form.Item>
            <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Select>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled" disabled>
                        Disabled
                    </Select.Option>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select>
            </Form.Item>
            <Row justify={"end"}>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
