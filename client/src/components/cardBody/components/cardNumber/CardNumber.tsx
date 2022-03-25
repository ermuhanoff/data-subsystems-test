import React from 'react';
import { Col, Form, Input } from 'antd';

import { normalizeNumber } from '../../../../utils/utils';
import { constants } from '../../constants';

export const CardNumber = () =>
  (
    <Col span={16}>
      <Form.Item
        label={constants.cardNumber}
        name='cardNumber'
        rules={[
          {
            required: true,
            len: 16,
          }
        ]}
        getValueFromEvent={normalizeNumber}
      >
        <Input className='card-number-input' />
      </Form.Item>
    </Col>
  );
