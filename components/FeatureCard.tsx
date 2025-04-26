interface FeatureCardProps {
  title: string;
  description: string;
  icon?: any; // Allow passing an SVG component or similar
}

export default function FeatureCard(props: FeatureCardProps) {
  return (
    <div class="bg-blue-100 p-6 rounded-lg shadow-md h-full text-center md:text-left">
       {/* Basic icon placeholder - you can enhance this */}
       {props.icon && <div class="text-blue-600 mb-3 text-3xl mx-auto md:mx-0 w-fit">{props.icon}</div>}
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{props.title}</h3>
      <p class="text-gray-700">{props.description}</p>
    </div>
  );
}