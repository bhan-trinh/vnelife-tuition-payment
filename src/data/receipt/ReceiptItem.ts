import {HoaDon} from './HoaDon';
import {InfoHs} from './InfoHs';

export type ReceiptItem = {
  id: number;
  dich_vu: string;
  hoc_sinh_info: InfoHs;
  thanh_toan: HoaDon[];
};
