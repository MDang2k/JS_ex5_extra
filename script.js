// bài 1 

const name = document.querySelector("#name"),
    thuNhapNam = document.querySelector("#thuNhapNam"),
    soNguoi = document.querySelector("#soNguoi"),
    btn_ex1 = document.querySelector(".btn_ex1"),
    result_ex1 = document.querySelector(".result_ex1")

function thueSuat(thuNhap) {

    if (thuNhap <= 60)
        return 5
    else if (thuNhap <= 120)
        return 10
    else if (thuNhap <= 210)
        return 15
    else if (thuNhap <= 384)
        return 20
    else if (thuNhap <= 624)
        return 25
    else if (thuNhap <= 960)
        return 30
    else return 35
}


btn_ex1.addEventListener("click", () => {

    let thuNhap = thuNhapNam.value * 1 - 4 - soNguoi.value * 1.6

    result_ex1.innerHTML = `${name.value} cần phải đóng ${thueSuat(thuNhap) * thuNhap / 100} triệu VND`
})

// bài 2

const soKenh = document.querySelector("#soKenh"),
    khachHang = document.querySelector("#khachHang"),
    maKhachHang = document.querySelector("#maKhachHang"),
    soKetNoi = document.querySelector("#soKetNoi"),
    btn_ex2 = document.querySelector(".btn_ex2"),
    result_ex2 = document.querySelector(".result_ex2");

function tinhTienCapDN(soKN, soKenh) {
    if (soKN <= 10) {
        return 15 + soKenh * 50 + 75
    } else
        return 15 + soKenh * 50 + 75 + (soKN - 10) * 5
}

function tinhTienCapDan(soKenh) {
    return 4.5 + 20.5 + 7.5 * soKenh
}

khachHang.addEventListener("change", () => {
    if (khachHang.value * 1 == 2)
        soKetNoi.style.display = 'block'
    else
        soKetNoi.style.display = 'none'
})

btn_ex2.addEventListener("click", () => {
    if (khachHang.value * 1 == 1) {
        result_ex2.innerHTML = `Số tiền cần trả cho dịch vụ cáp nhà dân là ${tinhTienCapDan(soKenh.value*1)}$`
    } else
        result_ex2.innerHTML = `Số tiền cần trả cho dịch vụ cáp     doanh nghiệp là ${tinhTienCapDN(soKetNoi.value*1, soKenh.value*1)}$`
})