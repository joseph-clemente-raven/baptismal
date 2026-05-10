import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { MapPin, Calendar, Clock, Heart, Sparkles, ChevronLeft, ChevronRight, X, Gift, Shirt, BookOpen, Droplets, CloudRain, Church, ChurchIcon, FileImage } from "lucide-react";
import one from '@/assets/1.jfif';
import two from '@/assets/2.jfif';
import three from '@/assets/3.jfif';
import four from '@/assets/4.jfif';
import five from '@/assets/5.jfif';

import diaper from '@/assets/gifts/diaper.png';
import construction from '@/assets/gifts/construction.png';
import lotion from '@/assets/gifts/lotion.png';
import onesie from '@/assets/gifts/onesie.png';
import towel from '@/assets/gifts/towel.png';

const images = [
  one,
  three,
  four,
  five,
  two,
];

function EnvelopeScreen({ onComplete }: { onComplete: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      setIsExiting(true);
    }, 8000);
    setTimeout(onComplete, 9500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3b8fcb]/95 backdrop-blur-3xl overflow-hidden"
        >
          {/* Cinematic warm lighting simulation */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-50/10 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen"></div>

          <motion.div
            whileHover={!isOpen ? { scale: 1.02, rotateZ: 0.5 } : undefined}
            animate={
              isOpen
                ? { scale: 1, y: [0, 0, 0, 1000, 1000] }
                : { y: [-2, 2, -2], rotateZ: [-0.3, 0.3, -0.3] }
            }
            transition={
              isOpen
                ? { duration: 6.0, times: [0, 0.25, 0.35, 0.7, 1], ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"] }
                : {
                    y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                    rotateZ: {
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    },
                  }
            }
            className="relative w-[300px] h-[300px] max-w-[90vw] max-h-[90vh] sm:w-[440px] sm:h-[440px] perspective-1000 cursor-pointer group drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
            onClick={handleOpen}
          >
            {/* Envelope Back (Inside) */}
            <motion.div
              initial={{ zIndex: 0 }}
              className="absolute inset-0 bg-[#d8d1c7] rounded-md border border-[#c4bcaf] overflow-hidden"
            >
              <div className="absolute inset-0 shadow-[inset_0_30px_60px_rgba(0,0,0,0.3)]"></div>
              {/* Paper grain */}
              <div className="absolute inset-0 opacity-[0.12] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGZpbHRlciBpZD0ibiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNiIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-multiply"></div>
            </motion.div>

            {/* Letter inside */}
            <motion.div
              initial={{
                y: "0%",
                scale: 1,
                opacity: 1,
                zIndex: 10,
                rotateZ: 0,
                rotateY: 0,
                rotateX: 0,
              }}
              animate={
                isOpen
                  ? {
                      y: ["0%", "0%", "0%", "-1000px", "-1000px"],
                      scale: [1, 1, 1, 1.15, 1.15],
                      rotateZ: [0, 0, 0, -1, 0],
                      opacity: [1, 1, 1, 1, 1],
                      zIndex: [10, 10, 10, 10, 10],
                    }
                  : {}
              }
              transition={{
                duration: 6.0,
                times: [0, 0.25, 0.35, 0.7, 1],
                ease: ["easeInOut", "easeInOut", "easeInOut", "easeOut"],
              }}
              className="absolute inset-x-3 top-3 bottom-2 bg-[#fdfcf9] rounded text-center flex flex-col items-center justify-center border border-[#e8e3d9] shadow-[0_5px_15px_rgba(0,0,0,0.12)] before:absolute before:inset-0 before:border before:border-[#d4cec5]/40 before:m-2 outline outline-1 outline-white/60"
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-transparent to-slate-900" />
              {/* Subtle paper grain */}
              <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGZpbHRlciBpZD0ibiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNiIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-multiply rounded pointer-events-none"></div>

              {/* Text positioned centered */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 w-full h-full">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 border-[3px] border-white shadow-md">
                   <img src={one} alt="Baby" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-[1.4rem] sm:text-2xl text-[#3b414d] mb-2 px-2 leading-tight tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">
                  Eljoe Eagle J. Ladao
                </h3>
                <p className="font-serif text-sm sm:text-base italic text-[#7a8494] font-light drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">
                  Baptismal Celebration
                </p>
              </div>
            </motion.div>

            {/* Envelope Front Panels */}
            <motion.div
              initial={{ zIndex: 20 }}
              className="absolute inset-0 pointer-events-none rounded-md overflow-hidden flex drop-shadow-[0_-5px_15px_rgba(0,0,0,0.05)]"
            >
              {/* Paper grain overlay for front panels */}
              <div className="absolute inset-0 opacity-[0.1] z-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGZpbHRlciBpZD0ibiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNiIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-multiply"></div>

              {/* Left panel */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#f7f5f0] to-[#eae4da] border-r border-white/60 drop-shadow-2xl"
                style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}
              />
              {/* Right panel */}
              <div
                className="absolute inset-0 bg-gradient-to-l from-[#f7f5f0] to-[#eae4da] border-l border-white/60 drop-shadow-2xl"
                style={{ clipPath: "polygon(100% 0, 50% 50%, 100% 100%)" }}
              />
              {/* Bottom panel */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#efeae0] to-[#faf8f5] border-t border-white/80 shadow-[inset_0_-10px_30px_rgba(0,0,0,0.05)] z-10"
                style={{ clipPath: "polygon(0 100%, 50% 50%, 100% 100%)" }}
              />
            </motion.div>

            {/* Flap (Top) */}
            <motion.div
              initial={{ rotateX: 0, zIndex: 30 }}
              animate={
                isOpen
                  ? { rotateX: [0, 180, 180, 180, 180], zIndex: [30, 5, 5, 5, 5] }
                  : { rotateX: 0, zIndex: 30 }
              }
              transition={{
                duration: 6.0,
                times: [0, 0.20, 0.35, 0.7, 1],
                ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"],
              }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 pointer-events-none transform-preserve-3d drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)]"
            >
              {/* Grain layer for the flap */}
              <div
                className="absolute inset-0 opacity-[0.1] z-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGZpbHRlciBpZD0ibiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNiIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-multiply transform-preserve-3d"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%)" }}
              ></div>

              {/* Flap Front (Visible when closed) */}
              <div className="absolute inset-0 origin-top backface-hidden">

                {/* 🌤️ Soft light blue ambient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#eaf6ff] via-[#f8fcff] to-[#f0ece3] opacity-70" />

                {/* ✉️ Envelope flap */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#fdfcf9] via-[#eef7ff] to-[#f0ece3] border-b border-white/80"
                  style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%)" }}
                />

                {/* ✨ Soft edge lighting for depth */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-100/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-50/20 to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={isOpen ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full z-[60] flex items-center justify-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] pointer-events-auto transition-transform"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 35% 35%, #bfe6ff 0%, #7cc7f2 45%, #3b8fcb 100%)",
                      boxShadow:
                        "inset 0 2px 6px rgba(255,255,255,0.6), inset 0 -5px 10px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.15)"
                    }}
                  >
                    {/* Inner embossed ring */}
                    <div className="w-[80%] h-[80%] rounded-full border-[1.5px] border-[#d8f1ff]/70 border-b-[#2f6f9f]/60 flex items-center justify-center opacity-90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)]">

                      {/* Letter */}
                      <span
                        className="font-serif text-[#7cc7f2] text-3xl sm:text-4xl italic font-bold drop-shadow-[0_-1px_2px_rgba(0,0,0,0.4)]"
                        style={{ WebkitTextStroke: "1px #eaf7ff" }}
                      >
                        E
                      </span>

                    </div>
                  </motion.div>

              </div>

              {/* Flap Back (Visible when open) */}
              <div
                className="absolute inset-0 origin-top backface-hidden"
                style={{ transform: "rotateX(180deg)" }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#e0d8cc] to-[#efe9df] border-t border-[#d4cec5]/60 shadow-[inset_0_20px_40px_rgba(0,0,0,0.1)]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%)" }}
                />
              </div>
            </motion.div>

            {/* CTA text floating below the envelope */}
            <AnimatePresence>
              {!isOpen && (
                <motion.span
                  exit={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-[11px] sm:text-[12px] tracking-[0.3em] text-white uppercase font-bold whitespace-nowrap drop-shadow-sm pointer-events-none"
                >
                  Click to Open
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GalleryScreen({ onClose, onOpenImage }: { onClose: () => void, onOpenImage: (index: number) => void }) {
  useEffect(() => {
    // When gallery mounts, ensure we scroll to top of this container or keep body overflow hidden
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[80] bg-[#fbfaf8] overflow-y-auto"
    >
      <div className="min-h-screen py-16 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <button
          onClick={() => {
            onClose();
            document.body.style.overflow = "auto";
          }}
          className="group flex items-center gap-2 text-[#7ba1c7] hover:text-[#5c8ab8] transition-colors mb-12 sm:mb-16"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif tracking-wide text-lg">Back to Invitation</span>
        </button>
    
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#7ba1c7] drop-shadow-sm mb-4">
              Moments of Joy
            </h2>
            <p className="text-[#7a8494] font-serif italic text-xl mb-12 sm:mb-16">
              The full gallery
            </p>
          </div>
          {/* <div className="flex gap-4 hover:bg-[#5c8ab8] cursor-pointer hover:border-[#5c8ab8] hover:text-white items-center border-2 rounded-md px-4 py-1">
            Google Drive Link
            <FileImage className="h-5 w-5"/>
          </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              onClick={() => onOpenImage(i)}
              className="relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-[0_15px_40px_rgba(154,176,201,0.3)] transition-all duration-500 group cursor-pointer"
            >
              {/* Equal height wrapper */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                
                <div className="absolute inset-0 bg-[#7ba1c7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />

                <img
                  src={src}
                  alt={`Baby gallery moment ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] saturate-[0.85] group-hover:saturate-100"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MainSite() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showGallery, setShowGallery] = useState(false);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative z-10 bg-[#fbfaf8]"
    >
      {/* Hero Section (No Parallax) */}
      <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#f4f1eb] to-[#fbfaf8]">
        {/* Decorative subtle texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGZpbHRlciBpZD0ibiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNiIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] opacity-[0.04] mix-blend-multiply pointer-events-none" />
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-10"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-10 sm:mb-12 relative flex items-center justify-center">
            {/* Enhanced Hero Icon */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-[#d4cec5] rounded-full border-dashed"
            />
            <div className="absolute inset-2 border border-[#9ab0c9]/40 rounded-full" />
            <div className="absolute inset-4 bg-white shadow-[0_0_30px_rgba(154,176,201,0.2)] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-[#7ba1c7]">
                <path d="M12 3v18M7 8h10" />
              </svg>
            </div>
          </div>

          <h2 className="font-serif text-2xl md:text-5xl tracking-[0.2em] sm:tracking-[0.3em] text-[#7ba1c7] mb-12 uppercase drop-shadow-sm">
            Baby Eaglet's Baptism
          </h2>

          <p className="font-serif italic text-[#5a6270] text-lg sm:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
            Today you are marked with the cross of Christ. May it bring peace and joy to your life as you grow.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="mx-auto w-40 h-40 sm:w-60 sm:h-60 mb-10 sm:mb-12 relative border-[6px] sm:border-[8px] border-[#fdfcf9] rounded-full shadow-[0_15px_40px_rgba(154,176,201,0.25)] overflow-hidden"
          >
            <img 
              src={one}
              alt="Eljoe Eagle" 
              className="w-full h-full object-cover saturate-[0.85]" 
            />
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-[5rem] mb-6 sm:mb-8 drop-shadow-sm leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b414d] to-[#5a6270]">Eljoe Eagle</span>
            <br />
            <span className="text-3xl sm:text-5xl md:text-6xl text-[#7ba1c7] italic tracking-wide">J. Ladao</span>
          </h1>
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#7ba1c7] to-transparent mx-auto mb-8 mt-10" 
          />

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 relative inline-block"
          >
            <Sparkles className="absolute -left-6 -top-2 w-4 h-4 text-[#7ba1c7] animate-pulse" />
            <p className="tracking-[0.2em] font-medium text-[#5c8ab8] uppercase text-sm sm:text-lg mb-2">
              Saturday, May 16, 2026
            </p>
            <Sparkles className="absolute -right-6 -bottom-2 w-4 h-4 text-[#7ba1c7] animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="py-24 sm:py-32 px-6 max-w-5xl mx-auto relative z-10 bg-[#fbfaf8]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#7ba1c7] mb-6 drop-shadow-sm">
            The Celebration
          </h2>
          <div className="flex items-center justify-center gap-4">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
            <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-2 h-2 rounded-full border border-[#d6e3f0]" />
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white border-[1.5px] border-[#eaf1f8] flex flex-col justify-between rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(154,176,201,0.06)] hover:shadow-[0_20px_50px_rgba(154,176,201,0.2)] transition-shadow duration-500 group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#eaf1f8] to-transparent rounded-bl-[100px] opacity-70 transition-all duration-700 pointer-events-none group-hover:scale-110" />
            <div className="w-20 h-20 bg-gradient-to-br from-[#f0f5fa] to-white border border-[#d6e3f0] rounded-[24px] shadow-sm flex items-center justify-center mx-auto mb-10 text-[#7ba1c7] rotate-3 group-hover:rotate-6 transition-transform duration-500">
              <Calendar className="w-8 h-8 -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#3b414d] mb-6 drop-shadow-sm">
              The Ceremony
            </h3>
            <p className="text-[#5a6270] mb-3 mt-4 font-medium tracking-[0.1em] uppercase text-sm sm:text-base">
              Saturday, May 16th, 2026
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 mb-8">
              <Clock className="w-4 h-4 text-[#7ba1c7] opacity-80" />
              <span className="text-[#7ba1c7] font-serif italic text-xl opacity-90">9:45 AM</span>
            </div>
            <p className="text-[#7a8494] mt-auto leading-relaxed font-light relative z-10">
              <strong className="font-medium text-[#3b414d] block text-xl mb-2">
                St. Joseph the Worker Parish
              </strong>
              PN. Roa Subd. Calaanan, Canitoan,<br />
              Cagayan de Oro City.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=8.46305154383738,124.60523486658123&travelmode=driving",
                  "_blank"
                )
              }
              className="cursor-pointer mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#7ba1c7] text-white font-medium shadow-md hover:bg-[#6a92b8] transition-colors duration-300"
            >
              Get Directions
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border-[1.5px] border-[#eaf1f8] flex flex-col justify-between rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(154,176,201,0.06)] hover:shadow-[0_20px_50px_rgba(154,176,201,0.2)] transition-shadow duration-500 group"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#eaf1f8] to-transparent rounded-br-[100px] opacity-70 transition-all duration-700 pointer-events-none group-hover:scale-110" />
            <div className="w-20 h-20 bg-gradient-to-bl from-[#f0f5fa] to-white border border-[#d6e3f0] rounded-[24px] shadow-sm flex items-center justify-center mx-auto mb-10 text-[#7ba1c7] -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
              <MapPin className="w-8 h-8 rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#3b414d] mb-6 drop-shadow-sm">
              The Reception
            </h3>
            <p className="text-[#5a6270] mb-3 mt-4 font-medium tracking-[0.1em] uppercase text-sm sm:text-base">
              Lunch to follow
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 mb-8">
              <Clock className="w-4 h-4 text-[#7ba1c7] opacity-80" />
              <span className="text-[#7ba1c7] font-serif italic text-xl opacity-90">11:30 AM</span>
            </div>
            <p className="text-[#7a8494] mt-auto leading-relaxed font-light relative z-10">
              <strong className="font-medium text-[#3b414d] block text-xl mb-2">
                Dominique Lounge
              </strong>
              by Casa de Canitoan<br />
              Cagayan de Oro City
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=8.474173249095019,124.5966765242534&travelmode=driving",
                  "_blank"
                )
              }
              className="cursor-pointer mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#7ba1c7] text-white font-medium shadow-md hover:bg-[#6a92b8] transition-colors duration-300"
            >
              Get Directions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Programme Section */}
      <section className="py-24 sm:py-32 px-6 max-w-4xl mx-auto relative z-10 bg-[#fbfaf8]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#7ba1c7] mb-6 drop-shadow-sm">
            Programme
          </h2>
          <div className="flex items-center justify-center gap-4">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
            <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-2 h-2 rounded-full border border-[#d6e3f0]" />
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-[#eae4da] rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-6 sm:p-14 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-20 sm:h-40 bg-gradient-to-b from-[#fdfcf9] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-40 bg-gradient-to-t from-[#fdfcf9] to-transparent pointer-events-none" />
          
          <div className="relative z-10 font-serif text-[1.05rem] sm:text-2xl text-[#5a6270] leading-relaxed text-center px-2 sm:px-0">
            {[
              {
                title: "Welcome & Opening Prayer",
                desc: "Host/Emcee welcomes guests<br/>Opening prayer"
              },
              {
                title: "Introduction of the Celebrant",
                desc: "Short introduction of your baby"
              },
              {
                title: "Thanksgiving Message",
                desc: ""
              },
              {
                title: "Lunch / Meal Blessing",
                desc: ""
              },
              {
                title: "Godparents' Acknowledgment",
                desc: "Recognition of godparents"
              },
              {
                title: "Photo session",
                desc: "with baby, parents,<br/>and godparents"
              },
              {
                title: "Closing & Thank You",
                desc: "Final thank you from host/parents"
              },
              {
                title: "Announcement",
                desc: "<span class=\"italic\">(if you have souvenirs or giveaways)</span>"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                className={`${i !== 0 ? 'mt-6' : ''} ${i === 7 ? 'pt-4 border-t border-[#f0f5fa] mt-8' : ''}`}
              >
                <p className="font-semibold text-[#5c8ab8] mb-1">{item.title}</p>
                {item.desc && (
                  <p className="text-[#7a8494] text-[15px] sm:text-lg leading-snug sm:leading-normal" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Godparents Section */}
      <section className="py-24 sm:py-32 px-6 max-w-4xl mx-auto relative z-10 bg-[#fbfaf8]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#7ba1c7] mb-6 drop-shadow-sm">
            List of Godparents
          </h2>
          <div className="flex items-center justify-center gap-4">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
            <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-2 h-2 rounded-full border border-[#d6e3f0]" />
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-[#eae4da] rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-6 sm:p-14 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-20 sm:h-40 bg-gradient-to-b from-[#fbfcf8] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-40 bg-gradient-to-t from-[#fbfcf8] to-transparent pointer-events-none" />
          
          <div className="relative z-10 font-serif text-[1rem] sm:text-[1.1rem] md:text-xl text-[#5a6270] text-center px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[
                "Mr. & Mrs. Clemente",
                "Mr. & Mrs. Gallardo",
                "Mr. & Mrs. Gallega",
                "Mr. & Mrs. Cruz",
                "Mr. Marc Lester John Honculada",
                "Ms. Glefamae Lyn Acenas",
                "Mr. Cheran Salvado",
                "Mr. Van Damme Joy Lumamba",
                "Mr. Jhon Vincent De Guzman",
                "Ms. Matt Kynn Pearl BatBat",
                "Mr. Russel Nalasa",
                "Mr. Rio Cagatan",
                "Ms. Lani Angie Tanedo",
                "Ms. Rose Cantil",
                "Ms. Marichu Alegarbes",
                "Ms. Emmalyn Tagaro",
                "Ms. Judene Rose Jaspe",
                "Mr. Chris Cabigquez"
              ].map((name, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-3 px-6 rounded-2xl bg-[#f8fafc] border border-[#eaf1f8] shadow-sm transform hover:-translate-y-1 transition-all duration-300"
                >
                  {name}
                </motion.div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* Parallax Quote Section (Moved to 3rd section position) */}
      <section
        ref={parallaxRef}
        className="relative h-[60vh] sm:h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center bg-[#f0f5fa]"
      >
        <motion.div
          style={{ y: yBg }}
          className={`absolute inset-x-0 -top-[40%] -bottom-[40%] bg-[url('${one}')] bg-cover bg-center`}
        />
        <div className="absolute inset-0 bg-white/70 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[#eaf1f8]/40 pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbfcf8] via-transparent to-[#fbfcf8] pointer-events-none opacity-80" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-8 max-w-3xl mx-auto backdrop-blur-md bg-white/40 p-10 sm:p-14 rounded-[40px] border-[1.5px] border-white/80 shadow-[0_30px_60px_rgba(154,176,201,0.15)]"
        >
          <ChurchIcon className="w-8 h-8 text-[#7ba1c7] mx-auto mb-8 animate-pulse opacity-70" />
          <p className="font-serif text-2xl sm:text-4xl text-[#3b414d] drop-shadow-sm leading-relaxed mb-6 font-medium">
            Baby Eaglet's Baptism
          </p>
          <div className="w-12 h-[1px] bg-[#7ba1c7]/40 mx-auto my-6" />
          <p className="text-[#5c8ab8] font-serif italic sm:text-xl tracking-wider">
            Today you are marked with the cross of Christ. May it bring peace and joy to your life as you grow.
          </p>
          <div className="w-12 h-[1px] bg-[#7ba1c7]/40 mx-auto my-6" />
          <p className="font-serif italic sm:text-xl tracking-wider">
            May 16, 2026
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 sm:py-32 relative z-10 bg-[#fbfaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-[#7ba1c7] drop-shadow-sm mb-6">
              Moments of Joy
            </h2>
            <div className="flex items-center justify-center gap-4">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
              <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-2 h-2 rounded-full border border-[#d6e3f0]" />
              <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, 3).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: "easeOut" }}
              onClick={() => openImage(i)}
              className="relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-[0_15px_40px_rgba(154,176,201,0.3)] transition-all duration-500 group cursor-pointer"
            >
              {/* Equal height wrapper */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">

                <div className="absolute inset-0 bg-[#7ba1c7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />

                <img
                  src={src}
                  alt={`Baby gallery moment ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] saturate-[0.85] group-hover:saturate-100"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <button
              onClick={() => {
                setShowGallery(true);
                document.body.style.overflow = "hidden";
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#eae4da] text-[#7ba1c7] rounded-full hover:bg-[#f0f5fa] hover:border-[#d6e3f0] hover:text-[#5c8ab8] transition-all shadow-sm group"
            >
              <span className="font-serif tracking-wide">View Full Gallery</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gift Ideas Section */}
      <section className="py-24 sm:py-32 px-6 max-w-5xl mx-auto relative z-10 bg-[#fbfaf8]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto"
        >
          <Gift className="w-10 h-10 text-[#7ba1c7] mx-auto mb-8 stroke-[1.5]" />
          <h2 className="font-serif text-3xl md:text-5xl text-[#7ba1c7] drop-shadow-sm mb-6">
            Gift Ideas
          </h2>
          <p className="text-[#3b414d] font-serif text-xl sm:text-lg mb-6 leading-relaxed px-4">
            Having you join us in this sacred moment means so much to our family. Your presence is already a gift.
          </p>
          <p className="text-[#5a6270] font-serif italic text-lg sm:text-lg tracking-wide max-w-2xl mx-auto mb-10 px-4">
            But if your heart is set on giving, we would deeply appreciate any of the following:
          </p>
          <div className="flex items-center justify-center gap-4">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
            <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-2 h-2 rounded-full border border-[#d6e3f0]" />
            <motion.div initial={{ width: 0 }} whileInView={{ width: "3rem" }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#d6e3f0]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 justify-center">
          {[
            { icon: <img src={diaper} className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" />, title: "Millie Moon Small", subtitle: "Tape diapers" },
            { icon: <img src={lotion} className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" />, title: "Mustela baby", subtitle: "liquid soap or lotion" },
            { icon: <img src={towel} className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" />, title: "Baby soft", subtitle: "blankets" },
            { icon: <img src={onesie} className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" />, title: "Clothes", subtitle: "Baby apparel" },
            { icon: <img src={construction} className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" />, title: "Educational", subtitle: "toys/books" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border-[1.5px] border-[#eaf1f8] flex flex-col items-center justify-start text-center rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_10px_30px_rgba(154,176,201,0.04)] hover:shadow-[0_20px_40px_rgba(154,176,201,0.2)] transition-all duration-300 group h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#eaf1f8] to-transparent rounded-bl-full opacity-40 transition-all duration-700 pointer-events-none group-hover:scale-110" />
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#f0f5fa] to-white border border-[#d6e3f0] rounded-[20px] sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 text-[#7ba1c7] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative z-10 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-[#3b414d] mb-2 relative z-10 drop-shadow-sm">{item.title}</h3>
              <p className="text-[#8c94a3] text-sm sm:text-base font-light italic relative z-10">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RSVP Section */}
      <section
        className="py-24 sm:py-32 px-6 max-w-3xl mx-auto text-center relative z-10"
        id="rsvp"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <Heart className="w-10 h-10 text-[#7ba1c7] mx-auto mb-4 fill-[#eaf1f8] drop-shadow-sm" strokeWidth={1.5} />
          </motion.div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#7ba1c7] drop-shadow-sm mb-12">
            RSVP
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border-[1.5px] border-[#eaf1f8] rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(154,176,201,0.08)] p-6 sm:p-14 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#fbfcf8] via-[#ffffff] to-[#fbfcf8] opacity-80" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#eaf1f8] rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#eaf1f8] rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <p className="text-[#3b414d] font-serif text-xl sm:text-2xl mb-8 leading-relaxed drop-shadow-sm">
              Dearest Godparents, Special Guests, and Family,
            </p>
            <div className="space-y-6 text-[#7a8494] leading-loose font-sans font-light text-base sm:text-lg">
              <p>
                Our little one will soon receive his first sacrament. In
                preparation for this intimate and meaningful occasion, we would
                love to know if you'll be joining us as we celebrate this special
                milestone in his life.
              </p>
              <p>
                Kindly confirm your attendance by completing this RSVP form so we
                can reserve a seat for you at the reception.
              </p>
              
              <div className="py-6 border-y border-[#eaf1f8] my-8 text-center text-[#5c8ab8] bg-[#f8fafc]/50 rounded-xl px-4">
                <p className="font-serif italic text-xl mb-3">
                  This serves as invitation for one.
                </p>
                <p className="font-medium tracking-[0.15em] uppercase text-sm">
                  RSVP on May 8, 2026
                </p>
              </div>

              <p className="pb-4">
                We truly appreciate your response and look forward to celebrating
                with you.
              </p>
            </div>

            <motion.a
              href="https://forms.gle/f8xgdAPaczWJ1QxB7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full sm:w-auto sm:inline-flex mx-auto items-center justify-center gap-3 mt-8 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#7ba1c7] to-[#5c8ab8] hover:from-[#6a90b6] hover:to-[#4e7da8] text-white rounded-[20px] sm:rounded-[24px] font-medium tracking-wide transition-all shadow-[0_10px_30px_rgba(123,161,199,0.3)] border border-[#5c8ab8] group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_2s_infinite]" />
              <Heart className="w-5 h-5 fill-white/30 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="relative z-10">Confirm Your Attendance</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-16 text-center text-[#7ba1c7] border-t border-[#eaf1f8] relative z-10"
      >
        <p className="font-serif italic text-2xl text-[#5c8ab8] drop-shadow-sm mb-3">With love, the Ladao Family</p>
        <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-80 decoration-[#eaf1f8]">May 2026</p>
      </motion.footer>

      <AnimatePresence>
        {showGallery && (
          <GalleryScreen onClose={() => setShowGallery(false)} onOpenImage={openImage} />
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={closeImage}
          >
            <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 text-white/80 font-serif tracking-[0.2em] text-sm z-[110]">
              {selectedImageIndex + 1} / {images.length}
            </div>
            
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/20 p-2 sm:p-0 rounded-full sm:rounded-none text-white/70 hover:text-white transition-colors z-[110]"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-10 bg-black/20 p-2 sm:p-0 rounded-full sm:rounded-none text-white/70 hover:text-white transition-colors z-[110]"
            >
              <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-10 bg-black/20 p-2 sm:p-0 rounded-full sm:rounded-none text-white/70 hover:text-white transition-colors z-[110]"
            >
              <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>

            <motion.img
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImageIndex]}
              alt={`Expanded view ${selectedImageIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (!showMain) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMain]);

  return (
    <div className="antialiased text-slate-800 selection:bg-blue-200 selection:text-blue-900 bg-[#f0f4f8] min-h-screen">
      {/* Global Decorative Orbs */}
      <div className="fixed top-[-100px] left-[-100px] w-80 h-80 bg-blue-200 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-sky-100 rounded-full blur-[150px] opacity-70 pointer-events-none z-0"></div>

      {!showMain && <EnvelopeScreen onComplete={() => setShowMain(true)} />}
      <AnimatePresence mode="wait">
        {showMain && <MainSite key="mainsite" />}
      </AnimatePresence>
    </div>
  );
}
