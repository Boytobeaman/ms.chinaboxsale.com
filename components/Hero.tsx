export default function Hero() {
  return (
    <section class="py-20 md:py-28 bg-center bg-cover" style="background-image: url('/img/plastic-box-factory-bg.jpg');">
      <div class="container mx-auto px-4 text-center bg-gray-800 text-white bg-opacity-70 rounded-lg p-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">
          Pembekal Borong Krat Lipat Anda
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
          Dapatkan harga terbaik untuk krat plastik lipat berkualiti tinggi, tahan lasak, dan jimat ruang.
        </p>
        <div class="space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:sales@chinaboxsale.com?subject=Inquiry" // Conceptual link
              class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-md text-lg transition duration-300"
            >
              Minta Sebut Harga Borong
            </a>
        </div>
         <p class="mt-10 text-sm text-gray-300">
            Pengilang Langsung | Perkhidmatan OEM/ODM | Penghantaran Seluruh Dunia
        </p>
      </div>
    </section>
  );
}