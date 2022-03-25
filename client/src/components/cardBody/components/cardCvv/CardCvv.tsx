import React from 'react';
import { Col, Form, Input } from 'antd';

import { normalizeNumber } from '../../../../utils/utils';
import { constants } from '../../constants';

export const CardCvv = () =>
  (
    <Col span={7}>
      <Form.Item
        label={constants.cardCVVCode}
        name="cvv"
        rules={[
          {
            required: true,
            len: 3,
          }
        ]}
        getValueFromEvent={normalizeNumber}
      >
        <Input.Password />
      </Form.Item>
    </Col>
  );
