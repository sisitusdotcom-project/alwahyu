// SEED DATABASE INITIAL STATE
const SEED_DATA = {
  users: [
    {id: 1, name: "Admin Alwahyu", email: "admin@alwahyu.com", password: "admin123", role: "admin"},
    {id: 2, name: "Ustadz Abdullah Faqih", email: "ustadz@alwahyu.com", password: "ustadz123", role: "pengurus"},
    {id: 3, name: "Muhammad Fatih", email: "fatih@alwahyu.com", password: "fatih123", role: "santri"},
    {id: 4, name: "Ahmad Rayhan", email: "rayhan@alwahyu.com", password: "rayhan123", role: "santri"}
  ],
  santri: [
    {id: 1, user_id: 3, nis: "202601001", kelas: "Class 7A", kamar: "Kamar Abu Bakar", nama_ayah: "Bapak H. Syarif", nama_ibu: "Ibu Aminah", wa_wali: "081230200098", status_aktif: "Aktif"},
    {id: 2, user_id: 4, nis: "202601002", kelas: "Class 8B", kamar: "Kamar Umar bin Khattab", nama_ayah: "Bapak Budi", nama_ibu: "Ibu Siti", wa_wali: "081234567890", status_aktif: "Aktif"}
  ],
  wali: [
    {id: 1, santri_id: 1, nama: "Bapak H. Syarif", no_hp: "081230200098"},
    {id: 2, santri_id: 2, nama: "Bapak Budi", no_hp: "081234567890"}
  ],
  pengurus: [
    {id: 1, user_id: 2, nip: "NIP1001", nama: "Ustadz Abdullah Faqih, Lc.", jabatan: "Kepala Madrasah Diniyah", mapel: "Fiqih, Aqidah"}
  ],
  pembayaran: [
    {id: 1, santri_id: 1, jenis: "Syahriyah Bulanan (Juni 2026)", nominal: 1200000, status: "Belum Bayar", bukti_transfer: "-", tanggal: "2026-06-01"},
    {id: 2, santri_id: 1, jenis: "Uang Makan (Juni 2026)", nominal: 600000, status: "Lunas", bukti_transfer: "-", tanggal: "2026-05-25"},
    {id: 3, santri_id: 2, jenis: "Syahriyah Bulanan (Juni 2026)", nominal: 1200000, status: "Menunggu Verifikasi", bukti_transfer: "bukti_spp_juni.jpg", tanggal: "2026-05-30"}
  ],
  hafalan: [
    {id: 1, santri_id: 1, surat: "Al-Mulk", ayat_awal: 1, ayat_akhir: 15, nilai: 90, catatan: "Sangat baik, terus pertahankan", tanggal: "2026-05-28"},
    {id: 2, santri_id: 1, surat: "Al-Mulk", ayat_awal: 16, ayat_akhir: 30, nilai: 85, catatan: "Lancar, perhatikan makhraj huruf", tanggal: "2026-05-30"},
    {id: 3, santri_id: 2, surat: "Ar-Rahman", ayat_awal: 1, ayat_akhir: 20, nilai: 95, catatan: "Sangat tajwid dan fasih", tanggal: "2026-05-29"}
  ],
  nilai: [
    {id: 1, santri_id: 1, mapel: "Fiqih", nilai: 85, semester: "Genap 2025/2026"},
    {id: 2, santri_id: 1, mapel: "Aqidah", nilai: 90, semester: "Genap 2025/2026"},
    {id: 3, santri_id: 1, mapel: "Bahasa Arab", nilai: 78, semester: "Genap 2025/2026"},
    {id: 4, santri_id: 2, mapel: "Fiqih", nilai: 92, semester: "Genap 2025/2026"},
    {id: 5, santri_id: 2, mapel: "Aqidah", nilai: 88, semester: "Genap 2025/2026"}
  ],
  absensi: [
    {id: 1, santri_id: 1, tanggal: "2026-05-28", status: "Hadir"},
    {id: 2, santri_id: 1, tanggal: "2026-05-29", status: "Hadir"},
    {id: 3, santri_id: 1, tanggal: "2026-05-30", status: "Sakit"},
    {id: 4, santri_id: 2, tanggal: "2026-05-28", status: "Hadir"},
    {id: 5, santri_id: 2, tanggal: "2026-05-29", status: "Hadir"},
    {id: 6, santri_id: 2, tanggal: "2026-05-30", status: "Hadir"}
  ],
  perizinan: [
    {id: 1, santri_id: 1, jenis: "Izin Pulang (Sakit)", keterangan: "Demam tinggi, disarankan istirahat di rumah", status: "Disetujui", tanggal_pengajuan: "2026-05-29", tanggal_kembali: "2026-06-02"},
    {id: 2, santri_id: 2, jenis: "Izin Keluar Pondok", keterangan: "Membeli kitab ke toko buku", status: "Selesai", tanggal_pengajuan: "2026-05-27", tanggal_kembali: "2026-05-27"}
  ],
  pengumuman: [
    {id: 1, judul: "Jadwal Liburan Idul Adha 1447 H", isi: "Libur santri dimulai pada tanggal 10 Juni 2026 s/d 18 Juni 2026. Harap wali santri menjemput tepat waktu.", tanggal: "2026-05-25", pembuat: "Admin Alwahyu"},
    {id: 2, judul: "Ujian Akhir Semester Genap", isi: "Ujian lisan dan tulis kepesantrenan akan diadakan mulai tanggal 3 Juni 2026. Persiapkan hafalan dan pelajaran masing-masing.", tanggal: "2026-05-28", pembuat: "Admin Alwahyu"}
  ]
};

