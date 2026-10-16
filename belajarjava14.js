// function hitungTotal(daftarHarga) {
//     let hasil = 0;
//     for(let item of daftarHarga){
//         hasil += item;
//     }
//     return hasil
// }


// function prosesPembayaran(namaPelanggan, daftarHarga) {
//     let totalAwal = hitungTotal(daftarHarga);
//     let totalAkhir;
//     if(totalAwal >= 50000){
//        totalAkhir = totalAwal - 10000;
//     } else {
//        totalAkhir = totalAwal;
//     }
//     console.log(`${namaPelanggan} total belanja Rp${totalAwal}. bayar bersih: Rp${totalAkhir}`);
// }

// let belanjaanNur = [20000, 15000, 20000]
// let belanjaanFulan = [10000, 15000]
// prosesPembayaran('nur',belanjaanNur);
// prosesPembayaran('fulan',belanjaanFulan);


// function hitungTotalbarangmahal(hargaNya) {
//     let total = 0;
// for(let i of hargaNya){
    
//     if(i > 20000){
//         total += i
//     }
   
// }
// return total
// }
// function cekCashback(namaPembeli,hargaNya) {
//     let totalEligible = hitungTotalbarangmahal(hargaNya);
//     console.log(`${namaPembeli}, total belanja barang mahal kamu adalah Rp${totalEligible}`);
// }
// let belanjaanbudi = [15000, 25000, 50000, 10000];
// cekCashback('budi',belanjaanbudi);


// function hitungStoklangka(daftarStok) {
//     let totalStok = 0;
//     let jumlahJenis = 0;
//     for(let x of daftarStok){
//         if(x < 10){
//             totalStok += x
//             jumlahJenis += 1
//         }
//     }
//     console.log(`ada ${jumlahJenis} jenis barang langka dengan total ${totalStok} unit.`)
// }
// let stokGudang = [5,15,2,8,25];
// hitungStoklangka(stokGudang);


// function cekAkseskasir(usernameInput, daftarKasir) {
//     if(usernameInput.length < 4){
//         return 'Error:username minimal 4 karakter!'
//     }else {
//         for(let item of daftarKasir){
//             if(usernameInput === item){
//                 return `akses diterima. selamat bekerja ${usernameInput}`
//             }
//         }
//         return 'Error:username tidak terdaftar'
//     }
// }
// let kasirResmi = ['nuraini', 'fulan', 'budiono'];
// console.log(cekAkseskasir('nur',kasirResmi));
// console.log(cekAkseskasir('budi',kasirResmi));
// console.log(cekAkseskasir('fulan',kasirResmi));


// function hitungDiskon() {
//    let totalBayar;
//    let hasil = parseInt(document.getElementById('inputTotal').value);
//    if(hasil >= 100000){
//     totalBayar = `Total Bayar setelah diskon Rp${hasil * 0.9}`;
//    } else if(hasil < 100000 && hasil > 0){
//     totalBayar = `Total Bayar setelah diskon Rp${hasil}`;
//    } else {
//     totalBayar = ' input total belanja tidak valid!';
//    }
// document.getElementById('pesanHasil').textContent = totalBayar;
// }


// function tambahTugas() {
//     let barang = document.getElementById('inputTugas').value
//     if(barang === ''){
//         alert('tugas tidak boleh kosong')
//         return
//     } 
//     let elemenli = document.createElement('li') ;
    
//     elemenli.textContent = barang;
//     elemenli.onclick = function(){
//         elemenli.remove();
//     }
//     document.getElementById('daftarTugas').appendChild(elemenli);
//     document.getElementById('inputTugas').value = '';
// }


// function hitungtotalKeranjang(daftaRharga) {
//     let total = 0;
//     for(let item of daftaRharga){
//         if(item < 0){
//             return 'Error: terdapat harga yang tidak valid!'
//         } 
//         total += item;
        
//     } 
    
