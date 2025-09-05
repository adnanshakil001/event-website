import React, { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, Clock, MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Youtube, ArrowRight, Users, Mic2, Sparkles, ChevronDown, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT = {
  name: "Data Science Club Summit 2025",
  tagline: "Learn • Build • Network — Turn data into impact",
  start: "2025-10-01T09:00:00+05:30",
  end: "2025-10-01T17:30:00+05:30",
  venueName: "VIT Bhopal University",
  venueAddress: "Kothrikalan, Sehore, Madhya Pradesh 466114",
  mapsQuery: "VIT%20Bhopal%20University",
  registrationLink: "https://forms.gle/replace-with-your-google-form", // or leave blank to use inline form
  contactEmail: "dsc@vitbhopal.ac.in",
  contactPhone: "+91 90000 00000",
  socials: {
    instagram: "https://instagram.com/yourclub",
    linkedin: "https://linkedin.com/company/yourclub",
    twitter: "https://x.com/yourclub",
    youtube: "https://youtube.com/@yourclub"
  }
};

const SPEAKERS = [
  {
    name: "Dr. Ayesha Khan",
    role: "Head of AI, DataNova Labs",
    photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
    bio: "Applied ML leader focused on trustworthy AI and real-world deployments.",
    links: { linkedin: "https://linkedin.com/in/", twitter: "https://x.com/" }
  },
  {
    name: "Rohit Sharma",
    role: "Senior Data Scientist, FinEdge",
    photo: "https://images.unsplash.com/photo-1602480371491-48b46e44b7eb?q=80&w=800&auto=format&fit=crop",
    bio: "Time-series ninja, loves MLOps and forecasting at scale.",
    links: { linkedin: "https://linkedin.com/in/", twitter: "https://x.com/" }
  },
  {
    name: "Meera Iyer",
    role: "Analytics Engineer, CloudFoundry",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    bio: "Bridges data platforms and product teams for delightful insights.",
    links: { linkedin: "https://linkedin.com/in/", twitter: "https://x.com/" }
  }
];

const SESSIONS = [
  { time: "09:00", title: "Check‑in & Breakfast", speaker: "—" },
  { time: "09:45", title: "Opening Keynote: Data to Impact", speaker: "Dr. Ayesha Khan" },
  { time: "10:30", title: "Workshop: From Notebook to API (FastAPI)", speaker: "Rohit Sharma" },
  { time: "12:00", title: "Lunch & Networking", speaker: "—" },
  { time: "13:15", title: "Panel: Career Paths in Data", speaker: "All Speakers" },
  { time: "14:30", title: "Hands‑on: Feature Stores & MLOps", speaker: "Meera Iyer" },
  { time: "16:00", title: "Lightning Demos + Q&A", speaker: "Community" },
  { time: "17:00", title: "Closing & Group Photo", speaker: "Organizers" }
];

function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  return { days, hours, minutes, seconds, over: diff === 0 };
}

