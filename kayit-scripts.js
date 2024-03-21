const kayitFormu = document.getElementById('kayit-formu');


kayitFormu.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    
    const kullaniciAdi = document.getElementById('kullanici-adi').value;
    const sifre = document.getElementById('sifre').value;
    
    kayitOl(kullaniciAdi, sifre);
});


function kayitOl(kullaniciAdi, sifre) {
    
    localStorage.setItem(kullaniciAdi, sifre);
      
    alert('Kayıt işlemi başarıyla tamamlandı.');

    window.location.href = 'Anasayfa.html';
}

