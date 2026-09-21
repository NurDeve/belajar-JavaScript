let lagi = true;
while(lagi == true){
let player = prompt('pilih salah satu: "gajah" "semut" "orang"');
let comp = Math.random()
if (comp <= 0.34){
  comp = 'gajah'
} else if (comp >= 0.35 && comp < 0.79){
  comp = 'semut'
} else {
  comp = 'orang'
}
let hasil = '';

if (player == comp){
  hasil = 'Seri!'
} else if (player == 'gajah'){
  hasil = (comp == 'semut') ? 'Kamu Kalah' : 'Kamu Menang';
} else if (player == 'semut'){
  hasil = (comp == 'orang') ? 'Kamu Menang' : 'Kamu Kalah';
} else if (player == 'orang'){
  hasil = (comp == 'gajah') ? 'Kamu Kalah' : 'Kamu Menang';
} else {
  hasil ='Anda memasukkan pilihan yang salah'
}
alert('Kamu memilih : ' + player + ' dan komputer memilih : ' + comp + '\n' + ' maka hasilnya ' + hasil);
lagi = confirm('mau main lagi?');
}
alert('terima kasih telah bermain')