function Chip({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm shadow-sm backdrop-blur bg-white/70 border-black/10">
      <Icon className="h-4 w-4" /> {children}
    </span>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-24" aria-label={title}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg text-black/70">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function EventSite() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT.start);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitInline = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = Object.fromEntries(new FormData(form));
    // Minimal client-side validation
    if (!data.name || !data.email) {
      alert("Please fill in your name and email.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-extrabold text-lg" onClick={(e)=>handleSmoothScroll(e, '#home')}>
              <Sparkles className="h-5 w-5" /> DSC @ VIT Bhopal
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {[
                ["About", "#about"],
                ["Speakers", "#speakers"],
                ["Schedule", "#schedule"],
                ["Register", "#register"],
                ["Venue", "#venue"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={(e)=>handleSmoothScroll(e, href)} className="hover:opacity-80">
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#register"
              onClick={(e)=>handleSmoothScroll(e, '#register')}
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md active:scale-[.98]"
            >
              Register Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 h-72 w-[110vw] -translate-x-1/2 bg-gradient-to-r from-sky-300 via-fuchsia-300 to-emerald-300 blur-3xl opacity-30" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Chip icon={Calendar}>{new Date(EVENT.start).toLocaleString()}</Chip>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
                {EVENT.name}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-black/70 max-w-prose">
                {EVENT.tagline}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#register"
                  onClick={(e)=>handleSmoothScroll(e, '#register')}
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md"
                >
                  Register Now <ArrowRight className="h-4 w-4" />
                </a>
                <div className="flex items-center gap-2 text-sm text-black/70">
                  <MapPin className="h-4 w-4" /> {EVENT.venueName}
                </div>
              </div>

              {/* Countdown */}
              <div className="mt-8 grid grid-cols-4 gap-3 max-w-md">
                {[{label: 'Days', value: days},{label: 'Hours', value: hours},{label: 'Minutes', value: minutes},{label: 'Seconds', value: seconds}].map((b) => (
                  <div key={b.label} className="rounded-2xl border border-black/10 bg-white/80 p-4 text-center shadow-sm">
                    <div className="text-3xl font-extrabold tabular-nums">{String(b.value).padStart(2,'0')}</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-black/60">{b.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: .1 }}>
              <div className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-sky-50 p-4">
                    <div className="flex items-center gap-2 text-sky-700"><Mic2 className="h-4 w-4"/> Keynotes</div>
                    <p className="mt-2 font-semibold">Industry leaders on stage</p>
                  </div>
                  <div className="rounded-2xl bg-fuchsia-50 p-4">
                    <div className="flex items-center gap-2 text-fuchsia-700"><Users className="h-4 w-4"/> Workshops</div>
                    <p className="mt-2 font-semibold">Hands‑on guided labs</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <div className="flex items-center gap-2 text-emerald-700"><CheckCircle2 className="h-4 w-4"/> Certificates</div>
                    <p className="mt-2 font-semibold">For active participants</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 p-4">
                    <div className="flex items-center gap-2 text-amber-700"><Calendar className="h-4 w-4"/> Networking</div>
                    <p className="mt-2 font-semibold">Meet peers & mentors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About the Event" subtitle="What you'll learn and why you should attend">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="leading-7 text-black/80">
              The Data Science Club Summit is a one‑day, high‑energy event bringing together students,
              researchers, and industry professionals. Expect practical sessions on MLOps, analytics engineering,
              and production‑grade ML — plus real talk about careers, portfolios, and how to ship value with data.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Hands‑on workshops guided by mentors",
                "Keynotes on the latest tools and practices",
                "Career panel and portfolio reviews",
                "Project showcases and lightning demos",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/70 p-3 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-black/70"><Clock className="h-4 w-4"/> {new Date(EVENT.end).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
            <div className="mt-2 font-semibold">One compact day, maximum value.</div>
            <p className="mt-2 text-sm text-black/70">Bring your laptop for the hands‑on sessions. Basic Python helps, curiosity required.</p>
          </div>
        </div>
      </Section>

      {/* SPEAKERS */}
      <Section id="speakers" title="Speakers & Mentors" subtitle="Learn from builders and practitioners">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS.map((sp) => (
            <motion.div key={sp.name} whileHover={{ y: -4 }} className="group rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={sp.photo} alt={sp.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
              </div>
              <div className="p-5">
                <div className="font-semibold text-lg">{sp.name}</div>
                <div className="text-sm text-black/60">{sp.role}</div>
                <p className="mt-2 text-sm text-black/80">{sp.bio}</p>
                <div className="mt-3 flex items-center gap-3 text-black/60">
                  {sp.links?.linkedin && (
                    <a href={sp.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-black" aria-label={`${sp.name} on LinkedIn`}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {sp.links?.twitter && (
                    <a href={sp.links.twitter} target="_blank" rel="noreferrer" className="hover:text-black" aria-label={`${sp.name} on X`}>
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SCHEDULE */}
      <Section id="schedule" title="Schedule & Agenda" subtitle="Plan your day">
        <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
          <details open className="border-b border-black/5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold">
              Full Day — {new Date(EVENT.start).toLocaleDateString()} <ChevronDown className="h-5 w-5 shrink-0"/>
            </summary>
            <ul className="divide-y divide-black/5">
              {SESSIONS.map((s, idx) => (
                <li key={idx} className="grid grid-cols-[90px,1fr,200px] gap-3 px-5 py-4 text-sm max-md:grid-cols-1 max-md:gap-1">
                  <div className="font-mono tabular-nums text-black/70">{s.time}</div>
                  <div className="font-medium">{s.title}</div>
                  <div className="text-black/60">{s.speaker}</div>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </Section>

      {/* REGISTER */}
      <Section id="register" title="Register / Join Us" subtitle="Seats are limited — secure yours now">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Option A: External link */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-black/70">
              <ExternalLink className="h-4 w-4"/> Quick registration
            </div>
            <p className="mt-2 text-sm">Prefer a simple external form? Use the link below.</p>
            <a
              href={EVENT.registrationLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black text-white px-5 py-3 text-sm font-semibold shadow hover:shadow-md"
            >
              Open Registration Form <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-black/60">Replace the link in QUICK SETTINGS with your Google Form / Typeform / etc.</p>
          </div>

          {/* Option B: Inline form */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-black/70"><Users className="h-4 w-4"/> Inline registration</div>
            {!submitted ? (
              <form ref={formRef} onSubmit={submitInline} className="mt-4 grid grid-cols-1 gap-3">
                <div>
                  <label className="text-sm">Full Name</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 shadow-inner outline-none focus:ring-2 focus:ring-sky-300" placeholder="Your name"/>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 shadow-inner outline-none focus:ring-2 focus:ring-sky-300" placeholder="you@vitbhopal.ac.in"/>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm">Year</label>
                    <select name="year" className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 shadow-inner outline-none focus:ring-2 focus:ring-sky-300">
                      <option>First</option>
                      <option>Second</option>
                      <option>Third</option>
                      <option>Fourth</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm">Track Interest</label>
                    <select name="track" className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 shadow-inner outline-none focus:ring-2 focus:ring-sky-300">
                      <option>ML Basics</option>
                      <option>MLOps</option>
                      <option>Analytics</option>
                      <option>GenAI</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm">Message (optional)</label>
                  <textarea name="message" rows={3} className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 shadow-inner outline-none focus:ring-2 focus:ring-sky-300" placeholder="Tell us what you want to learn"/>
                </div>
                <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-black px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md">
                  Submit Registration <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-black/50">This demo stores locally only. Connect to Google Sheets / Airtable / Firebase for production.</p>
              </form>
            ) : (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                <div className="font-semibold">You're in! 🎉</div>
                <p className="text-sm">We've received your details. Check your inbox for updates.</p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* VENUE / CONTACT */}
      <Section id="venue" title="Venue & Contact" subtitle="How to reach us and stay connected">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-black/70"><MapPin className="h-4 w-4"/> {EVENT.venueName}</div>
            <div className="mt-1 text-sm">{EVENT.venueAddress}</div>
            <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-black/10">
              <iframe
                title="Map"
                src={`https://www.google.com/maps?q=${EVENT.mapsQuery}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-black/70"><Mail className="h-4 w-4"/> {EVENT.contactEmail}</div>
            <div className="mt-1 flex items-center gap-2 text-sm text-black/70"><Phone className="h-4 w-4"/> {EVENT.contactPhone}</div>
            <div className="mt-4">
              <div className="text-sm font-semibold">Follow us</div>
              <div className="mt-2 flex items-center gap-3 text-black/70">
                <a href={EVENT.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-black"><Instagram className="h-5 w-5"/></a>
                <a href={EVENT.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-black"><Linkedin className="h-5 w-5"/></a>
                <a href={EVENT.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="hover:text-black"><Twitter className="h-5 w-5"/></a>
                <a href={EVENT.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-black"><Youtube className="h-5 w-5"/></a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-10 border-t border-black/5 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-black/70">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Data Science Club — VIT Bhopal</div>
            <div className="flex items-center gap-4">
              <a href="#about" onClick={(e)=>handleSmoothScroll(e, '#about')} className="hover:opacity-80">About</a>
              <a href="#speakers" onClick={(e)=>handleSmoothScroll(e, '#speakers')} className="hover:opacity-80">Speakers</a>
              <a href="#schedule" onClick={(e)=>handleSmoothScroll(e, '#schedule')} className="hover:opacity-80">Schedule</a>
              <a href="#register" onClick={(e)=>handleSmoothScroll(e, '#register')} className="hover:opacity-80">Register</a>
              <a href="#venue" onClick={(e)=>handleSmoothScroll(e, '#venue')} className="hover:opacity-80">Venue</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}
