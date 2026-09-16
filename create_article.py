import re

html_path = 'informasi/artikel/5-tips-menjaga-hafalan.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Title
html = re.sub(r'<title>.*?</title>', '<title>Membangun Generasi Robbani - PPTQ AL WAHYU</title>', html)
html = re.sub(r'<h1 class="news-detail-title">.*?</h1>', '<h1 class="news-detail-title">Membangun Generasi Robbani</h1>', html)
html = re.sub(r'<span>Tips Menjaga Hafalan</span>', '<span>Generasi Robbani</span>', html)

# Replace Meta info
html = html.replace('<span>Ustadz Pengajar PPTQ AL WAHYU</span>', '<span>Ust. Hamzah Baya M.Pd (Pengasuh Ponpes Tahfidz Putri Al Wahyu)</span>')
html = html.replace('<span>Tahfidz</span>', '<span>Artikel & Opini</span>')

# Replace Image
html = re.sub(r'<img src="../../assets/img/artikel/tips-hafalan.png" alt=".*?">', '<img src="../../assets/img/artikel/membangun-generasi.webp" alt="Membangun Generasi Robbani">', html)

# Build new content
new_content = '''<p>Kejayaan Islam memang sangatlah sulit diwujudkan di tengah-tengah alam penuh kezhaliman saat ini. Kenyataan ini masih nan jauh di sana. Oleh karenanya, jalan dakwah ini masih sangatlah panjang. Namun, dengan bekal iman dan semangat iqomatuddin yang kuat serta memulai untuk memperbaiki diri sendiri, keluarga dan masyarakat serta mencoba untuk memulai berkarya meski dari hal-hal yang terkecil, tidak mustahil kemuliaan Islam akan diraih.</p>

<p>Allah Ta'ala berfirman:</p>

<blockquote class="arabic-text" dir="rtl" style="font-size: 1.5rem; text-align: right; margin: 20px 0; font-family: 'Amiri', serif; line-height: 2;">
وَلْيَخْشَ الَّذِينَ لَوْ تَرَكُوا مِنْ خَلْفِهِمْ ذُرِّيَّةً ضِعَافًا خَافُوا عَلَيْهِمْ فَلْيَتَّقُوا اللَّهَ وَلْيَقُولُوا قَوْلًا سَدِيدًا
</blockquote>

<p>“Dan hendaklah orang-orang takut kepada Allah, bila seandainya mereka meninggalkan anak-anaknya, yang dalam keadaan lemah, yang mereka khawatirkan terhadap (kesejahteraan) mereka. Oleh sebab itu, hendaklah mereka bertakwa kepada Allah dan mengucapkan perkataan yang benar”. (Q.S An-Nisa’: 9)</p>

<p>Rasulullah bersabda:</p>

<blockquote class="arabic-text" dir="rtl" style="font-size: 1.5rem; text-align: right; margin: 20px 0; font-family: 'Amiri', serif; line-height: 2;">
لَا تَكُونُوا إِمَّعَةً ، تَقُولُونَ : إِنْ أَحْسَنَ النَّاسُ أَحْسَنَّا ، وَإِنْ ظَلَمُوا ظَلَمْنَا ، وَلَكِنْ وَطِّنُوا أَنْفُسَكُمْ ، إِنْ أَحْسَنَ النَّاسُ أَنْ تُحْسِنُوا ، وَإِنْ أَسَاءُوا فَلَا تَظْلِمُوا
</blockquote>

<p>“Janganlah salah satu di antara kamu sekalian berimma’ah, yang jika orang lain baik maka engkau baik, dan jika mereka jelek maka engkau ikut jelek pula. Akan tetapi hendaklah engkau tetap konsisten terhadap (keputusan dirimu. Jika orang-orang baik, maka engkau juga baik; dan jika mereka jelek, hendaklah engkau menjauhinya keburukan mereka.” (HR Tirmidzi)</p>

<p>Di sinilah dicari pemuda Kahfi yang berjuang demi kebenaran hakiki. Mereka adalah generasi rabbani yang siap menjadi pemimpin umat. Diantara pribadi dan kriteriah mereka adalah:</p>

<div style="margin-bottom: 20px;">
    <h3 style="margin-bottom:10px; font-weight:700;">Pertama, Shihhatul Ittijah (Orientasi yang Benar)</h3>
    <p>“Barang siapa mengharap pertemuan dengan Tuhannya maka hendaklah dia mengerjakan kebajikan dan janganlah dia mempersekutukan dengan sesuatu pun dalam beribadah kepada Tuhannya.” (Qs. al-Kahfi: 110)</p>
</div>

<div style="margin-bottom: 20px;">
    <h3 style="margin-bottom:10px; font-weight:700;">Kedua, Shihhatur Risalah (Tugas yang Benar)</h3>
    <p>“Tidaklah Aku ciptakan jin dan manusia, melainkan hanya untuk beribadah kepada Ku”. (Qs. adz-Dzariyat: 56)</p>
    <p>“Sesungguhnya Aku akan jadikan (manusia) sebagai khalifah.” (Qs. al-Baqarah: 30)</p>
</div>

<div style="margin-bottom: 20px;">
    <h3 style="margin-bottom:10px; font-weight:700;">Ketiga, Shihhatut Takhtith (Strategi yang Jitu)</h3>
    <p>“Dan Dialah Allah yang telah menurunkan di kalangan kaum ummiy (buta huruf) seorang Rasul dari kalangan mereka (manusia). Dia membacakan ayat-ayat Allah, membersihkan mereka (dari dosa) dan mengajarkan al-Quran dan Sunnah.” (Qs. al-Jumu’ah: 2)</p>
</div>

<div style="margin-bottom: 20px;">
    <h3 style="margin-bottom:10px; font-weight:700;">Keempat, Shihhatul Baramij (Desain amal yang Terarah)</h3>
    <p>Dalam pembinaan nilai-nilai keislaman tersebut dibutuhkan program atau target-target yang jelas dan terarah. Program yang sangat penting untuk penjagaan diri seorang pemuda dalam aspek ruhiyah, jasadiyah dan fikriyah.</p>
</div>

<div style="margin-bottom: 20px;">
    <h3 style="margin-bottom:10px; font-weight:700;">Kelima, Quwwatul Intaj (Produktivitas yang Tinggi) meliputi:</h3>
    <ol>
        <li>Berkepribadian Islam (Syakhsiyah Islamiyah)</li>
        <li>Memiliki rasa tanggungjawab dan kepemimpinan, memperjuangkan tegaknya syariah Islam hingga menyinari seluruh alam, menjadi teladan dan mengajak umat manusia untuk mengambil jalan Islam.</li>
    </ol>
</div>

<p>Semoga terlahir generasi yang terdiri dari para pemuda yang tangguh memiliki ruhul jihad yang siap berkorban untuk meninggikan agamanya dan hanya mengabdikan dirinya kepada Allah sang maha pencipta, mereka hanya memiliki dua pilihan dalam hidupnya yaitu <em>Isy kariman au mut syahidan</em> (hidup mulia atau mati syahid). Wallahua'lam</p>

<p style="color: #64748b; font-size: 0.9em;"><em>Sumber: Buku “Generasi Pemuda dan Perubahan” Fathi Yakan</em></p>'''

# Replace Body content
import re
# We need to replace the content inside <article class="news-detail-body">...</article>
html = re.sub(r'(<article class="news-detail-body">).*?(</article>)', r'\g<1>' + new_content + r'\g<2>', html, flags=re.DOTALL)

with open('informasi/artikel/membangun-generasi-robbani.html', 'w', encoding='utf-8') as f:
    f.write(html)
