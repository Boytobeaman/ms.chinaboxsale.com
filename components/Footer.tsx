export default function Footer() {
  return (
    <footer class="bg-gray-800 text-gray-400 py-8">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-4">
          {/* Add social icons if needed */}
          <a href="#" class="mx-2 hover:text-white"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="mx-2 hover:text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="mx-2 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <p class="text-sm mb-2">
          Krat Lipat kami sesuai untuk penyimpanan, industri pengangkutan & banyak lagi! Dapatkan tawaran terbaik sekarang.
        </p>
        <p class="text-xs">
          © {new Date().getFullYear()} Krat Lipat Borong. Hak Cipta Terpelihara.
        </p>
        <div class="mt-4 text-xs">
             {/* Links to other language versions if you create them */}
             <a href="https://www.collapsible-crate.com" class="mx-2 hover:text-white">folding crates</a> |
             <a href="https://vn.collapsible-crate.com" class="mx-2 hover:text-white">thùng nhựa</a> |
             <a href="https://th.collapsible-crate.com" class="mx-2 hover:text-white">ลังพลาสติก</a> |
             <a href="https://ms.collapsible-crate.com" class="mx-2 hover:text-white">peti plastik</a>
        </div>
      </div>
    </footer>
  );
}