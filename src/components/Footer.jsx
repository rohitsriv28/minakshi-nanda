export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
      <span className="font-serif text-[1rem] font-light text-[rgba(245,240,232,0.7)] tracking-[0.05em]">
        Minakshi Nanda
      </span>
      <p className="text-[0.78rem] text-[rgba(245,240,232,0.35)] tracking-[0.04em] m-0">
        © {currentYear} · Designed with intent
      </p>
      <p className="text-[0.78rem] text-[rgba(245,240,232,0.35)] tracking-[0.04em] m-0">
        Birgunj, Nepal
      </p>
    </footer>
  );
}
