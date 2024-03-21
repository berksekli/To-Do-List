// Giriş formunu seçme
const girisFormu = document.getElementById('giris-formu');

// Giriş formunun submit olayını dinleme
girisFormu.addEventListener('submit', function(event) {
    // Sayfanın yenilenmesini engelleme
    event.preventDefault();
    
    // Kullanıcı adını ve şifreyi al
    const kullaniciAdi = document.getElementById('kullanici-adi').value;
    const sifre = document.getElementById('sifre').value;
    
    // Kullanıcı bilgilerini kontrol et ve giriş yap
    girisYap(kullaniciAdi, sifre);
});

// Giriş yapma işlemini gerçekleştiren fonksiyon
function girisYap(kullaniciAdi, sifre) {
    // Kullanıcı adının ve şifrenin doğru olup olmadığını kontrol et
    const kayitliSifre = localStorage.getItem(kullaniciAdi);
    if (kayitliSifre === sifre) {
        // Giriş başarılı
        alert('Giriş başarılı!');
        // Giriş başarılıysa ana sayfaya yönlendir
        window.location.href = 'Anasayfa.html';
    } else {
        // Kullanıcı adı veya şifre yanlış
        alert('Kullanıcı adı veya şifre yanlış!');
    }
}
