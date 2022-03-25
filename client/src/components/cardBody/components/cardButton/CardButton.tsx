import React, { FC, SyntheticEvent } from 'react';
import { Button, Col, Form } from 'antd';

import { constants } from '../../constants';

export const CardButton = () =>
  (
    <Col span={10} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}>
      <Form.Item>
        <Button type='primary' htmlType='submit' >
          {constants.buttonPayText}
        </Button>
      </Form.Item>
    </Col>
  );
