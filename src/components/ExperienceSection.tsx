import useReveal from "@/hooks/useReveal";

const jobs = [
  { title: "Web Developer Intern", company: "TechCorp Solutions Pvt Ltd", period: "Jun 2024 – Aug 2024 · Chennai", desc: "Developed responsive web interfaces using React.js and integrated REST APIs. Collaborated with the backend team to implement features for an internal ERP dashboard." },
  { title: "SAP Research Intern", company: "ERP Innovation Lab", period: "Jan 2024 – Apr 2024 · Remote", desc: "Worked on applied research for SAP ABAP modules. Contributed to documentation and testing of ERP workflow optimizations." },
  { title: "Full Stack Developer Intern", company: "StartUp Hub", period: "Jul 2023 – Sep 2023 · Chennai", desc: "Built and deployed a full-stack inventory management system using Node.js, Express, and MongoDB. Improved API response time by 30%." },
];

const ExperienceSection = () => {
  const ref = useReveal();
  return (
    <section id="experience" className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24">
      <div className="text-center mb-14">
        <span className="sec-tag">Where I've Worked</span>
        <h2 className="sec-title">Experience</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal max-w-[800px] mx-auto flex flex-col gap-5">
        {jobs.map((job, i) => (
          <div key={i} className="card-dark p-5 md:p-7 flex gap-4 md:gap-6">
            <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" style={{ boxShadow: "0 0 10px hsl(180,100%,42%)" }} />
            <div>
              <h4 className="text-sm md:text-base font-bold mb-1 font-heading">{job.title}</h4>
              <p className="text-xs md:text-sm text-primary mb-1">{job.company}</p>
              <p className="text-xs text-muted-foreground mb-3">{job.period}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-[1.7]">{job.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
