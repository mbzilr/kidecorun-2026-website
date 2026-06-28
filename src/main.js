import "./styles.css";
import confetti from "@hiseb/confetti";

// ============================================================
//  COUNTDOWN CONFIG
//  Target race date & time in WITA (Asia/Makassar, UTC+7).
//  - COUNTDOWN_TARGET_DATE : calendar date (YYYY-MM-DD)
//  - COUNTDOWN_TARGET_TIME  : wall-clock time in WITA (HH:MM)
//  - COUNTDOWN_TZ_OFFSET    : WITA offset from UTC in minutes (420)
//  The countdown is computed against WITA regardless of the
//  viewer's local timezone.
// ============================================================
const COUNTDOWN_TARGET_DATE = "2026-06-29"; // Set Target Date (YYYY - MM -- DD)
const COUNTDOWN_TARGET_TIME = "11:00"; // 12:00 WITA
const COUNTDOWN_TZ_OFFSET = 420; // WITA = UTC+7 → 7 * 60
const COUNTDOWN_TITLE = "Registration Opens in:"
const COUNTDOWN_SUBTITLE =
  "Sudah siap mengamankan tiket Anda?";

const ph = (w, h, text, bg = "0ea5e9", fg = "ffffff") =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(text)}`;

const app = document.getElementById("app");

app.innerHTML = `
  <!-- ===================== HEADER ===================== -->
  <header class="site-header" id="top">
    <div class="container header-inner">
      <a class="brand" href="#top">
        <img src="/images/KidecoGem.png" alt="Kideco Run logo" class="brand-logo" />
        <span class="brand-name">KIDECO<span> RUN 2026</span></span>
      </a>

      <nav class="main-nav" id="mainNav">
        <a href="#about">About</a>
        <a href="#categories">Categories</a>
        <a href="#schedule">Schedule</a>
        <a href="#route">Route</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#faq">FAQ</a>
      </nav>

      <a href="https://sunrego.com/kideco-run-2026" rel="noreferrer noopener" target="_blank" class="btn btn-primary nav-cta">Register Now</a>

      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- ===================== HERO ===================== -->
  <section class="hero">
    <div class="hero-bg">
      <picture>
        <source media="(max-width: 720px)" srcset="/images/assets/HEROTALL.png" />
        <source media="(min-width: 721px)" srcset="/images/assets/HEROWIDE.png" />
        <img src="/images/assets/HEROWIDE.png" alt="Kideco Run 2026" />
      </picture>
    </div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
    <p class="hero-eyebrow pill-shape">
      <span class="ring-container">
        <span class="ringring"></span>
        <span class="circle"></span>
      </span id="notify-ping">
      Registrasi dibuka sampai 5 Juli 2026!
    </p>
      
      <p class="hero-subtitle">
        Bersiaplah untuk pengalaman lari yang tak terlupakan di tahun ketiga KIDECO RUN 2026, diselenggarakan oleh PT Kideco Jaya Agung dalam rangka memperingati HUT ke-44 PT Kideco Jaya Agung.
        <br /><br />
        Tak hanya berlari, peserta juga akan dimanjakan dengan beragam kuliner khas Paser yang tersedia di lokasi.
        <br /><br />
        Daftar Sekarang dan buktikan langkahmu di KIDECO RUN 2026!
        
        BERLARI UNTUK LESTARI.

        <br /><br />
        Di tengah keindahan alam dan cita rasa lokal, KIDECO RUN 2026 menantimu di garis start!

      </p>
      <div class="hero-actions">
        <a a href="https://sunrego.com/kideco-run-2026" rel="noreferrer noopener" target="_blank" class="btn btn-primary btn-lg">Register Now</a>
      </div>

      <div class="hero-stats">
        <div class="stat"><span class="stat-num">5K+</span><span class="stat-label">Runners</span></div>
        <div class="stat"><span class="stat-num">2</span><span class="stat-label">Categories</span></div>
        <div class="stat"><span class="stat-num">10km</span><span class="stat-label">Longest Route</span></div>
      </div>
    </div>
  </section>

  <section class="countdown-section" id="countdown">
    <div class="container countdown-inner">
      <h2 class="countdown-title">${COUNTDOWN_TITLE}</h2>
      <p class="countdown-subtitle">${COUNTDOWN_SUBTITLE}</p>
      <div class="countdown-grid" id="countdownGrid" role="timer" aria-live="polite">
        <div class="countdown-unit">
          <span class="countdown-num" id="cd-days">00</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-unit">
          <span class="countdown-num" id="cd-hours">00</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-unit">
          <span class="countdown-num" id="cd-minutes">00</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-unit">
          <span class="countdown-num" id="cd-seconds">00</span>
          <span class="countdown-label">Seconds</span>
        </div>
      </div>
      <p class="countdown-target-date" id="countdownTargetDate"></p>
    </div>
  </section>

  <!-- ===================== MARQUEE ===================== -->
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span>★ BREAK THE LIMIT</span>
      <span>★ FINISHER MEDAL FOR ALL</span>
      <span>★ PASER, EAST KALIMANTAN</span>
      <span>★ ARE YOU READY?</span>
      <span>★ FINISHER MEDAL FOR ALL</span>
      <span>★ READY TO STRIVE FOR MORE?</span>
      <span>★ DONT STOP, WONT STOP</span>
      <span>★ FINISHER MEDAL FOR ALL</span>
      <span>★ PASER, EAST KALIMANTAN</span>
      <span>★ SEE YOU THERE! </span>
      <span>★ FINISHER MEDAL FOR ALL</span>
      <span>★ READY TO STRIVE FOR MORE?</span>
    </div>
  </div>

  <!-- ===================== ABOUT ===================== -->
  <section class="section" id="about">
    <div class="container about-grid">
      <div class="about-media">
        <img src="/images/PhotoContent/STARTING_GATE.JPG" alt="Runners at Kideco Run" />
        <div class="about-badge">
          <span class="badge-num">3rd</span>
          <span class="badge-text">Annual Edition</span>
        </div>
      </div>
      <div class="about-copy">
        <p class="section-eyebrow">Tentang Event</p>
        <h2 class="section-title">Kideco Run 2026</h2>
        <p>
          Bersiaplah merasakan keseruan KIDECO RUN 2026 yang kembali hadir untuk tahun ketiga sebagai bagian dari perayaan HUT ke-44 PT Kideco Jaya Agung. 
          Selain menikmati pengalaman berlari yang seru, 
          peserta juga dapat mencicipi berbagai kuliner khas Paser yang tersedia di lokasi acara.
        </p>
        <ul class="about-list">
        <li><span>✓</span> Rute pesisir yang indah di Paser</li>
        <li><span>✓</span> Medali finisher dan race kit untuk setiap peserta</li>
        <li><span>✓</span> Hiburan musik live, area kuliner, dan zona keluarga di finish line</li>
        </ul>
        <a href="https://sunrego.com/kideco-run-2026" rel="noreferrer noopener" target="_blank" class="btn btn-primary">Join the Run</a>
      </div>
    </div>
  </section>

  <!-- ===================== CATEGORIES ===================== -->
  <section class="section section-alt" id="categories">
    <div class="container">
      <div class="section-head">
        <p class="section-eyebrow">Race Categories</p>
        <h2 class="section-title">PENDAFTARAN</h2>
        <p class="section-lead">
          Tersedia dua kategori, 5K dan 10K.
        </p>
      </div>

      <div class="cards-grid">
        <article class="card">
          <div class="card-media">
            <img src="${ph(480, 300, "5K", "0ea5e9", "ffffff")}" alt="5K Fun Run" />
            <span class="card-tag">Family Friendly</span>
          </div>
          <div class="card-body">
            <h3>5K - Umum dan Pelajar</h3>
            <p>Cocok untuk keluarga dan pemula.</p>
            <div class="card-meta">
              <span>⏱ ~30 min</span><span>👥 Pelajar 12-18 tahun, Umum, Master 45+</span>
            </div>
            <a href="https://sunrego.com/kideco-run-2026" class="btn btn-outline">Rp. 200.000</a>
          </div>
        </article>

        <article class="card">
          <div class="card-media">
            <img src="${ph(480, 300, "10K", "f59e0b", "ffffff")}" alt="10K Challenge" />
            <span class="card-tag">Most Popular</span>
          </div>
          <div class="card-body">
            <h3>10K - Umum dan Master (45 Tahun)</h3>
            <p>Jarak yang lebih panjang untuk mereka yang ingin tantangan.</p>
            <div class="card-meta">
              <span>⏱ ~60 min</span><span>👥 Umum, Master 45+</span>
            </div>
            <a a href="https://sunrego.com/kideco-run-2026" rel="noreferrer noopener" target="_blank" class="btn btn-outline">Rp. 250.000</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ===================== SCHEDULE ===================== -->
  <section class="section" id="schedule">
    <div class="container schedule-grid">
      <div class="schedule-copy">
        <p class="section-eyebrow">Event Schedule</p>
        <h2 class="section-title">Road-to-Race Timeline</h2>
        <p class="section-lead"l>
          From packet pickup to the finish line celebration. Here's everything
          you need to know about race weekend.
        </p>
        <a href="https://sunrego.com/kideco-run-2026" rel="noreferrer noopener" target="_blank" style="margin-top:1.5rem" class="btn btn-primary">Save your spot</a>
      </div>

      <ol class="timeline">
        <li class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Fri · TBA</span>
            <h4>Race Pack Collection</h4>
            <p>Location to be announced · 10:00 – 20:00</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Sat · TBA</span>
            <h4>Community Warm-up & Expo</h4>
            <p>Start line plaza · 08:00 – 17:00</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-dot active"></div>
          <div class="timeline-content">
            <span class="timeline-date">Sun · Sep 6</span>
            <h4>Race Day</h4>
            <p>Gun start 06:00 · 10K first wave</p>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">Sun · Sep 6</span>
            <h4>Awarding & Festival</h4>
            <p>Finish line stage · 10:00 onwards</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- ===================== ROUTE ===================== -->
  <section class="section section-alt" id="route">
    <div class="container">
      <div class="section-head">
        <p class="section-eyebrow">The Route</p>
        <h2 class="section-title">From the bay to the hills</h2>
        <p class="section-lead">
          A scenic point-to-point course showcasing the best of Paser's
          coastline and city landmarks.
        </p>
      </div>
      <div class="route-map">
        <img src="${ph(1200, 500, "Route Map", "0f172a", "38bdf8")}" alt="Kideco Run Route Map" />
        <div class="route-points">
          <div class="route-point"><span>START</span><p>Arena Promosi Putri Petung</p></div>
          <div class="route-point"><span>KM 3.5</span><p>Checkpoint 1</p></div>
          <div class="route-point"><span>KM 7.5</span><p>Checkpoint 2</p></div>
          <div class="route-point"><span>FINISH</span><p>Arena Promosi Putri Petung</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== REGISTER CTA ===================== -->
  <section class="section register-cta" id="register">
    <div class="container register-inner">
      <div class="register-copy">
        <p class="section-eyebrow light">Registration Open</p>
        <h2 class="section-title light">Ready to run?</h2>
        <p class="section-lead light">
          Daftar sekarang!. Pendaftaran buka jam 12.00 WITA pada tanggal 25 Juni 2026. Setiap registrasi akan mendapatkan race-pack dan
          medali finisher ketika melewati garis finish!
        </p>
        <div class="register-actions">
          <a href="https://sunrego.com/kideco-run-2026" rel="noreferrer noopener" target="_blank" class="btn btn-light btn-lg">Register Now</a>
          <a href="#faq" class="btn btn-ghost-light btn-lg">View FAQ</a>
        </div>
      </div>
      <div class="register-card">
        <img src="${ph(420, 320, "Race Kit", "0ea5e9", "ffffff")}" alt="Kideco Run Race Kit" />
        <div class="register-card-body">
          <h3>RACE KIT</h3>
          <ul>
            <li>Medali Finisher</li>
            <li>BIB Number</li>
            <li>Jersey</li>
            <li>Timing System</li>
            <li>Tote Bag</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== SPONSORS ===================== -->
  <section class="section hidden" id="sponsors">
    <div class="container">
      <div class="section-head">
        <p class="section-eyebrow">Our Partners</p>
        <h2 class="section-title">Powered by</h2>
      </div>
      <div class="sponsors-grid">
        ${Array.from({ length: 6 })
          .map(
            (_, i) => `
          <div class="sponsor">
            <img src="${ph(200, 100, "Sponsor " + (i + 1), "e2e8f0", "0f172a")}" alt="Sponsor ${i + 1}" />
          </div>`,
          )
          .join("")}
      </div>
    </div>
  </section>

  <!-- ===================== FAQ ===================== -->
  <section class="section section-alt" id="faq">
    <div class="container faq-grid">
      <div class="faq-copy">
        <p class="section-eyebrow">FAQ</p>
        <h2 class="section-title">Good to know</h2>
        <p class="section-lead">
          Everything you need before race day. Still have questions? Reach our
          team at <a href="mailto:info@kidecorun.id">info@kidecorun.id</a>.
        </p>
      </div>
      <div class="faq-list">
        <details class="faq-item" open>
          <summary>Bagaimana cara saya mendaftar?</summary>
          <p>Tekan salah satu tombol registrasi dan akan dibawakan ke website registrasi.</p>
          <br />
          <p class="emphasis-font-weight">
          WAJIB DIPERHATIKAN: NAMA DOMAIN ASLI HANYA DI</p>
          <a href="https://sunrego.com/kideco-run-2026">sunrego.com</a>!
        </details>
        <details class="faq-item">
          <summary>Apakah saya bisa memindahtangankan BIB ke orang lain?</summary>
          <p>Tidak, Anda tidak boleh memindahtangankan BIB ke orang lain.</p>
        </details>
        <details class="faq-item">
          <summary>Apakah ada batasan usia?</summary>
          <p>The 5K is open to all ages. The 10K requires participants to be 15+, and the 21K requires 18+.</p>
          <p>Untuk kategori 5K terbuka untuk semua usia. 5K Kategori Pelajar dari usia 12-18 tahun. 10K, peserta harus di atas usia 15 tahun.
        </details>
        <details class="faq-item">
          <summary>What happens if it rains?</summary>
          <p>The event runs rain or shine. We only suspend for severe weather — check your email for updates.</p>
        </details>
        <details class="faq-item hidden">
          <summary>Where does my registration fee go?</summary>
          <p>A portion of every fee supports our charity partners focused on local environment and education.</p>
        </details>
      </div>
    </div>
  </section>

  <!-- ===================== NEWSLETTER ===================== -->
  <section class="newsletter">
    <div class="container newsletter-inner">
      <div>
        <h3>Stay in the loop</h3>
        <p>Get race updates, training tips, and exclusive offers.</p>
      </div>
      <form class="newsletter-form" onsubmit="event.preventDefault();">
        <input type="email" placeholder="you@example.com" required />
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </section>

  <!-- ===================== FOOTER ===================== -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" id="footerLogo" href="#top">
          <img src="${ph(40, 40, "KR", "e90e0e", "ffffff")}" alt="" class="brand-logo" />
          <span class="brand-name light">Kideco<span>Run</span></span>
        </a>
        <p>Arena Promosi Putri Petung, Tanah Grogot, Kabupaten Paser, Kalimantan Timur</p>
        <div class="socials">
          <a href="https://www.instagram.com/kideco.official/" aria-label="Instagram">
          <svg role="img" viewBox="0 0 24 24" stroke="none" fill="white" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
          </svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Event</h4>
        <a href="#about">About</a>
        <a href="#categories">Categories</a>
        <a href="#schedule">Schedule</a>
        <a href="#route">Route</a>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <a href="#faq">FAQ</a>
        <a href="#register">Register</a>
        <a href="#">Contact</a>
        <a href="#">Volunteer</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:info@kidecorun.id">info@kidecorun.id</a>
        <a href="https://wa.me/+6287711828195" rel="noreferrer noopener" target="_blank">+62 877 1182 8195</a>
        <p>Paser, Kalimantan Timur, Indonesia</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© 2026 Kideco Run. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#top" id="backToTop">Back to top ↑</a>
        </div>
      </div>
    </div>
  </footer>