// Global State
let activeUser = null;
let currentSantriInfo = null;
let currentPengurusInfo = null;
let currentTabId = "dashboard";

// Auto Clear Local Cache if GAS is configured (to avoid mixing simulator data)
if (typeof API_URL !== 'undefined' && API_URL && API_URL !== '#' && API_URL !== '') {
    localStorage.removeItem('alwahyu_local_db');
}

// Database Getter/Setter (Local Simulation)
function getLocalDb() {
    if (typeof API_URL !== 'undefined' && API_URL && API_URL !== '#' && API_URL !== '') {
        return SEED_DATA;
    }
    let localData = localStorage.getItem('alwahyu_local_db');
    if (!localData) {
        localStorage.setItem('alwahyu_local_db', JSON.stringify(SEED_DATA));
        return SEED_DATA;
    }
    return JSON.parse(localData);
}

function saveLocalDb(db) {
    localStorage.setItem('alwahyu_local_db', JSON.stringify(db));
}

// Local simulation API logic
function runLocalMockApi(action, data) {
    let db = getLocalDb();
    switch (action) {
        case "login":
            let user = db.users.find(u => u.email.toLowerCase() === data.email.toLowerCase() && u.password === data.password);
            if (!user) return { status: 'error', message: 'Email atau password salah' };
            
            let details = {};
            if (user.role === 'santri') {
                let s = db.santri.find(item => String(item.user_id) === String(user.id));
                if (s) {
                    details.santriInfo = s;
                    let w = db.wali.find(item => String(item.santri_id) === String(s.id));
                    details.waliInfo = w;
                }
            } else if (user.role === 'pengurus') {
                let p = db.pengurus.find(item => String(item.user_id) === String(user.id));
                details.pengurusInfo = p;
            }
            return { status: 'success', message: 'Login berhasil', data: { user, details } };
            
        case "addSantri":
            let uId = db.users.length ? Math.max(...db.users.map(u => u.id)) + 1 : 1;
            let uEmail = data.email || (data.nis + "@alwahyu.com");
            let uPass = data.password || "santri123";
            db.users.push({ id: uId, name: data.name, email: uEmail, password: uPass, role: "santri" });
            
            let sId = db.santri.length ? Math.max(...db.santri.map(s => s.id)) + 1 : 1;
            db.santri.push({
                id: sId, user_id: uId, nis: data.nis, kelas: data.kelas, kamar: data.kamar,
                nama_ayah: data.nama_ayah, nama_ibu: data.nama_ibu, wa_wali: data.wa_wali, status_aktif: "Menunggu Ujian Seleksi"
            });
            
            let wId = db.wali.length ? Math.max(...db.wali.map(w => w.id)) + 1 : 1;
            db.wali.push({ id: wId, santri_id: sId, nama: data.nama_ayah || "Wali Santri", no_hp: data.wa_wali });
            
            saveLocalDb(db);
            return { status: 'success', message: 'Santri berhasil ditambahkan' };
            
        case "addPengurus":
            let puId = db.users.length ? Math.max(...db.users.map(u => u.id)) + 1 : 1;
            db.users.push({ id: puId, name: data.name, email: data.email, password: data.password || "pengurus123", role: "pengurus" });
            
            let pId = db.pengurus.length ? Math.max(...db.pengurus.map(p => p.id)) + 1 : 1;
            db.pengurus.push({ id: pId, user_id: puId, nip: data.nip, nama: data.name, jabatan: data.jabatan, mapel: data.mapel });
            
            saveLocalDb(db);
            return { status: 'success', message: 'Pengurus berhasil ditambahkan' };
            
        case "addPembayaran":
            let payId = db.pembayaran.length ? Math.max(...db.pembayaran.map(p => p.id)) + 1 : 1;
            let dateStr = new Date().toISOString().split('T')[0];
            db.pembayaran.push({
                id: payId, santri_id: Number(data.santri_id), jenis: data.jenis, nominal: Number(data.nominal),
                status: "Belum Bayar", bukti_transfer: "-", tanggal: dateStr
            });
            saveLocalDb(db);
            return { status: 'success', message: 'Tagihan berhasil dibuat' };
            
        case "uploadBuktiTransfer":
            let pay = db.pembayaran.find(p => String(p.id) === String(data.id));
            if (pay) {
                pay.status = "Menunggu Verifikasi";
                pay.bukti_transfer = data.bukti_transfer || "bukti_bayar.jpg";
                saveLocalDb(db);
                return { status: 'success', message: 'Bukti transfer berhasil diunggah' };
            }
            return { status: 'error', message: 'Data tagihan tidak ditemukan' };
            
        case "verifikasiPembayaran":
            let payVer = db.pembayaran.find(p => String(p.id) === String(data.id));
            if (payVer) {
                payVer.status = data.status;
                saveLocalDb(db);
                return { status: 'success', message: 'Status pembayaran berhasil diperbarui' };
            }
            return { status: 'error', message: 'Data tagihan tidak ditemukan' };
            
        case "inputSetoran":
            let hafId = db.hafalan.length ? Math.max(...db.hafalan.map(h => h.id)) + 1 : 1;
            let hDate = data.tanggal || new Date().toISOString().split('T')[0];
            db.hafalan.push({
                id: hafId, santri_id: Number(data.santri_id), surat: data.surat,
                ayat_awal: Number(data.ayat_awal), ayat_akhir: Number(data.ayat_akhir),
                nilai: Number(data.nilai), catatan: data.catatan || "", tanggal: hDate
            });
            saveLocalDb(db);
            return { status: 'success', message: 'Setoran hafalan berhasil dicatat' };
            
        case "inputNilai":
            let valRow = db.nilai.find(n => String(n.santri_id) === String(data.santri_id) && n.mapel === data.mapel && n.semester === data.semester);
            if (valRow) {
                valRow.nilai = Number(data.nilai);
            } else {
                let nId = db.nilai.length ? Math.max(...db.nilai.map(n => n.id)) + 1 : 1;
                db.nilai.push({
                    id: nId, santri_id: Number(data.santri_id), mapel: data.mapel,
                    nilai: Number(data.nilai), semester: data.semester
                });
            }
            saveLocalDb(db);
            return { status: 'success', message: 'Nilai akademik berhasil disimpan' };
            
        case "inputAbsensi":
            let absRow = db.absensi.find(a => String(a.santri_id) === String(data.santri_id) && a.tanggal === data.tanggal);
            if (absRow) {
                absRow.status = data.status;
            } else {
                let aId = db.absensi.length ? Math.max(...db.absensi.map(a => a.id)) + 1 : 1;
                db.absensi.push({
                    id: aId, santri_id: Number(data.santri_id), tanggal: data.tanggal, status: data.status
                });
            }
            saveLocalDb(db);
            return { status: 'success', message: 'Absensi berhasil disimpan' };
            
        case "submitIzin":
            let izId = db.perizinan.length ? Math.max(...db.perizinan.map(i => i.id)) + 1 : 1;
            let izDate = new Date().toISOString().split('T')[0];
            db.perizinan.push({
                id: izId, santri_id: Number(data.santri_id), jenis: data.jenis, keterangan: data.keterangan,
                status: "Dalam Pengajuan", tanggal_pengajuan: izDate, tanggal_kembali: data.tanggal_kembali
            });
            saveLocalDb(db);
            return { status: 'success', message: 'Permohonan izin berhasil diajukan' };
            
        case "updateIzinStatus":
            let iz = db.perizinan.find(i => String(i.id) === String(data.id));
            if (iz) {
                iz.status = data.status;
                saveLocalDb(db);
                return { status: 'success', message: 'Status izin berhasil diperbarui' };
            }
            return { status: 'error', message: 'Data perizinan tidak ditemukan' };
            
        case "addPengumuman":
            let pgmId = db.pengumuman.length ? Math.max(...db.pengumuman.map(p => p.id)) + 1 : 1;
            let pDate = new Date().toISOString().split('T')[0];
            db.pengumuman.push({
                id: pgmId, judul: data.judul, isi: data.isi, tanggal: pDate, pembuat: data.pembuat || "Admin"
            });
            saveLocalDb(db);
            return { status: 'success', message: 'Pengumuman berhasil dipublikasikan' };
            
        case "checkStatus":
            let q = (data.query || "").trim().toLowerCase();
            let fs = db.santri.find(s => String(s.nis).toLowerCase() === q);
            if (!fs) {
                let fu = db.users.find(u => u.email.toLowerCase() === q);
                if (fu) {
                    fs = db.santri.find(s => String(s.user_id) === String(fu.id));
                }
            }
            if (fs) {
                let au = db.users.find(u => String(u.id) === String(fs.user_id));
                return {
                    status: 'success',
                    data: {
                        name: au ? au.name : "Santri",
                        nis: fs.nis,
                        kelas: fs.kelas,
                        status_aktif: fs.status_aktif || "Menunggu Ujian Seleksi"
                    }
                };
            }
            return { status: 'error', message: 'Data tidak ditemukan' };
            
        case "submitPengaduan":
            console.log("Mock Submit Pengaduan:", data);
            return { status: 'success', message: 'Pengaduan berhasil disimpan' };
            
        case "submitAdministrasi":
            console.log("Mock Submit Administrasi:", data);
            return { status: 'success', message: 'Permohonan administrasi berhasil disimpan' };
            
        default:
            return { status: 'error', message: 'Action tidak dikenal' };
    }
}

