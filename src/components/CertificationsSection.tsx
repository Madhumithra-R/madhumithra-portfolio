import useReveal from "@/hooks/useReveal";

const certs = [
  { icon: "🏆", title: "SAP Certified Associate – ABAP", org: "SAP", date: "Issued: 2024" },
  { icon: "☁️", title: "AWS Cloud Practitioner", org: "Amazon Web Services", date: "Issued: 2023" },
  { icon: "⚛️", title: "React Developer Certification", org: "Meta / Coursera", date: "Issued: 2023" },
  { icon: "🐍", title: "Python for Data Science", org: "IBM / edX", date: "Issued: 2022" },
];

const CertificationsSection = () => {
  const ref = useReveal();
  return (
    <section id="certifications" className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24">
      <div className="text-center mb-14">
        <span className="sec-tag">Credentials</span>
        <h2 className="sec-title">Certifications</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
        {certs.map((c) => (
          <div key={c.title} className="card-dark p-5 md:p-6 flex flex-col gap-2.5">
            <span className="text-3xl">{c.icon}</span>
            <h4 className="text-sm font-semibold font-heading">{c.title}</h4>
            <span className="text-xs text-primary">{c.org}</span>
            <small className="text-xs text-muted-foreground">{c.date}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
