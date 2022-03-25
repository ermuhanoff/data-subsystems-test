import { SyntheticEvent } from 'react';
import { notification } from 'antd';
import { IconType } from 'antd/lib/notification';

export const allowInputByPattern = (event: SyntheticEvent<HTMLInputElement>, pattern: RegExp) => {
  const { value } = event.currentTarget;

  const isAllowedInput = pattern.test((value));

  return isAllowedInput ? value : value.slice(0, -1);
}

export const showNotification = (type: IconType, message: string, description: string = '') => {
  notification[type]({
    message,
    description,
    placement: 'bottomLeft',
  });
}
