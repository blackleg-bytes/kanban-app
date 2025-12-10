import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, BarChart3, Lock } from "lucide-react";
import Logo from "@/components/Logo";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Logo className="text-2xl"/>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Docs
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
            The future of task management
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Organize your work with
            <span className="text-primary"> beautiful boards</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            A modern kanban board that makes collaboration seamless. Drag, drop,
            and manage your projects with your team in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                Get started free <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                View demo <Zap size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Everything you need
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            All the tools to manage your projects effectively and collaborate
            with your team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Drag & Drop</h3>
              <p className="text-muted-foreground text-sm">
                Effortlessly move tasks between columns with smooth, intuitive
                drag-and-drop interactions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">
                Real-Time Collaboration
              </h3>
              <p className="text-muted-foreground text-sm">
                See updates instantly as your team collaborates on tasks and
                projects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Track progress, completion rates, and team workload with
                powerful insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-accent" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure & Private</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-grade security with role-based access control and
                data encryption.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Team Management</h3>
              <p className="text-muted-foreground text-sm">
                Invite members, assign tasks, and manage permissions across your
                boards.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-accent" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast & Responsive</h3>
              <p className="text-muted-foreground text-sm">
                Lightning-fast performance with a responsive design that works
                on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to boost your productivity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join teams around the world using Kanban to manage their projects.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start free today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KB</span>
              </div>
              <span className="font-bold">Kanban</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