//     return total
// }
// console.log(hitungtotalKeranjang([10000,0,20000]));
// console.log(hitungtotalKeranjang([15000,-5000,30000]));


// function saringLulus(daftaRnilai) {
//     let hasil = [];
//     for(let item of daftaRnilai){
//         if(item >= 70){
//             hasil.push(item);
//         }
      
//     }
//       return hasil;
// }
// console.log(saringLulus([55,80,70,65,95]));


// function cariTermurah(daftarProduk) {
//     let produkTermurah = daftarProduk[0];
//     for(let item  of daftarProduk){
//         if(item.harga < produkTermurah.harga){
//             produkTermurah = item;
//         }
//     }
//     return `${produkTermurah.nama} dengan harganya ${produkTermurah.harga}`
  
// }
// let dataBarang = [
//     { nama: "Kaos", harga: 50000 },
//     { nama: "Topi", harga: 25000 },
//     { nama: "Jaket", harga: 150000 }
// ];
// console.log(cariTermurah(dataBarang));


// function beriDiskon(daftarBarang) {
//     let hasil = [];
//     for(let item of daftarBarang){
//         hasil.push({
//         nama: item.nama,
//         hargaSetelahdiskon: item.harga * 0.9
//     });
//     }
//  return hasil
// }
// let produk = [
//     { nama: "Sepatu", harga: 100000 },
//     { nama: "Baju", harga: 50000 }
// ];

// console.log(beriDiskon(produk));
 

// function totalBarangmahal(daftarbaRang) {
//     let total = 0;
//     for(let item of daftarbaRang){
//         if(item.harga > 50000){
//          total += item.harga;
//         }
//     }
//   return total;
// }
// let keronjang = [{nama: 'kaos', harga: 60000},{nama: 'jaket', harga: 150000},{nama: 'topi', harga: 45000},{nama: 'sepatu', harga: 200000}];
// console.log(totalBarangmahal(keronjang));


// function hitungNota(daftarBelanja) {
//     let totalBayar = 0;
//     for(let item of daftarBelanja){
//        totalBayar += item.harga * item.jumlah  
//     }
//     return totalBayar
// }
// let pesanan = [
//     { nama: "Buku", harga: 10000, jumlah: 3 },  // Subtotal: 30000
//     { nama: "Pensil", harga: 2000, jumlah: 5 }, // Subtotal: 10000
//     { nama: "Penggaris", harga: 5000, jumlah: 1 } // Subtotal: 5000
// ];

// console.log(hitungNota(pesanan));


// function lemparKoin() {
//     let koin = Math.random()
//     if(koin > 0.5){
//         return 'gambar'
//     } else {
//         return 'angka'
//     }
// }
// console.log(lemparKoin());
// console.log(lemparKoin());


// function formatRupiah(daftarHarga) {
    
//    return daftarHarga.map(item => `Rp ${item}` )
    
// }
// console.log(formatRupiah([10000, 25000, 50000]));


// function ambilGenap(daftarAngka) {
//     return daftarAngka.filter(item => item % 2 === 0)
// }
// console.log(ambilGenap([1,2,3,4,5,6]));


// function prosesHarga(daftarHarga) {
//     return daftarHarga.filter(harga => harga > 50000).map(harga => harga * 0.9)
// }
// console.log(prosesHarga([30000,60000, 20000, 100000]));


// function hitungTotal(daftarHarga) {
//     return daftarHarga.reduce((Total,item) => Total + item)
// }
// console.log(hitungTotal([10000,20000,30000]));


// function hitungTotalbelanja(daftarHarga) {
//    return daftarHarga.filter(harga => harga >= 50000).map(harga => harga * 0.8).reduce((item,total) => item + total,0)
// }
// console.log(hitungTotalbelanja([20000,50000,100000,10000]));


// let hasil = (harga,persen) =>  harga - (harga * persen / 100) 
// let total = hasil(100000,20);
// console.log(total);


