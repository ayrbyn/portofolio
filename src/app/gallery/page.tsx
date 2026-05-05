import { gallery } from "@/lib/data/gallery";
import { GalleryItem } from "@/components/gallery/GalleryItem";

export default function GalleryPage() {
  const oddItems = gallery.filter((_, i) => i % 2 === 0);
  const evenItems = gallery.filter((_, i) => i % 2 !== 0);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-baseline pb-6 px-5 md:px-12 pt-8 md:pt-12 border-b border-border-subtle mx-4 md:mx-8">
        <h1 className="font-display italic font-light text-[20px] md:text-[22px] text-text-primary">
          Design Gallery
        </h1>
      </div>

      {/* Grid */}
      <div className="px-5 md:px-12 py-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
        {/* Left Column */}
        <div className="flex flex-col gap-12 pt-0">
          {oddItems.map((item, idx) => (
            <GalleryItem key={item.id} item={item} index={idx * 2} />
          ))}
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col gap-12 pt-0 md:pt-16">
          {evenItems.map((item, idx) => (
            <GalleryItem key={item.id} item={item} index={idx * 2 + 1} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center pt-24 pb-12">
        <p className="font-display italic font-light text-[22px] text-text-primary">
          Thank you for visiting.
        </p>
        <p className="text-[14px] text-[#6b6b6b] tracking-wider mt-2">
          Created by Abyan Dzakky
        </p>
      </div>
    </div>
  );
}
