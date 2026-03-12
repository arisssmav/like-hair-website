import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    alt: "Salon interior",
    className: "h-80 w-full rounded-[1.8rem] object-cover md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    alt: "Hair result 1",
    className: "h-80 w-full rounded-[1.8rem] object-cover md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80",
    alt: "Hair result 2",
    className:
      "h-[32rem] w-full rounded-[1.8rem] object-cover md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
    alt: "Hair styling process",
    className: "h-80 w-full rounded-[1.8rem] object-cover md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    alt: "Coloring process",
    className: "h-80 w-full rounded-[1.8rem] object-cover md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
    alt: "Finished healthy hair",
    className: "h-80 w-full rounded-[1.8rem] object-cover md:col-span-1",
  },
];

export default function LikeHairWebsite() {
  const reviews = [
    {
      name: "Vally Petrou",
      text: "Η εμπειρία, οι γνώσεις και η μετριοφροσύνη της Λίτσας, μαζί με την ενσυναίσθηση και την εμπειρία του Νίκου, έκαναν τα κατεστραμμένα μου μαλλιά ακριβώς όπως τα ήθελα. Με προσοχή, αγάπη και σωστές τεχνικές. Είμαι ευγνώμων που τους γνώρισα.",
    },
    {
      name: "ΣΟΦΙΑ ΝΙΚΟΛΑΟΥ",
      text: "Εξαιρετικό κομμωτήριο. Πολύ καλή δουλειά. Είμαι πολύ ευχαριστημένη. Παρότι μένω μακριά, πηγαίνω γιατί το αποτέλεσμα στα μαλλιά μου είναι απίθανο. Επίσης ευγενέστατοι.",
    },
    {
      name: "Melina Christoforidi",
      text: "Το “δικό μου” κομμωτήριο! Μπαίνω μέσα και δίχως να το καταλάβω έχω βγει περιποιημένη και όχι με άδειο πορτοφόλι!",
    },
    {
      name: "Afroditi L.",
      text: "Πολύ καλή εξυπηρέτηση, φιλικό περιβάλλον. Πάντα μένω ικανοποιημένη από το αποτέλεσμα.",
    },
    {
      name: "georgia tsouramani",
      text: "Άψογο περιβάλλον, πολύ φιλική ατμόσφαιρα. Όλα τα παιδιά καταπληκτικοί επαγγελματίες. Συστήνω ανεπιφύλακτα!",
    },
    {
      name: "Άννα Καλογεροπούλου",
      text: "Άριστοι επαγγελματίες και πολύ φιλόξενο περιβάλλον.",
    },
  ];

  const services = [
    {
      title: "Κούρεμα & Styling",
      desc: "Γραμμές που κολακεύουν τα χαρακτηριστικά σας και styling που δείχνει φροντισμένο, φυσικό και κομψό.",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Βαφή & Balayage",
      desc: "Χρώμα με βάθος, λάμψη και σωστή τεχνική, προσαρμοσμένο στο στιλ και την ποιότητα των μαλλιών σας.",
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Θεραπείες Επανόρθωσης",
      desc: "Στοχευμένη φροντίδα για ταλαιπωρημένα μαλλιά, με έμφαση στην υγεία, την απαλότητα και τη σωστή εικόνα.",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4efe9] text-[#1f1a17]">
      <style>{`
        html { scroll-behavior: smooth; }
        .serif { font-family: Georgia, 'Times New Roman', serif; }
        .sans { font-family: Inter, Arial, sans-serif; }
      `}</style>

      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f4efe9]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="serif text-2xl tracking-wide">Like Hair</div>
            <div className="sans text-xs uppercase tracking-[0.25em] text-black/55">
              Κομμωτήριο Γλυφάδα
            </div>
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:opacity-60">
              Σχετικά
            </a>
            <a href="#services" className="transition hover:opacity-60">
              Υπηρεσίες
            </a>
            <a href="#results" className="transition hover:opacity-60">
              Αποτελέσματα
            </a>
            <a href="#reviews" className="transition hover:opacity-60">
              Κριτικές
            </a>
            <a href="#contact" className="transition hover:opacity-60">
              Επικοινωνία
            </a>
          </nav>
        </div>
      </header>

      <motion.section
        className="relative overflow-hidden"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#1b1512]/45" />
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-6 py-20 lg:grid-cols-2 lg:px-10">
          <motion.div className="max-w-3xl text-white" variants={fadeUp}>
            <div className="mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur-sm">
              Πολυετής εμπειρία • Premium φροντίδα • Γλυφάδα
            </div>
            <h1 className="serif text-5xl leading-[0.95] md:text-7xl">
              Μαλλιά που αναδεικνύουν την ομορφιά σας.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              Εξειδικευμένη περιποίηση από τη Λίτσα και τον Νίκο — το κομμωτήριο που
              εμπιστεύονται οι πελάτες της Γλυφάδας εδώ και χρόνια.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#f3e7da] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#1f1a17] transition hover:scale-[1.01] hover:bg-white"
              >
                Κλείστε το ραντεβού σας
              </a>
              <a
                href="#results"
                className="rounded-full border border-white/40 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                Δείτε τα αποτελέσματά μας
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div variants={fadeUp}>
            <div className="mb-3 text-xs uppercase tracking-[0.28em] text-black/45">
              Σχετικά με εμάς
            </div>
            <h2 className="serif text-4xl leading-tight md:text-5xl">
              Ένα κομμωτήριο που συνδυάζει εμπειρία, αισθητική και αληθινή φροντίδα.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/75">
              Στο Like Hair, η κάθε επίσκεψη είναι προσωπική υπόθεση. Η Λίτσα και ο
              Νίκος είναι γνωστοί για τη σωστή τεχνική, τη ζεστή εξυπηρέτηση και την
              ικανότητά τους να καταλαβαίνουν τι πραγματικά ταιριάζει σε κάθε γυναίκα.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/70">
              Από χρώμα και styling μέχρι φροντίδα ταλαιπωρημένων μαλλιών, το ζητούμενο
              δεν είναι απλώς να φύγετε περιποιημένη — αλλά να νιώθετε όμορφα και
              σίγουρα με το αποτέλεσμα.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4" variants={stagger}>
            <motion.img
              variants={fadeUp}
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              alt="Premium salon atmosphere"
              className="h-72 w-full rounded-[2rem] object-cover shadow-xl transition duration-500 hover:scale-[1.03]"
            />
            <motion.img
              variants={fadeUp}
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
              alt="Hair styling in salon"
              className="mt-10 h-72 w-full rounded-[2rem] object-cover shadow-xl transition duration-500 hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="border-y border-black/10 bg-white/40 px-6 py-24 lg:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            variants={fadeUp}
          >
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.28em] text-black/45">
                Υπηρεσίες
              </div>
              <h2 className="serif text-4xl md:text-5xl">
                Ό,τι χρειάζονται τα μαλλιά σας, με σωστή τεχνική.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/65">
              Κάθε υπηρεσία προσαρμόζεται στο στιλ, την ποιότητα των μαλλιών και το
              αποτέλεσμα που θέλετε να πετύχετε.
            </p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-3" variants={stagger}>
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="overflow-hidden rounded-[2rem] bg-[#faf7f2] shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
                <div className="p-7">
                  <h3 className="serif text-2xl">{service.title}</h3>
                  <p className="mt-4 leading-7 text-black/65">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="results"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div
          className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          variants={fadeUp}
        >
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.28em] text-black/45">
              Τα αποτελέσματά μας
            </div>
            <h2 className="serif text-4xl md:text-5xl">
              Η δουλειά μας φαίνεται στο αποτέλεσμα.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/65">
            Κομψά looks, υγιή μαλλιά και αποτέλεσμα που αναδεικνύει το πρόσωπο και το
            στιλ σας.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2"
          variants={stagger}
        >
          {galleryItems.map((item) => (
            <motion.img
              key={item.alt}
              src={item.src}
              alt={item.alt}
              variants={fadeUp}
              className={`${item.className} transition duration-700 hover:scale-[1.02]`}
            />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="reviews"
        className="bg-[#1f1a17] px-6 py-24 text-white lg:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-12 max-w-3xl" variants={fadeUp}>
            <div className="mb-3 text-xs uppercase tracking-[0.28em] text-white/50">
              Κριτικές
            </div>
            <h2 className="serif text-4xl md:text-5xl">Τι λένε οι πελάτες μας</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Η εμπιστοσύνη των πελατών μας είναι η μεγαλύτερη επιβράβευση για τη
              δουλειά μας.
            </p>
          </motion.div>
          <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" variants={stagger}>
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-5 text-sm tracking-[0.18em] text-[#e5c79b]">
                  ★★★★★
                </div>
                <p className="leading-8 text-white/88">“{review.text}”</p>
                <div className="mt-6 text-sm uppercase tracking-[0.18em] text-white/55">
                  {review.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="px-6 py-24 lg:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div
          className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#eadccf] px-8 py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:px-16"
          whileHover={{ y: -4 }}
        >
          <div className="mb-3 text-xs uppercase tracking-[0.28em] text-black/45">
            Like Hair
          </div>
          <h2 className="serif text-4xl md:text-5xl">Ώρα για το επόμενο ραντεβού σας;</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/70">
            Ελάτε να βρούμε μαζί το χρώμα, το κούρεμα ή τη φροντίδα που ταιριάζει
            πραγματικά στα μαλλιά σας.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-[#1f1a17] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
          >
            Κλείστε το ραντεβού σας
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="border-t border-black/10 bg-white/40 px-6 py-24 lg:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr,1.05fr]">
          <motion.div variants={fadeUp}>
            <div className="mb-3 text-xs uppercase tracking-[0.28em] text-black/45">
              Επικοινωνία
            </div>
            <h2 className="serif text-4xl md:text-5xl">
              Επισκεφθείτε το Like Hair στη Γλυφάδα
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-black/75">
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-black/45">
                  Διεύθυνση
                </div>
                <p>
                  Δημ. Μεταξά Άγγελου 15
                  <br />
                  Εμπορικό Κέντρο Vero Peso – 1ος όροφος
                  <br />
                  Γλυφάδα 166 75
                </p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-black/45">
                  Τηλέφωνο
                </div>
                <a href="tel:2108940016" className="transition hover:opacity-60">
                  21 0894 0016
                </a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-black/45">
                  Ώρες
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-base sm:max-w-md">
                  <span>Τρίτη</span>
                  <span>9:00 π.μ.–8:00 μ.μ.</span>
                  <span>Τετάρτη</span>
                  <span>9:00 π.μ.–3:00 μ.μ.</span>
                  <span>Πέμπτη</span>
                  <span>9:00 π.μ.–8:00 μ.μ.</span>
                  <span>Παρασκευή</span>
                  <span>9:00 π.μ.–8:00 μ.μ.</span>
                  <span>Σάββατο</span>
                  <span>9:00 π.μ.–5:00 μ.μ.</span>
                  <span>Κυριακή</span>
                  <span>Κλειστά</span>
                  <span>Δευτέρα</span>
                  <span>Κλειστά</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="h-[28rem] w-full bg-[#f7f2eb] p-4 md:p-5">
              <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-white">
                <div className="border-b border-black/10 px-5 py-4">
                  <div className="text-sm uppercase tracking-[0.18em] text-black/45">
                    Χάρτης
                  </div>
                  <div className="mt-1 serif text-2xl">Like Hair • Γλυφάδα</div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-lg leading-8 text-black/70">
                      Δημ. Μεταξά Άγγελου 15
                      <br />
                      Εμπορικό Κέντρο Vero Peso – 1ος όροφος
                      <br />
                      Γλυφάδα 166 75
                    </p>
                    <p className="mt-5 text-sm leading-7 text-black/55">
                      Αν το embedded map δεν εμφανίζεται σωστά στο περιβάλλον preview,
                      χρησιμοποιήστε το κουμπί παρακάτω για άνοιγμα σε Google Maps.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=%CE%94%CE%B7%CE%BC.%20%CE%9C%CE%B5%CF%84%CE%B1%CE%BE%CE%AC%20%CE%86%CE%B3%CE%B3%CE%B5%CE%BB%CE%BF%CF%85%2015%2C%20%CE%93%CE%BB%CF%85%CF%86%CE%AC%CE%B4%CE%B1%20166%2075"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#1f1a17] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                    >
                      Άνοιγμα στο Google Maps
                    </a>
                    <a
                      href="tel:2108940016"
                      className="rounded-full border border-black/15 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black/5"
                    >
                      Κλήση τώρα
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <footer className="border-t border-black/10 px-6 py-8 text-sm text-black/55 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>© Like Hair Κομμωτήριο Γλυφάδα</div>
          <div>Luxury hair care with natural Greek brand feel.</div>
        </div>
      </footer>
    </div>
  );
}
