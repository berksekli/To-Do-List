const girisFormu = document.getElementById('giris-formu');


girisFormu.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    
    const kullaniciAdi = document.getElementById('kullanici-adi').value;
    const sifre = document.getElementById('sifre').value;
    
    
    girisYap(kullaniciAdi, sifre);
});


function girisYap(kullaniciAdi, sifre) {
    
    const kayitliSifre = localStorage.getItem(kullaniciAdi);
    if (kayitliSifre === sifre) {
        
        alert('Giriş başarılı!');
        
        window.location.href = 'Anasayfa.html';
    } else {
        
        alert('Kullanıcı adı veya şifre yanlış!');
    }
}
var username = "Kullanıcı Adı"; 
