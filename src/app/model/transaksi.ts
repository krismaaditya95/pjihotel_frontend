import { Time } from '@angular/common';

export class Transaksi {
    idTransaksi: number;
    idCustomer: number;
    idKamar: number;
    checkInDate: Date;
    checkInTime: Time;
    checkOutDate: Date;
    checkOutTime: Time;
    idStatusCheck: number;
    totalHarga: number;
    kodeTransaksi: string;
}