// const keranjang = 
// [
//     {nama :'sepatu',harga : 750000, stok : 5},
//     {nama : 'Kaos kaki', harga : 50000, stok : 20},
//     {nama : 'Celana training', harga : 250000, stok : 10},
//     {nama : 'Botol minum', harga : 100000, stok : 15}
// ]
// const totalSemuastok = (daftarProduk) => daftarProduk.filter(item => item.harga < 500000).reduce((Item,total) => Item + total.stok,0)
// console.log(totalSemuastok(keranjang))


// let pesanan = ['Nasi goreng', 'Mie ayam', 'Bakso'];
// pesanan.shift()
// pesanan.push('Sate ayam')
// console.log(pesanan);
// let siswa = ['budi','siti','andi','eka'];
// siswa.splice(2,1,'dono')
// console.log(siswa);
// let playlist = ['lagu A','lagu B','lagu C','lagu D'];
// let hapus = playlist.splice(3,1)
// playlist.splice(0,0,hapus[0])
// console.log(playlist);


// let antrean = 
// [
//     {nama: 'Budi', status: 'Reguler'},
//     {nama: 'Siti', status: 'Reguler'},
//     {nama: 'Andi', status: 'VIP'},
//     {nama: 'Eka', status: 'Reguler'}
// ];
// console.log(antrean)
// let vip = antrean.findIndex(hasil => hasil.status == 'VIP');
// antrean.unshift(antrean.splice(vip,1)[0])
// debugger
// console.log(`ditemukan orang vip di antrean ke : ${vip}`)
// console.log(antrean);


// let penumpang = [];

// function naikAngkot(penumpangBaru,penumpangLama) {
//    if(penumpangLama.length > 1){
//     return 'angkot penuh'
//    }
//    for(let i = 0; i < penumpangLama.length; i++){
//    if(penumpangLama[i] === penumpangBaru){
//     return 'orang ini sudah masuk angkot'
//    }
//    }
//     penumpangLama.push(penumpangBaru)
//    return penumpangLama
// }


// let user ={}
// user.name = 'john';
// user.surname = 'smith';
// user.name = 'pete';
// delete user.name;


// let schedule = {};
// function isEmpty(obj) {
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }
// alert(isEmpty(schedule));
// schedule['8:30'] = 'get up';
// alert(isEmpty(schedule));


// let salaries = {
//     john: 100,
//     ann: 160,
//     pete: 130
// }
// let sum = 0;
// for(let item in salaries){
//     sum += salaries[item]
// }
// alert(sum);
// alert(salaries)


// let menu = {
//     width : 200,
//     height : 300,
//     title : 'my menu'
// };
// function multiplyNumeric(materi) {
//     for(let aitem in materi){
//         if(materi[aitem] == 'Number'){
//             materi[aitem] *= 2
//         }
        
//     }
// }

// console.log(multiplyNumeric(menu));


// const a = 1;
// [1, 2, 3].forEach(n => console.log(n));


// function pow(x, n) {
//   if (n < 0) {
//     alert("Negative 'n' not supported");
//   } else {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }

//     return result;
//   }
// }
// console.log(pow(3,2));


// let nme = 'nur';
// let umr = 18;
// let isStdnt = true;
// console.log(`Halo nama saya ${nme}, umur saya ${umr} tahun`);


// let nilai = 78;
// if(nilai >= 85){
//   console.log('Lulus dengan Predikat A')
// } else if(nilai >= 70 && nilai < 85){
//   console.log('Lulus dengan Predikat B')
// } else {
//   console.log('Tidak Lulus')
// }


// for(let n = 1; n <= 15; n++){
//   if(n % 3 === 0){
//     console.log(`Angka ${n} adalah kelipatan 3`)
//   } else {
//     console.log(n)
//   }
// }


// let hobi = ['Membaca', 'Menulis', 'Lari']
// hobi.push('Main Game')
// let panjang = hobi.length;
// console.log(hobi[0]);
// console.log(hobi[hobi.length - 1]);
// console.log(panjang);