// Hybrid API Fetch Controller
async function callApi(action, data) {
    if (!API_URL || API_URL === '#' || API_URL === '') {
        return new Promise((resolve) => {
            setTimeout(() => resolve(runLocalMockApi(action, data)), 300);
        });
    }
    
    try {
        const params = new URLSearchParams();
        params.append('action', action);
        if (data) {
            for (let key in data) {
                params.append(key, data[key]);
            }
        }
        const response = await fetch(`${API_URL}?${params.toString()}`);
        return await response.json();
    } catch (err) {
        console.error("GAS API error: ", err);
        return { status: 'error', message: 'Gagal menghubungi backend GAS. Fallback ke data lokal.' };
    }
}

async function fetchDb() {
    if (!API_URL || API_URL === '#' || API_URL === '') {
        return getLocalDb();
    }
    try {
        const response = await fetch(`${API_URL}?action=getDb`);
        const result = await response.json();
        if (result.status === 'success') {
            return result.data;
        } else {
            console.error("GAS GET failed: ", result.message);
            return getLocalDb();
        }
    } catch (err) {
        console.error("GAS GET error: ", err);
        return getLocalDb();
    }
}

// Toast
function showToast(message, isError = false) {
    const toast = document.getElementById('epToast');
    const toastMsg = document.getElementById('epToastMsg');
    if (!toast || !toastMsg) return;
    
    toastMsg.textContent = message;
    toast.className = 'ep-toast show';
    
    if (isError) {
        toast.classList.add('ep-toast-error');
        const icon = toast.querySelector('.ep-toast-icon i');
        if (icon) icon.className = 'fa-solid fa-circle-xmark';
    } else {
        toast.classList.add('ep-toast-success');
        const icon = toast.querySelector('.ep-toast-icon i');
        if (icon) icon.className = 'fa-solid fa-circle-check';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Formatting helpers
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatDateString(dateStr) {
    if (!dateStr || dateStr === '-') return '-';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const d = parseInt(parts[2], 10);
    const m = months[parseInt(parts[1], 10) - 1];
    const y = parts[0];
    return `${d} ${m} ${y}`;
}

// Logout Action
function logout() {
    sessionStorage.removeItem('active_user');
    window.location.href = 'index.html';
}
