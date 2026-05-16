// @ts-nocheck
"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const BURGUNDY = "#6B1F2A";
const BURGUNDY_DARK = "#451418";
const GOLD = "#B8945E";
const GOLD_DEEP = "#8B6E40";
const IVORY = "#F5EDDA";
const IVORY_2 = "#EBE2CC";
const INK = "#1A1417";

const GALLERY = content.gallery || [content.hero.image];

export default function Page() {
  return (
    <main className={body.className} style={{ background: IVORY, color: INK }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lineGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .fade-up { animation: fadeUp 1100ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .line-grow { animation: lineGrow 1400ms cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: left; }
      `}</style>

      <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-6 lg:px-12 lg:py-7 flex items-center justify-between">
        <div className={display.className} style={{ fontSize: '30px', color: BURGUNDY_DARK, fontWeight: 600, lineHeight: 1, fontStyle: 'italic', letterSpacing: '0.02em' }}>
          Kalinka
        </div>
        <div className="flex items-center gap-6 text-[13px]">
          <a href="#menu" className="hidden md:inline tracking-wide" style={{ color: BURGUNDY_DARK, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '11.5px', fontWeight: 500 }}>Menu</a>
          <a href="#visit" className="hidden md:inline tracking-wide" style={{ color: BURGUNDY_DARK, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '11.5px', fontWeight: 500 }}>Visit</a>
          <a href={content.hero.ctaLink} className="px-4 py-2 text-[11.5px] font-medium tracking-widest uppercase" style={{ background: BURGUNDY, color: IVORY, borderRadius: '2px' }}>
            Reserve
          </a>
        </div>
      </nav>

      <section className="relative min-h-[96vh] flex items-center px-6 lg:px-12 overflow-hidden" style={{ background: BURGUNDY_DARK }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url("${GALLERY[0]}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.45 }}></div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${BURGUNDY_DARK}E5 0%, ${BURGUNDY_DARK}A0 60%, ${BURGUNDY_DARK}60 100%)` }}></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 pb-12">
          <div className="text-[11px] font-medium tracking-[0.35em] uppercase mb-7 fade-up" style={{ color: GOLD }}>
            ★ Est. Glendale · {content.rating} · {content.reviewCount.toLocaleString()} reviews
          </div>
          <h1 className={display.className + " fade-up"} style={{ fontSize: 'clamp(56px, 11vw, 160px)', lineHeight: 0.95, color: IVORY, fontWeight: 500, letterSpacing: '-0.015em' }}>
            <span style={{ display: 'block' }}>Russia on</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: GOLD, fontWeight: 400 }}>Victory Boulevard.</span>
          </h1>
          <div className="h-px w-24 my-8 line-grow" style={{ background: GOLD }}></div>
          <p className="text-[18px] lg:text-[21px] leading-relaxed max-w-xl fade-up" style={{ color: IVORY + 'CC', fontWeight: 400 }}>
            {content.hero.subheading}
          </p>
          <div className="flex flex-wrap gap-3 mt-12 fade-up">
            <a href={content.hero.ctaLink} className="px-9 py-4 font-medium text-[13px] uppercase tracking-[0.2em] transition-transform hover:scale-105" style={{ background: GOLD, color: BURGUNDY_DARK, borderRadius: '2px' }}>
              {content.hero.ctaText}
            </a>
            <a href="#menu" className="px-9 py-4 font-medium text-[13px] uppercase tracking-[0.2em] transition-colors" style={{ background: 'transparent', color: IVORY, border: `1px solid ${IVORY}50`, borderRadius: '2px' }}>
              View menu
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 lg:px-12 py-24 lg:py-32 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-[11px] font-medium tracking-[0.35em] uppercase mb-5" style={{ color: GOLD_DEEP }}>About</div>
          <h2 className={display.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, fontWeight: 500, color: BURGUNDY_DARK, marginBottom: '36px', fontStyle: 'italic' }}>
            {content.about.heading}
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {content.about.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] lg:text-[19px] leading-relaxed" style={{ color: INK + 'C0' }}>{p}</p>
            ))}
          </div>
          <div className="h-px w-24 mx-auto mt-12" style={{ background: GOLD }}></div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {GALLERY.map((p, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden">
              <div className="w-full h-full transition-transform hover:scale-105 duration-1000" style={{ backgroundImage: `url("${p}")`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'sepia(0.05)' }}></div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="px-6 lg:px-12 py-24 lg:py-32" style={{ background: BURGUNDY_DARK, color: IVORY }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[11px] font-medium tracking-[0.35em] uppercase mb-5" style={{ color: GOLD }}>The menu</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 1, fontWeight: 500, fontStyle: 'italic' }}>
              from the kitchen.
            </h2>
            <div className="h-px w-24 mx-auto mt-8" style={{ background: GOLD }}></div>
          </div>
          <div className="space-y-px" style={{ background: GOLD + '30' }}>
            {content.services.map((s, i) => (
              <div key={i} className="px-7 py-7 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6" style={{ background: BURGUNDY_DARK }}>
                <div className={display.className + " md:w-12 shrink-0"} style={{ fontSize: '24px', fontStyle: 'italic', color: GOLD, fontWeight: 500 }}>{(i + 1).toString().padStart(2, '0')}</div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className={display.className} style={{ fontSize: '26px', fontWeight: 600, color: IVORY, letterSpacing: '0.005em' }}>{s.title}</h3>
                    {s.price && <span className={display.className} style={{ fontSize: '24px', fontStyle: 'italic', color: GOLD, whiteSpace: 'nowrap', fontWeight: 500 }}>{s.price}</span>}
                  </div>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: IVORY + '90' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 lg:py-32 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] font-medium tracking-[0.35em] uppercase mb-5" style={{ color: GOLD_DEEP }}>What guests say</div>
          <h2 className={display.className} style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.05, fontWeight: 500, color: BURGUNDY_DARK, fontStyle: 'italic' }}>
            {content.rating} ★ · {content.reviewCount.toLocaleString()} guests.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: INK + '15' }}>
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8" style={{ background: IVORY }}>
              <div className="text-[18px] tracking-widest mb-4" style={{ color: GOLD_DEEP }}>{'★'.repeat(r.rating)}</div>
              <p className={display.className} style={{ fontSize: '18.5px', lineHeight: 1.5, color: INK, fontStyle: 'italic', marginBottom: '20px', fontWeight: 400 }}>&ldquo;{r.text}&rdquo;</p>
              <div className="text-[11px] tracking-[0.25em] uppercase font-semibold" style={{ color: BURGUNDY }}>— {r.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="px-6 lg:px-12 py-24 lg:py-32" style={{ background: IVORY_2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <div className="text-[11px] font-medium tracking-[0.35em] uppercase mb-5" style={{ color: GOLD_DEEP }}>Visit</div>
            <h2 className={display.className} style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', lineHeight: 1, fontWeight: 500, color: BURGUNDY_DARK, marginBottom: '20px', fontStyle: 'italic' }}>
              Victory Boulevard.
            </h2>
            <div className="mb-7 text-[16px]" style={{ color: INK }}>
              <div className="font-medium mb-2">{content.contact.address}</div>
              <a href={content.hero.ctaLink} className={display.className + " hover:underline"} style={{ fontSize: '30px', color: BURGUNDY, fontStyle: 'italic', display: 'inline-block', marginTop: '6px', fontWeight: 500 }}>{content.contact.phone}</a>
            </div>
            <div style={{ borderTop: `1px solid ${INK}15`, paddingTop: '20px' }}>
              <table className="w-full">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, h]) => (
                    <tr key={day} className="border-b" style={{ borderColor: INK + '10' }}>
                      <td className={display.className + " py-3 text-[16px]"} style={{ fontWeight: 600, color: INK }}>{day}</td>
                      <td className="py-3 text-[14px] text-right tabular-nums" style={{ color: INK + '90' }}>{String(h)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="aspect-square lg:aspect-auto overflow-hidden" style={{ border: `1px solid ${INK}15` }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(content.contact.mapEmbedQuery)}`} className="w-full h-full block border-0" loading="lazy" title="Location"></iframe>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pt-24 pb-20">
        <div className="max-w-5xl mx-auto p-10 lg:p-16 text-center" style={{ background: BURGUNDY_DARK, color: IVORY }}>
          <div className="text-[11px] font-medium tracking-[0.35em] uppercase mb-5" style={{ color: GOLD }}>Завтра</div>
          <h2 className={display.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, fontWeight: 500, marginBottom: '32px', fontStyle: 'italic' }}>
            The samovar is on. Come hungry.
          </h2>
          <a href={content.hero.ctaLink} className="inline-block px-10 py-4 text-[13px] font-medium uppercase tracking-[0.2em] transition-transform hover:scale-105" style={{ background: GOLD, color: BURGUNDY_DARK, borderRadius: '2px' }}>
            Call {content.contact.phone}
          </a>
        </div>
      </section>

      <footer className="px-6 lg:px-12 py-12 border-t" style={{ borderColor: INK + '14' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={display.className} style={{ fontSize: '24px', fontWeight: 600, fontStyle: 'italic', color: BURGUNDY_DARK }}>Kalinka</div>
          <div className="text-[11.5px] tracking-widest uppercase" style={{ color: INK + '70' }}>© {new Date().getFullYear()} · {content.contact.address} · {content.rating}★ {content.reviewCount.toLocaleString()} reviews</div>
        </div>
      </footer>
    </main>
  );
}
