// const namaDepan = 'nur';
// const tahunLahir = 2008;
// let umur = 18;
// console.log (`Halo, nama saya ${namaDepan}. Saya lahir tahun ${tahunLahir} dan saat ini berumur ${umur} tahun`);


// let nilaiTugas = 80;
// let nilaiUTS = 75;
// let nilaiUAS = 85;
// let nilaiAkhir = (nilaiTugas * 0.2) + (nilaiUTS * 0.3) + (nilaiUAS * 0.5);


// if(nilaiAkhir >= 85){
//     console.log('Predikat: A (Sangat Memuaskan)')
// } else if(nilaiAkhir >= 75){
//     console.log('Predikat: B (Memuaskan)')
// } else if(nilaiAkhir >= 60){
//     console.log('Predikat: C (Cukup)')
// } else {
//     console.log('Predikat: D (Tidak Lulus)')
// }


// for(let num = 1 ; num <= 20 ; num++){
//     if(num % 2 === 0){
//         console.log(num)
//     }
// }


// const hitungDiskon = (hargaTotal,persenDiskon) => {
//     let diskon = (hargaTotal * persenDiskon) / 100;
//  return hargaTotal - diskon;
// }
// console.log(hitungDiskon(100000,10));
// console.log(hitungDiskon(250000,20));


// const keranjang = [
//     {nama: 'Buku Tulis', harga: 5000, jumlah: 3 },
//     {nama: 'Pensil', harga: 2000, jumlah: 5},
//     {nama: 'penggaris', harga: 4000, jumlah:2}          
// ];
// function hitungTotal(keranjang) {
//     let total= 0;
//     for(let item of keranjang){
//         total += item.harga * item.jumlah;
//     }
//     return total;
// }
// function hitungDiskon(total) {
//     if(total >= 30000){
//         return total * 0.10;
//     } else if(total >=20000){
//         return total * 0.05;
//     } else {
//         return 0;
//     }
// }
// function cetakStruk(keranjang) {
//     let totalKotor = hitungTotal(keranjang)
//     let potonganDiskon = hitungDiskon(totalKotor)
//     let totalBayar = totalKotor - potonganDiskon;
//     for(let item of keranjang){
//         let totalperItem = item.harga * item.jumlah;
//         console.log(`${item.nama}(${item.jumlah} * ${item.harga}) = ${totalperItem}`);

//     }
//     console.log(`total kotor : Rp ${totalKotor}`)
//     console.log(`diskon : Rp ${potonganDiskon}`)
//     console.log(`total Bayar : Rp ${totalBayar}`);
// }
// cetakStruk(keranjang);


// function tambah(a,b) {

//     return a + b
// }
// function kali(a,b) {
    
//     return a * b
// }
// function hitungDancetak(a,b) {
//     let hasilTambah = tambah(a,b) 
//     let hasilKali = kali(a,b)
//     console.log(`hasil penjumlahan: ${hasilTambah}`);
//     console.log(`hasil perkalian: ${hasilKali}`);
// }
// hitungDancetak(5,3);


// function cekUsia(umur) {
//     if(umur >= 18){
//         return 'Dewasa';
//     } else {
//         return 'Anak-Anak';
//     }
// }
// function tampilkanStatus(name,umur) {
//     let hasilUsia = cekUsia(umur)
    
//     console.log(`${name} berumur ${umur} tahun dan berstatus ${hasilUsia}`)
// }
// tampilkanStatus('nur',19);
// tampilkanStatus('muhammad',15);


// let kumpulanAngka = [10, 20, 30, 50];
// function cariAngkabesar(daftarangka) {
//     let total = 0;
//     for(let item of daftarangka){
//         total += item;
      
// }
//     if(total > 50){
//         return 'Total nilai besar: ' + total;
//     } else {
//         return 'Total nilai kecil: ' + total;
//     }
// }
// console.log(cariAngkabesar(kumpulanAngka));


// let stokToko = ['Buku','Pensil','Penggaris']
// function cekBarang(daftarBarang,barangCari) {
//     for(let item of daftarBarang){
//         if(item == barangCari){
//             return  `${barangCari} ditemukan di toko!`
//         } 
//     }
//     return `${barangCari} tidak ada di toko`
// }
// console.log(cekBarang(stokToko, 'Pensil'));
// console.log(cekBarang(stokToko,'Spidol'));


// function hitungRatarata(daftarNilai) {
//     let total = 0;
//     for(let item of daftarNilai){
//        total += item;
//     }
//    return total / daftarNilai.length;
// }

// function cekKelulusan(namaSiswa,daftarNilai) {
//     let RataRata = hitungRatarata(daftarNilai);
//     let status;
//     if(RataRata>= 75){
//       status = 'lulus'
//     } else {
//         status = 'tidak lulus'
//     }
//     console.log(`${namaSiswa} memiliki rata-rata ${RataRata} dan dinyatakan ${status}`)
// }
// cekKelulusan('Budi', [80, 85, 90]);
// cekKelulusan('Siti', [60, 70, 65]);


// function hitungBelanja(jumlahSemua) {
//     let total = 0;
//     for(let x of jumlahSemua){
//         total += x;
//     }
//     return total
// }
// let belanjaan = [12000,8000, 30000, 5000];
// let totalBayar = hitungBelanja(belanjaan);
// console.log(`total belanjaan kamu adalah Rp${totalBayar}`);

