import React, { SyntheticEvent } from 'react';
import { Button, Card, Col, DatePicker, Form, Input, notification, Row } from 'antd';

import './CardBody.css';
import { constants } from './constants';
import { allowInputByPattern } from '../../utils/utils';
import { pay } from '../../api/payment';

export const CardBody = () => {
  const [form] = Form.useForm();

  const onFromSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    form.validateFields()
      .then(() => {
        form.submit();
      });
  }

  const normalizeNumber = (event: SyntheticEvent<HTMLInputElement>) => allowInputByPattern(
    event,
    /^[0-9]+$/
  );

  const customFormat = (value: any) => `${value.format('MM/YYYY')}`;

  return (
    <Card title={constants.formTitle} className='payment-card'>
      <Form
        form={form}
        name='payment-form'
        layout='vertical'
        autoComplete='off'
        onFinish={(values) => {
          pay({ ...values });
          console.log(values);
        }}
      >
        <Row gutter={24}>
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
          <Col span={8}>
            <Form.Item
              label={constants.cardExpirationDate}
              name='expDate'
              rules={[{ required: true }]}
            >
              <DatePicker picker='month' format={customFormat} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
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

          <Col span={10} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}>
            <Form.Item>
              <Button type='primary' htmlType='submit' onClick={onFromSubmit}>
                {constants.buttonPayText}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