// function hitungDiskon(totalBelanja,persenDiskon) {
//   return totalBelanja - totalBelanja * persenDiskon / 100
// }
// console.log(hitungDiskon(100000,20));


// const angka = [5, 12, 8, 20, 3, 15];

// console.log(angka.filter(i => i > 10));
// console.log(angka.reduce((h,i) => i + h,0));


// let buku = {
//   judul: 'Mulai dari Nol',
//   penulis: 'Jibril Nur Muhammad',
//   tahunTerbit: 2008,
//   isRead: false
// }
// buku.isRead = true;
// buku.genre = 'action';
// console.log(`Sebuah Buku dengan Judul ${buku.judul} yang Ditulis oleh ${buku.penulis}`)


// let keranjangBelanja = [
//   {nama: 'Kopi', harga: 15000, qty: 2},
//   {nama: 'Roti', harga: 10000, qty: 1}
// ]
// let totalBelanja = (isiBelanja) => 
// isiBelanja.reduce((h,i) => h + i.harga * i.qty,0);
// console.log(totalBelanja(keranjangBelanja))
  

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
// }

// console.log(marry({
//   name: "John"
// }, {
//   name: "Ann"
// }));


// const keranjangBelanja = [
//   { nama: "Buku Tulis", harga: 15000, jumlah: 2 },
//   { nama: "Pulpen", harga: 5000, jumlah: 4 },
//   { nama: "Tas Sekolah", harga: 120000, jumlah: 1 }
// ];
// let barang = ''
// for(let item of keranjangBelanja){
// barang += item.nama
// }
// document.getElementById('hasil').innerHTML = barang;
// function hitungTotalbelanja(isibelanja) {
//   let total = 0;
//   for(let item of isibelanja){
//     total += item.harga * item.jumlah
//   }
//   return total
// }
// function hitungDiskon(totalBelanja) {
//   let totalAwal = hitungTotalbelanja(totalBelanja)
//   let totalAkhir;
//   if(totalAwal > 100000) {
//     totalAkhir = totalAwal - totalAwal * 10 / 100
//     console.log('yeay, kamu dapat diskon 10%')
//     return totalAkhir
//   }
//   console.log('Belanjaan kurang dari Rp100.000, belum dapat diskon ya.')
//   return totalAwal
// }
// document.getElementById('hasil').innerHTML = `Total yang harus dibayar Rp${hitungDiskon(keranjangBelanja)}`


// const daftarTugas = [
//   { id: 1, judul: "Belajar JavaScript", selesai: true },
//   { id: 2, judul: "Merapikan Kamar", selesai: false },
//   { id: 3, judul: "Mengerjakan PR Coding", selesai: false },
//   { id: 4, judul: "Olahraga Pagi", selesai: true }
// ];

// let belumSelesai = (pemisah) => pemisah.filter(item => item.selesai === false)

// console.log(belumSelesai(daftarTugas))


// const daftarProduk = [
//   { id: 1, nama: "Laptop Asus ROG", kategori: "Elektronik", harga: 15000000 },
//   { id: 2, nama: "Mouse Wireless Logitech", kategori: "Elektronik", harga: 250000 },
//   { id: 3, nama: "Kaos Polos Cotton Combed", kategori: "Pakaian", harga: 75000 },
//   { id: 4, nama: "Celana Jeans Pria", kategori: "Pakaian", harga: 200000 },
//   { id: 5, nama: "Headphone Bluetooth", kategori: "Elektronik", harga: 600000 }
// ];

// let cariProdukmurah = (isiProduk) => isiProduk.filter(item => item.harga < 300000)

// console.log(cariProdukmurah(daftarProduk))


// const daftarProduk = [
//   { id: 1, nama: "Laptop Asus ROG", kategori: "Elektronik", harga: 15000000 },
//   { id: 2, nama: "Mouse Wireless Logitech", kategori: "Elektronik", harga: 250000 },
//   { id: 3, nama: "Kaos Polos Cotton Combed", kategori: "Pakaian", harga: 100000 },
//   { id: 4, nama: "Celana Jeans Pria", kategori: "Pakaian", harga: 200000 },
//   { id: 5, nama: "Headphone Bluetooth", kategori: "Elektronik", harga: 600000 }
// ];

