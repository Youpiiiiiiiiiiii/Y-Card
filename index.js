// Ambil elemen gambar profil
const profilePic = document.getElementById("profile-pic");

// Tambahkan event listener untuk membesarkan gambar saat diklik
profilePic.addEventListener("click", function() {
  // Tambahkan kelas tambahan saat gambar diklik
  profilePic.classList.toggle("clicked");
});