import service from 'feathers-mongoose';
import { paymentInfoModel } from '../mongoose_models/PaymentInfoModel';

export const paymentInfoService = service({ Model: paymentInfoModel });