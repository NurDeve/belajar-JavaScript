// const daftarProduk = [
//   { nama: "Kemeja Polos", harga: 75000, kategori: "baju" },
//   { nama: "Sepatu Sneakers", harga: 350000, kategori: "sepatu" },
//   { nama: "Topi Baseball", harga: 45000, kategori: "aksesoris" },
//   { nama: "Jaket Denim", harga: 250000, kategori: "baju" },
//   { nama: "Kaos Kaki", harga: 15000, kategori: "aksesoris" }
// ];

// let hasil = (seleksi) => 
//     seleksi.filter(item => item.harga > 50000)
//            .map(item => item.nama.toUpperCase())

// console.log(hasil(daftarProduk))

// let jumlah = (tambah) =>
//     tambah.filter(item => item.kategori === 'baju')
//           .map(item => item.harga)
//           .reduce((total,nilai)=> total + nilai,0)
    
// console.log(jumlah(daftarProduk))

// let urut = (urutan) => 
//     urutan.sort((besar,kecil) => besar.harga - kecil.harga)
//           .map(item => item.nama)

// console.log(urut(daftarProduk))


// const keranjangBelanja = [
//   { nama: "Kemeja Polos", harga: 75000, jumlah: 2, kategori: "baju" },
//   { nama: "Sepatu Sneakers", harga: 350000, jumlah: 1, kategori: "sepatu" },
//   { nama: "Topi Baseball", harga: 45000, jumlah: 3, kategori: "aksesoris" },
//   { nama: "Jaket Denim", harga: 250000, jumlah: 1, kategori: "baju" },
//   { nama: "Kaos Kaki", harga: 15000, jumlah: 4, kategori: "aksesoris" }
// ];

// let x = (params) => 
//     params.map(item => ({...item,
//         subtotal: item.harga * item.jumlah
//     }))
//     .filter(item => item.subtotal > 100000)
//     .reduce((a,b) => a + b.subtotal,0)

// console.log(x(keranjangBelanja))    

// const transaksi = [
//   { nama: "Kemeja Polos", harga: 75000, jumlah: 2, kategori: "baju" },
//   { nama: "Sepatu Sneakers", harga: 350000, jumlah: 1, kategori: "sepatu" },
//   { nama: "Topi Baseball", harga: 45000, jumlah: 3, kategori: "aksesoris" },
//   { nama: "Jaket Denim", harga: 250000, jumlah: 1, kategori: "baju" },
//   { nama: "Kaos Kaki", harga: 15000, jumlah: 4, kategori: "aksesoris" },
//   { nama: "Celana Jeans", harga: 200000, jumlah: 2, kategori: "baju" }
// ];

// let y = (params) => {
//    let z = params.map(item => ({...item,
//         subtotal: item.harga * item.jumlah
//     }))
//     .filter(item => item.kategori === 'baju')
//     let c = z.reduce((a,b) => a + b.subtotal,0)
//     return {
//         z,
//         c
//     }
// }
// console.log(y(transaksi));
// let baju =[
// {nama: 'Kemeja', harga: 75000, jumlah: 2, kategori: 'baju'}]
// let kelompok = (isi) => {
//     return isi.reduce((wadah,nilai) => {
//         let pilihan = nilai.kategori;
//         console.log(pilihan)
//         if(!wadah[pilihan]){
//             wadah[pilihan] = [];
//     } 
//     wadah[pilihan].push(nilai)
//     return wadah;
// },{baju: []});  
// };
  

// console.log(kelompok(transaksi))

// let input = document.querySelector('#nilaiawal')

// let akhir = document.querySelector('#nilaiakhir')

// let angka = document.querySelectorAll('.num')

// let operator = document.querySelectorAll('.op')

// let hasil = document.querySelector('.hasil')

// let reset = document.querySelector('.reset')

// let del = document.querySelector('.del')

// angka.forEach(num => {num.addEventListener('click', () => {

//     if(input.textContent === '0' || input.textContent === 'error') {
        
//         input.textContent = num.textContent
//     }
//     else {

//         input.textContent += num.textContent

//     }

// })})

// operator.forEach(item => {item.addEventListener('click', () => {

//     input.textContent += item.textContent    

// })})

// hasil.addEventListener('click', () => {

// try {

//     akhir.textContent = eval(input.textContent)

// } 

// catch (err) {

//     input.textContent = 'error'

// }
// })

// reset.addEventListener('click', () => {

//     input.textContent = '0'    

// })

// del.addEventListener('click', () => {

//     input.textContent = input.textContent.slice(0,-1)  

//     if(input.textContent === ''){

//         input.textContent = '0'

//     }
// })


// let input = document.querySelector('#tugas')

// let kirim = document.querySelector('#kirim')

// let daftar = document.querySelector('#daftartugas')

// kirim.addEventListener('click', () => {

//     if(input.value === ''){

//         return ''
//     }    

//     let wadahitem = document.createElement('div');

//     let itembaru = document.createElement('p');

//     let checklist = document.createElement('input');

//     let tombolhapus = document.createElement('button')

//     checklist.type = 'checkbox';

//     tombolhapus.className = 'fa-solid fa-trash'

//     tombolhapus.addEventListener('click', () => {

//         wadahitem.remove();
//     })

//     checklist.addEventListener('change',() => {
//         if(checklist.checked){
//             itembaru.style.textDecoration = 'line-through';
//             itembaru.style.color = 'gray'
//     }   else {
//             itembaru.style.textDecoration = 'none'
//             itembaru.style.color = 'black'
//     }
//     })

//     itembaru.textContent = input.value;

//     wadahitem.appendChild(itembaru);

//     wadahitem.appendChild(checklist);

//     wadahitem.appendChild(tombolhapus);

//     daftar.appendChild(wadahitem);

//     input.value = '';

// })