import React, { SyntheticEvent } from 'react';
import { FormLayout } from 'antd/lib/form/Form';
import { Card, Form, Row } from 'antd';

import { CardNumber } from './components/cardNumber';
import { CardExpDate } from './components/cardExpDate';
import { CardCvv } from './components/cardCvv';
import { CardAmount } from './components/cardAmount';
import { CardButton } from './components/cardButton';

import { showNotification } from '../../utils/utils';
import { pay } from '../../api/payment';
import { constants } from './constants';
import './CardBody.css';

export const CardBody = () => {
  const [form] = Form.useForm();
  const formOptions = {
    form,
    name: 'payment-form',
    layout: 'vertical' as FormLayout,
    autoComplete: 'off',
  }

  const onFromSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    form.validateFields()
      .then(() => form.submit());
  }

  const onFinish = (values: any) => {
    pay({ ...values })
      .then((paymentInfoModel) => {
        form.resetFields();
        showNotification('success', 'Payment has added!', `Payment id ${paymentInfoModel._id}`)
      });
  }


  return (
    <Card title={constants.formTitle} className='payment-card'>
      <Form
        {...formOptions}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <CardNumber />

          <CardExpDate />
        </Row>

        <Row gutter={24}>
          <CardCvv />

          <CardAmount />

          <CardButton formSubmitHandler={onFromSubmit} />
        </Row>
      </Form>
    </Card>
  );
};
