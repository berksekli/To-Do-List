document.getElementById('giris-formu').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var kullaniciAdi = document.getElementById('kullanici-adi').value;
    var sifre = document.getElementById('sifre').value;

    
    if (kullaniciAdi === 'admin' && sifre === '1234') {
        
        window.location.href = 'Todo list uygulaması.html';
    } else {
        
        alert('Kullanıcı adı veya şifre yanlış.');
    }
});