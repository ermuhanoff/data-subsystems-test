import React, { FC, SyntheticEvent } from 'react';
import { Button, Col, Form } from 'antd';

import { constants } from '../../constants';

interface PropTypes {
  formSubmitHandler: (event: SyntheticEvent) => void;
};

export const CardButton: FC<PropTypes> = ({ formSubmitHandler }) =>
  (
    <Col span={10} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}>
      <Form.Item>
        <Button type='primary' htmlType='submit' onClick={formSubmitHandler}>
          {constants.buttonPayText}
        </Button>
      </Form.Item>
    </Col>
  );
