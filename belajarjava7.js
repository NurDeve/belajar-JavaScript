let nickName = prompt('silakan login terlebih dahulu')
if (nickName === 'admin'){
 let passWord = prompt('masukkan password')
 if (passWord === 'master'){
    alert('welcome')
 } else if (passWord === '' || passWord === null){
    alert('canceled')
 } else {
    alert('wrong password')
 }
} else if (nickName === '' || nickName === null){
    alert('canceled')
} else {
    alert('i don\'t know.')
}