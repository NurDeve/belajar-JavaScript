var item = prompt("Masukkan item yang ingin ditambahkan ke daftar belanja: (susu, telur, roti, sayur, buah)");
switch(item){
    case "susu":
        alert("Item susu berhasil ditambahkan ke daftar belanja.");
        break;
    case "telur":
        alert("Item telur berhasil ditambahkan ke daftar belanja.");
        break;
    case "roti":
        alert("Item roti berhasil ditambahkan ke daftar belanja.");
        break;
    case "sayur":
        alert("Item sayur berhasil ditambahkan ke daftar belanja.");
        break;
    case "buah":
        alert("Item buah berhasil ditambahkan ke daftar belanja.");
        break;
    default:
        alert("Item yang Anda masukkan tidak valid.");
}