export default function Header() {
  const menuItems = [
    { name: "Produk", href: "#products" },
    { name: "Kenapa Kami", href: "#why-us" },
    // { name: "Pelanggan", href: "#clients" },
    // { name: "Hubungi", href: "#contact" }, // Conceptual link
  ];

  return (
    <header class="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
           {/* Replace with your actual logo if you have one */}
           {/* <img src="/img/logo.png" alt="Logo Krat Lipat" class="h-8 w-auto mr-3" /> */}
           <a href="/" class="text-xl font-bold hover:text-blue-400">
            keranjang buah plastik
           </a>
        </div>
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.8l-10 6.25L2 5.8V4zm0 3.45V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.45l-10 6.25L2 7.45z"/>
          </svg>
          <a href="mailto:sales@chinaboxsale.com?subject=Inquiry" class="pl-2">sales@chinaboxsale.com</a>
        </div>
        <nav class="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              class="hover:text-blue-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Basic mobile menu toggle - functionality would need an Island */}
        <button class="md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}