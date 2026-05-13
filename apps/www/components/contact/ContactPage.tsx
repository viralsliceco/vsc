import LeadForm from "@/components/lead-form/LeadForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-anton tracking-tight text-white mb-3">
            LET&apos;S <span className="text-primary">TALK</span>
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Tell us a little about your business. If we&apos;re a fit, you&apos;ll book a free
            15-minute strategy call on the next screen.
          </p>
        </div>
        <div className="max-w-3xl mx-auto rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
