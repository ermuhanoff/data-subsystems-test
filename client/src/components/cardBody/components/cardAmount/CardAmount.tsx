import React from 'react';
import { Col, Form, Input } from 'antd';

import { normalizeNumber } from '../../../../utils/utils';
import { constants } from '../../constants';

export const CardAmount = () =>
  (
    <Col span={7}>
      <Form.Item
        label={constants.amount}
        name='amount'
        rules={[{ required: true }]}
        getValueFromEvent={normalizeNumber}
      >
        <Input type='number' />
      </Form.Item>
    </Col>
  );
