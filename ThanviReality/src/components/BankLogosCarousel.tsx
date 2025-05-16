const BankLogosCarousel = () => {
  // Array of bank logo images
  const bankLogos = [
    { id: 1, src: "/bankLogos/BANK OF BARODA LOGO.jpg", alt: "BANK OF BARODA" },
    { id: 2, src: "/bankLogos/HDFC LOGO.jpg", alt: "HDFC BANK" },
    { id: 3, src: "/bankLogos/ICICI LOGO.jpg", alt: "ICICI BANK" },
    { id: 4, src: "/bankLogos/SBI LOGO.jpg", alt: "SBI BANK" },
  ];

  // Duplicate the array to create seamless looping
  const duplicatedLogos = [...bankLogos, ...bankLogos];

  return (
    <section className="py-12 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Loans Available From
        </h2>

        <div className="relative overflow-hidden">
          {/* Mask for fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div 
            className="flex items-center py-4"
            style={{
              animation: "scroll 20s linear infinite",
              width: "max-content",
              height: "4rem",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 w-40 h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Define the animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default BankLogosCarousel;