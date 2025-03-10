"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop2, Brush, Wrench, Code, Brain, Pencil, Cloud } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ToolsPage() {
  const { setTheme, theme } = useTheme();

  const tools = {
    design: [
      { name: "Figma", description: "Design Tool", icon: Brush },
      { name: "Adobe XD", description: "UI/UX Design", icon: Brush },
    ],
    productivity: [
      { name: "Packet Tracer", description: "Simulation", icon: Laptop2 },
      { name: "Eve-NG", description: "Simulation", icon: Laptop2 },
      { name: "Notion", description: "Note Taking", icon: Pencil },
      { name: "Obsidian", description: "Long-form Writing", icon: Brain },
    ],
    development: [
      { name: "VS Code", description: "Code Editor", icon: Code },
      { name: "Docker", description: "Containerization", icon: Wrench },
      { name: "VMware", description: "Virtulization", icon: Cloud },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b backdrop-blur-sm bg-background/50 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold hover:text-primary transition-colors">Resume</Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">Home</Button>
            </Link>
            <Link href="/tools">
              <Button variant="ghost" size="sm">Tools</Button>
            </Link>
            <Link href="/card">
              <Button variant="ghost" size="sm">Card</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Tools & Software
          </h1>
          <p className="text-muted-foreground text-lg">
            A collection of tools and software I use daily to streamline my workflow
          </p>
        </div>

        <div className="space-y-12">
          {/* Design Tools */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.design.map((tool) => (
                <Card key={tool.name} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Productivity Tools */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              Productivity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.productivity.map((tool) => (
                <Card key={tool.name} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Development Tools */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.development.map((tool) => (
                <Card key={tool.name} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p>These are the tools that help me create and build amazing things.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}