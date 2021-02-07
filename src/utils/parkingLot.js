import moment from 'moment';
import { NOT_PAID_STATUS } from '../constants/status';

export const getTicket = () => ({
    ticketNumber: Math.floor(Math.random()*1E16),
    entryTime: moment().format(),
    status: NOT_PAID_STATUS,
})