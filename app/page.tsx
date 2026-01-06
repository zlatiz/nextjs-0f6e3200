import Image from "next/image";
import Button from "../components/ui/button";
import Card from "../components/ui/card";

type ImageItem = {
  url: string;
  alt: string;
};

const IMAGES: ImageItem[] = [
  { url: "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png", alt: "Garber Bros logo" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg", alt: "Featured vessels" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg", alt: "Employment" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg", alt: "Contact Garber Bros" },
  { url: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Decorative image 1" },
  { url: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Decorative image 2" },
  { url: "https://garberbrosinc.com/%27/Images/Transparent.html", alt: "Transparent placeholder" }
];

export default function HomePage() {
  const heroImage = IMAGES[1];
  const thumbnails = Array.isArray(IMAGES) ? IMAGES.slice(0, 6) : [];
  const galleryRest = Array.isArray(IMAGES) ? IMAGES.slice(6) : [];

  return (
    <>
      {/* Hero */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <h1 className="text-4xl font-bold mb-4">Garber Bros, Inc.</h1>
          <p className="text-lg leading-relaxed mb-6">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
          <div className="flex gap-3 items-center">
            <Button href="/vessels">View Our Fleet of Vessels</Button>
            <a href="javascript:previousSlide6347994()" className="text-sm text-gray-600">Prev</a>
            <a href="javascript:nextSlide6347994()" className="text-sm text-gray-600">Next</a>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="rounded-lg overflow-hidden shadow-md bg-gray-50">
            {heroImage && (
              <div className="relative w-full h-64 md:h-96">
                {(() => {
                  const safeSrc = encodeURI(heroImage.url);
                  return (
                    <Image src={safeSrc} alt={heroImage.alt} unoptimized width={1200} height={700} className="object-cover w-full h-full" />
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tiles */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden mb-4">
              {(() => {
                const img = IMAGES[1];
                const safeSrc = encodeURI(img.url);
                return <Image src={safeSrc} alt={img.alt} unoptimized width={800} height={600} className="object-cover w-full h-full" />;
              })()}
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vessels</h3>
            <p className="text-sm mb-3">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <a href="/vessels" className="text-primary font-medium">View Our Vessels »</a>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden mb-4">
              {(() => {
                const img = IMAGES[2];
                const safeSrc = encodeURI(img.url);
                return <Image src={safeSrc} alt={img.alt} unoptimized width={800} height={600} className="object-cover w-full h-full" />;
              })()}
            </div>
            <h3 className="text-xl font-semibold mb-2">Employment</h3>
            <p className="text-sm mb-3">Interested in working at Garber Bros? Download our employment application.</p>
            <div className="flex gap-3 items-center">
              <a href="/websites/garberbrosinc/images/application.pdf" className="text-primary font-medium">View Our Employment Application »</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-sm text-gray-600">Apply Online</a>
            </div>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden mb-4">
              {(() => {
                const img = IMAGES[3];
                const safeSrc = encodeURI(img.url);
                return <Image src={safeSrc} alt={img.alt} unoptimized width={800} height={600} className="object-cover w-full h-full" />;
              })()}
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm mb-3">To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <div className="flex gap-3 items-center">
              <a href="/contact" className="text-primary font-medium">Contact Garber Bros Inc »</a>
              <a href="contact.aspx" className="text-sm text-gray-600">Contact (legacy)</a>
            </div>
          </Card>
        </div>
      </section>

      {/* Thumbnails */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {Array.isArray(thumbnails) ? (Array.isArray(thumbnails) ? thumbnails : []).map((img, idx) => {
            const safeSrc = encodeURI(img.url);
            return (
              <div key={idx} className="rounded border p-1 bg-white">
                <div className="aspect-[4/3] bg-gray-50 overflow-hidden rounded">
                  <Image src={safeSrc} alt={img.alt} unoptimized width={400} height={300} className="object-cover w-full h-full" />
                </div>
              </div>
            );
          }) : null}
        </div>
      </section>

      {/* Remaining gallery items */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">More Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.isArray(galleryRest) ? (Array.isArray(galleryRest) ? galleryRest : []).map((img, idx) => {
            const safeSrc = encodeURI(img.url);
            return (
              <div key={idx} className="rounded border p-3 bg-gray-50">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded mb-3">
                  <Image src={safeSrc} alt={img.alt} unoptimized width={600} height={450} className="object-cover w-full h-full" />
                </div>
                <div className="text-sm text-gray-700">{img.alt}</div>
              </div>
            );
          }) : null}
        </div>
      </section>

      <div className="py-12 text-center">
        <a href="#" className="text-sm text-gray-600">Back to top</a>
      </div>
    </>
  );
}
