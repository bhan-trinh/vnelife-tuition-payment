import {ChiTietHoaDon} from '@src/components/core/Utils';

export type HoaDon = {
  tong_tien: string;
  noi_dung: string;
  id: string;
  ten_thanh_toan: string;
  chi_tiet: ChiTietHoaDon[];
  allow_online: string;
  dv_su_dung_id: undefined;
  source: string;
  dv_du_no: undefined;
};
