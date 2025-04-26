interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string; // Path relative to /static
  altText: string;
  inquireModel: string; // Model name for inquiry
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img
        src={props.imageUrl}
        alt={props.altText}
        class="w-full h-48 object-cover"
        loading="lazy"
      />
      <div class="p-6 flex flex-col flex-grow">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{props.title}</h3>
        <p class="text-gray-600 text-sm mb-4 flex-grow">{props.description}</p>
        <a
          href={`mailto:sales@chinaboxsale.com?subject=Inquiry model=${encodeURIComponent(props.inquireModel)}`} // Conceptual link passing model
          class="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 px-4 rounded transition duration-300 text-sm"
        >
          Pertanyaan {props.inquireModel}
        </a>
      </div>
    </div>
  );
}