function tinhChuVi(chieurong, chieucao) {
    let chuVi = (chieurong + chieucao) * 2;
    return chuVi;
}

let chuViHinh1 = tinhChuVi(20, 10);
let chuViHinh2 = tinhChuVi(200, 5000);

function cacCongViecBuoiSang(thu, time) {
    console.log(`Thu ${thu}`);
    console.log(`Thuc day luc ${time}h sang`);
    console.log("An sang");
}

cacCongViecBuoiSang(2, 8);
cacCongViecBuoiSang(3, 9);
cacCongViecBuoiSang(4, 7);
