"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <nav className="w-full border-b border-border/50 bg-background/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-primary">The Ignis Project</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveModal("technology")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Technology
              </button>
              <button
                onClick={() => setActiveModal("mission")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Mission
              </button>
              <button
                onClick={() => setActiveModal("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button size="sm" onClick={() => setActiveModal("contact")}>
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center px-6 pt-12">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5">
                <span className="text-sm font-semibold text-primary">The Ignis Project</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
                Predict Forest Fires
                <br />
                <span className="text-primary">Before They Spread</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Ignis is a{" "}
                <span className="text-sky-400 font-semibold">wildfire intelligence program</span> that blends high-resolution satellite
                imagery with weather models and historical fire behavior to flag ignition risks{" "}
                <span className="text-orange-400 font-semibold">before flames spread</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="min-w-[180px]" onClick={() => setActiveModal("contact")}>
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px]" onClick={() => setActiveModal("mission")}>
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center gap-12 pt-8">
              <div>
                <div className="text-5xl font-bold text-primary">97%</div>
                <div className="text-sm text-muted-foreground mt-2">Accuracy</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div>
                <div className="text-5xl font-bold text-primary">Nonprofit</div>
                <div className="text-sm text-muted-foreground mt-2">Mission</div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setActiveModal(null)}
        >
          <Card
            className="relative max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {activeModal === "technology" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Technology</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Multi-Layer Perceptron Neural Network</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We've developed a custom machine learning model that analyzes environmental data, weather patterns,
                      and historical fire data to predict forest fires with 97% accuracy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Source</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our model ingests daily satellite passes, ground sensors, and datasets from the{" "}
                      <span className="font-semibold text-primary">Canadian Wildlife Association</span>, giving us a continually improving
                      picture of vegetation stress and fuel load across diverse ecosystems.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How It Works</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our neural network processes multiple data layers including temperature, humidity, wind patterns,
                      vegetation density, satellite-derived thermal anomalies, and historical fire incidents to identify high-risk areas
                      before fires start.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "mission" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Ignis Project is a nonprofit wildfire intelligence layer combining satellite imagery, field sensors, and
                  machine learning so agencies know exactly where to watch and when to act.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Who We Serve</h3>
                    <div className="space-y-3">
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">Environmental Organizations</h4>
                        <p className="text-sm text-muted-foreground">Real-time predictions to protect ecosystems and wildlife habitats.</p>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">Government Agencies</h4>
                        <p className="text-sm text-muted-foreground">Data-driven insights for emergency response and resource allocation.</p>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">Citizens</h4>
                        <p className="text-sm text-muted-foreground">Early warnings to keep communities safe and prepared.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "contact" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get Started</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ready to protect your community? Email the team at <span className="text-primary font-semibold">varun@teyra.app</span>{" "}
                  and we&apos;ll reach out with next steps in less than 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="p-6 border border-border rounded-lg bg-secondary/30">
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <p className="text-sm text-muted-foreground">Email: varun@teyra.app</p>
                    <p className="text-sm text-muted-foreground">Satellite-powered coverage for organizations worldwide</p>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    Include your region, current monitoring tools, and any existing satellite imagery you rely on so we can tailor our response.
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
