import nikhilPhoto from "@/assets/nikhil-kanda.png";

const FounderSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Avatar/Photo Area */}
              <div className="text-center md:text-left">
                <div className="w-32 h-32 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={nikhilPhoto}
                    alt="Nikhil Kanda - Founder of MapleLine Health"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-foreground">Nikhil Kanda</h3>
                  <p className="text-primary text-sm font-medium">(Nix)</p>
                  <p className="text-muted-foreground text-sm mt-1">Founder, MapleLine Health</p>
                </div>
              </div>

              {/* Story */}
              <div className="md:col-span-2 space-y-4">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Story</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Why I Built MapleLine
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm Nikhil (Nix), a Canadian design leader, new father, and founder of MapleLine Health.
                  </p>
                  <p>
                    During my wife's pregnancy, I made <span className="text-foreground font-semibold">seven failed calls</span> trying
                    to reach a clinic when we needed help. That frustration—and fear—is what pushed me to build
                    a better way for clinics to answer patients.
                  </p>
                  <p>
                    I've spent 9+ years designing and shipping digital products, including AI-powered tools,
                    and now I'm focused on fixing the front desk access problem in Canadian healthcare.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    9+ Years in Product Design
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    AI Product Experience
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    Canadian Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;