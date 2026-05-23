import { useEffect, useRef, useState } from 'react';

import luxe1 from '../assets/projects/luxe-1.png';
import luxe2 from '../assets/projects/luxe-2.png';
import stream1 from '../assets/projects/stream-1.png';
import stream2 from '../assets/projects/stream-2.png';
import dash1 from '../assets/projects/dash-1.png';
import dash2 from '../assets/projects/dash-2.png';
import fleet1 from '../assets/projects/fleet-1.jpeg';
import fleet2 from '../assets/projects/fleet-2.jpeg';
import rfid1 from '../assets/projects/rfid-1.jpeg';
import rfid2 from '../assets/projects/rfid-2.jpeg';
import nexcrm1 from '../assets/projects/nexcrm-1.jpeg';
import nexcrm2 from '../assets/projects/nexcrm-2.jpeg';
import bike1 from '../assets/projects/bike-1.png';
import bike2 from '../assets/projects/bike-2.png';

const allImages = [
  luxe1, stream1, dash1, fleet1, rfid1, nexcrm1, bike1,
  luxe2, stream2, dash2, fleet2, rfid2, nexcrm2, bike2
];

const row1Images = [...allImages, ...allImages, ...allImages];
const row2Images = [...allImages.slice().reverse(), ...allImages.slice().reverse(), ...allImages.slice().reverse()];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const isMobile = window.innerWidth < 768;
      const speed = isMobile ? 0.75 : 0.3;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * speed;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
      aria-label="Portfolio showcase marquee"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves RIGHT */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Portfolio preview ${(i % 11) + 1}`}
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0 w-[240px] h-[155px] sm:w-[420px] sm:h-[270px]"
            />
          ))}
        </div>

        {/* Row 2 — moves LEFT */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Portfolio preview ${(i % 10) + 12}`}
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0 w-[240px] h-[155px] sm:w-[420px] sm:h-[270px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