// function hitungDiskon(params) {
// return params.map(item => {
//   if(item.kategori === 'Pakaian') {
//     return {...item,
//       harga: item.harga - item.harga * 20 / 100
//     };
//   }
//   return item;
// });


// }

// console.log(hitungDiskon(daftarProduk))


// const daftarStok = [
//   { id: 101, nama: "Buku Tulis", stok: 10 },
//   { id: 102, nama: "Pulpen Gel", stok: 25 },
//   { id: 103, nama: "Buku Gambar", stok: 5 }
// ];

// function hitungStok(params) {
//   return params.map(item =>
//   {if(item.id === 102){
//     return {...item,
//       stok: item.stok - 3
//     }
//   }
// return item;
//   }
//   )
// }
// console.log(hitungStok(daftarStok));


// const daftarStok = [
//   { id: 101, nama: "Buku Tulis", stok: 10 },
//   { id: 102, nama: "Pulpen Gel", stok: 25 },
//   { id: 103, nama: "Buku Gambar", stok: 5 }
// ];

// let hasil = (params) => params.reduce((total,item) => total + item.stok,0)
// console.log(hasil(daftarStok));
  

// const keranjangBelanja = [
//   { id: 1, nama: "Laptop Asus ROG", kategori: "Elektronik", harga: 15000000 },
//   { id: 2, nama: "Mouse Wireless", kategori: "Elektronik", harga: 250000 },
//   { id: 3, nama: "Kaos Polos", kategori: "Pakaian", harga: 75000 },
//   { id: 4, nama: "Headphone Bluetooth", kategori: "Elektronik", harga: 600000 }
// ];

// let hasil = (params) => 
//   params.filter(item => item.kategori === 'Elektronik')
//         .map(item => item.harga)
//         .reduce((total,item) => total + item,0)
      
//   console.log(hasil(keranjangBelanja))


// const daftarProduk = [
//   { id: 1, nama: "Laptop Asus ROG", kategori: "Elektronik", harga: 15000000 },
//   { id: 2, nama: "Mouse Wireless", kategori: "Elektronik", harga: 250000 },
//   { id: 3, nama: "Kaos Polos", kategori: "Pakaian", harga: 75000 },
//   { id: 4, nama: "Headphone Bluetooth", kategori: "Elektronik", harga: 600000 },
//   { id: 5, nama: "Kabel Charger Type-C", kategori: "Elektronik", harga: 50000 }
// ];

// let hasil = (params) => 
//   params.filter(item => item.kategori === 'Elektronik')
//         .sort((kecil,besar) => kecil.harga - besar.harga)

// console.log(hasil(daftarProduk))


// async function tampilkanProdukKeWeb() {
//   try {
//     // 1. Ambil data dari server & ubah jadi JSON
//     const respons = await fetch('https://fakestoreapi.com/products');
//     const produkList = await respons.json();

//     // 2. Cari elemen <ul> kosong di HTML kita tadi
//     const ulContainer = document.getElementById('daftar-produk');

//     // 3. Looping (putar) datanya satu-satu pakai .forEach() atau .map()
//     produkList.forEach(item => {
//       // Buat elemen <li> baru di memori komputer
//       const liBaru = document.createElement('li');
      
//       // Isi teks di dalam <li> dengan Nama Produk dan Harganya
//       liBaru.textContent = `${item.title} - Harga: $${item.price}`;

//       // Masukkan <li> tersebut ke dalam elemen <ul> di HTML
//       ulContainer.appendChild(liBaru);
//     });

//   } catch (error) {
//     console.log("Gagal memuat data:", error);
//   }
// }

// // Jalankan fungsinya
// tampilkanProdukKeWeb();