`;

// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("mainNav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }),
);

// Footer logo & back-to-top: smooth scroll to the beginning of the document
const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

document.getElementById("footerLogo")?.addEventListener("click", scrollToTop);
document.getElementById("backToTop")?.addEventListener("click", scrollToTop);

// ============================================================
//  COUNTDOWN LOGIC
// ============================================================
(function initCountdown() {
  // Build the target as a UTC instant from the WITA wall-clock time.
  // WITA = UTC+7, so UTC = WITA - 7h.
  const [hh, mm] = COUNTDOWN_TARGET_TIME.split(":").map(Number);
  const [y, mo, da] = COUNTDOWN_TARGET_DATE.split("-").map(Number);
  const targetUtc = Date.UTC(y, mo - 1, da, hh, mm, 0) - COUNTDOWN_TZ_OFFSET * 60 * 1000;
  const target = targetUtc;

  const elDays = document.getElementById("cd-days");
  const elHours = document.getElementById("cd-hours");
  const elMinutes = document.getElementById("cd-minutes");
  const elSeconds = document.getElementById("cd-seconds");
  const elTargetDate = document.getElementById("countdownTargetDate");

  // Display the human-readable target date (always shown in WITA)
  if (elTargetDate) {
    const d = new Date(targetUtc);
    const weekdays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember",
    ];
    elTargetDate.textContent =
      weekdays[d.getUTCDay()] +
      ", " +
      da +
      " " +
      months[d.getUTCMonth()] +
      " " +
      y +
      " · " +
      "12.00" +
      " WITA";
  }

  const pad = (n) => String(n).padStart(2, "0");

  let fired = false;

  function fireConfetti() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const corners = [
      { x: 0, y: 0 }, // top-left
      { x: w, y: 0 }, // top-right
      { x: 0, y: h }, // bottom-left
      { x: w, y: h }, // bottom-right
    ];
    corners.forEach((pos, i) => {
      setTimeout(() => {
        confetti({
          position: pos,
          count: 80,
          size: 1.2,
          velocity: 60,
          fade: false,
        });
      }, i * 150);
    });
  }

  function tick() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      elDays.textContent = "00";
      elHours.textContent = "00";
      elMinutes.textContent = "00";
      elSeconds.textContent = "00";
      if (!fired) {
        fired = true;
        fireConfetti();
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
})();
