const tabBtns = document.querySelectorAll('.admin-tab-btn');
const tabContents = document.querySelectorAll('.admin-tab-content');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => {
      b.classList.remove('active');
      b.style.color = 'var(--alwahyu-text)';
      b.style.borderBottom = 'none';
    });
    btn.classList.add('active');
    btn.style.color = 'var(--alwahyu-primary)';
    btn.style.borderBottom = '3px solid var(--alwahyu-primary)';
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    const targetId = 'tab-' + btn.getAttribute('data-tab');
    const targetTab = document.getElementById(targetId);
    if (targetTab) {
      targetTab.style.display = 'block';
    }
  });
});
const adminForms = document.querySelectorAll('.admin-form');
adminForms.forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const type = form.getAttribute('data-type');
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="ph-fill ph-spinner ph-animation-spin"></i> Mengirim Permohonan...';
    const inputs = form.querySelectorAll('input, textarea');
    const data = {
      layanan_type: type
    };
    inputs.forEach((input, index) => {
      data[`field_${index}`] = input.value;
    });
    try {
      let res = await callApi('submitAdministrasi', data);
      if (res && res.status === 'success') {
        showToast(`Permohonan ${type} berhasil dikirim!`);
        form.reset();
      } else {
        showToast(res.message || "Gagal mengirim permohonan.", true);
      }
    } catch (err) {
      console.error(err);
      showToast(`Permohonan ${type} berhasil dikirim! (Simulasi Offline)`);
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Kirim Permohonan';
    }
  });
});