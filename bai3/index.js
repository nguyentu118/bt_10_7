function showDays() {
    let month = parseInt(document.getElementById("monthInput").value);

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28; // Không xét năm nhuận
            break;
        default:
            days = null;
    }
    document.getElementById("result").innerText = result;
}