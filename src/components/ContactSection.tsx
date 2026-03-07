import useReveal from "@/hooks/useReveal";

const ContactSection = () => {
  const ref = useReveal();
  return (
    <section id="contact" className="relative z-[1] min-h-screen px-6 md:px-20 py-24 text-center">
      <div className="text-center mb-16">
        <span className="sec-tag">Let's Talk</span>
        <h2 className="sec-title">Contact</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal max-w-[560px] mx-auto">
        <p className="text-base text-muted-foreground leading-[1.8] mb-10">
          I'm open to new opportunities, research collaborations, and interesting conversations. Feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="mailto:madhumithra@email.com" className="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            madhumithra@email.com
          </a>
          <a href="#" className="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="#" className="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
        <form className="flex flex-col gap-3.5 text-left" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none transition-colors focus:border-primary placeholder:text-muted-foreground font-body" />
          <input type="email" placeholder="Your Email" className="bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none transition-colors focus:border-primary placeholder:text-muted-foreground font-body" />
          <textarea placeholder="Your Message" rows={5} className="bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm outline-none transition-colors focus:border-primary placeholder:text-muted-foreground font-body resize-none" />
          <button type="submit" className="btn-cyan justify-center mt-2">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
