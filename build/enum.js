"use strict";
// enum
// tipe data constant
// enum numeric,
var Months;
(function (Months) {
    Months[Months["JANUARI"] = 1] = "JANUARI";
    Months[Months["FERUARI"] = 2] = "FERUARI";
    Months[Months["MARET"] = 3] = "MARET";
    Months[Months["APRIL"] = 4] = "APRIL";
    Months[Months["MEI"] = 5] = "MEI";
    Months[Months["JUNI"] = 6] = "JUNI";
    Months[Months["JULI"] = 7] = "JULI";
    Months[Months["AGUSTUS"] = 8] = "AGUSTUS";
})(Months || (Months = {}));
;
console.log(Months);
// enum string
var Hari;
(function (Hari) {
    Hari["SENIN"] = "Senin";
    Hari["SELASA"] = "Selasa";
    Hari["RABU"] = "Rabu";
    Hari["KAMIS"] = "Kamis";
    Hari["JUMAT"] = "Jum'at";
    Hari["SABTU"] = "Sabtu";
    Hari["MINGGU"] = "Minggu";
})(Hari || (Hari = {}));
console.log(Hari);
