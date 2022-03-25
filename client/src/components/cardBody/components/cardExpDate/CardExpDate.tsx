import React from 'react';
import { Col, DatePicker, Form } from 'antd';

import { constants } from '../../constants';

export const CardExpDate = () => {
  const customFormat = (value: any) => `${value.format('MM/YYYY')}`;

  return (
    <Col span={8}>
      <Form.Item
        label={constants.cardExpirationDate}
        name='expDate'
        rules={[{ required: true }]}
      >
        <DatePicker picker='month' format={customFormat} />
      </Form.Item>
    </Col>
  );
};
