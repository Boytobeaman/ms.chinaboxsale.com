import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import ProductCard from "../components/ProductCard.tsx";
import FeatureCard from "../components/FeatureCard.tsx";


// Sample Product Data
const products = [
  {
    title: "Krat Sayuran Plastik",
    description: "Direka khas untuk sayur-sayuran, pelbagai saiz, sesuai untuk memetik, memproses atau menghantar hasil.",
    imageUrl: "https://www.collapsible-crate.com/img/products/vegtable-folding-crates/vegtable-folding-crates-3.jpg",
    altText: "Krat lipat untuk sayur-sayuran",
    inquireModel: "SAYURAN",
  },
  {
    title: "Bekas Penyimpanan Lipat",
    description: "Maksimumkan ruang dengan reka bentuk penjimatan ruang. Lipat rata untuk penyimpanan yang cekap.",
    imageUrl: "https://www.collapsible-crate.com/img/products/collapsible-storage-container/collapsible-storage-container-3.jpg",
    altText: "Bekas penyimpanan lipat",
    inquireModel: "SIMPANAN",
  },
  {
    title: "Bekas Palet Lipat",
    description: "Penyelesaian penyimpanan yang boleh dipercayai dan serba boleh untuk muatan pukal, boleh diguna semula dan boleh ditindan.",
    imageUrl: "https://www.collapsible-crate.com/img/products/foldable-pallet-container/foldable-pallet-container-2.jpg",
    altText: "Bekas palet lipat",
    inquireModel: "PALET",
  },
   {
    title: "Krat Lipat Beroda",
    description: "Mudah digerakkan dengan roda pusing 360 darjah, sesuai untuk pengangkutan yang mudah.",
    imageUrl: "	https://www.collapsible-crate.com/img/products/collapsible-milk-crate/collapsible-milk-crate-8.png",
    altText: "Krat lipat beroda",
    inquireModel: "BERODA",
  },
  // Add more products as needed
];


// Sample Feature Data (Add icons as needed)
const features = [
  { title: "Kualiti Boleh Dipercayai", description: "Produk berkualiti tinggi yang konsisten yang boleh anda harapkan.", icon: "🛡️"}, // Placeholder icon
  { title: "Perkhidmatan Tersuai", description: "Penyelesaian yang disesuaikan untuk memenuhi keperluan khusus anda (OEM/ODM).", icon: "⚙️"},
  { title: "Waranti & Servis", description: "Waranti yang komprehensif dan sokongan selepas jualan yang bertanggungjawab.", icon: "🤝"},
  { title: "Inovasi", description: "Penambahbaikan berterusan dan teknologi terkini dalam sistem bekas kami.", icon: "💡"},
  { title: "Pasukan Berpengalaman", description: "Kepakaran bertahun-tahun dalam industri kotak penyimpanan lipat.", icon: "👥"},
  { title: "Pensijilan", description: "Mematuhi piawaian industri seperti ISO9001 dan RoHS.", icon: "📜"},
];

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="mx-auto bg-[#86efac]">
      <Header />

      <Hero />
       {/* Benefits Section */}
       {/* <section id="benefits" class="py-16 bg-gray-100">
          <div class="container mx-auto px-4 text-center">
              <h2 class="text-3xl font-bold text-gray-800 mb-4">Jimat Kos Logistik & Pengangkutan?</h2>
              <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Krat lipat kami menawarkan faedah praktikal yang ketara dengan mekanisme lipatan yang cepat dan mudah, menjimatkan ruang simpanan yang berharga apabila tidak digunakan.
              </p>
              <a href="mailto:sales@chinaboxsale.com?subject=Inquiry" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Dapatkan Diskaun Pukal
              </a>
          </div>
      </section> */}


            {/* Products Section */}
            <section id="products" class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
            Produk Utama Kami
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.inquireModel}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                altText={product.altText}
                inquireModel={product.inquireModel}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* Why Choose Us Section */}
      <section id="why-us" class="py-16 bg-blue-50">
          <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Kenapa Pilih Kami?</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature) => (
                      <FeatureCard
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        // Pass actual SVG components here for better icons
                        icon={<span class="text-3xl">{feature.icon}</span>}
                      />
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
}
