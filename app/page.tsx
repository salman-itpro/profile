"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Github, Linkedin, Mail, MapPin, MessageSquare, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { setTheme, theme } = useTheme();

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
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-4 relative group">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="rounded-full w-full h-full object-cover ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40"
            />
            <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Bhavesh Mishra</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to work
            </span>
          </div>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Java Developer
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Mumbai, Maharashtra
            </span>
            <Button variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="h-4 w-4" /> Github
            </Button>
          </div>
        </div>

        {/* About Section */}
        <Card className="mb-8 p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Bhavesh, a dedicated Java developer with a passion for crafting efficient and user-friendly applications. With experience in web development and a strong foundation in IT, I specialize in building scalable solutions using Java, Spring Boot, and modern development practices. Let's connect and build something amazing together!
          </p>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8 p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            Experience
          </h2>
          <div className="space-y-6">
            <div className="relative pl-4 border-l border-primary/20">
              <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4.5px] top-2" />
              <h3 className="font-medium">Web Development Intern</h3>
              <p className="text-muted-foreground text-sm">Prometheus Solutions</p>
              <p className="text-muted-foreground text-sm mb-2">May 2023 - Jul 2023</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>Assisted in .NET web application development using C#, ASP.NET, and SQL Server.</li>
                <li>Contributed to debugging, code reviews, and feature implementation.</li>
                <li>Conducted manual and automated testing to identify and resolve defects.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Education Section */}
        <Card className="mb-8 p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            Education
          </h2>
          <div className="space-y-6">
            <div className="relative pl-4 border-l border-primary/20">
              <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4.5px] top-2" />
              <h3 className="font-medium">BS in Information Technology (Hons)</h3>
              <p className="text-muted-foreground text-sm">Somaiya Vidyavihar University - Mumbai, Maharashtra</p>
              <p className="text-muted-foreground text-sm mb-2">Grade - 8.3 CGPA</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>Developed a full-stack web application using Java, Spring Boot, and React.</li>
                <li>Collaborated with a team of 4 to design and implement a RESTful API.</li>
                <li>Conducted manual and automated testing to identify and resolve defects.</li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="relative pl-4 border-l border-primary/20">
              <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4.5px] top-2" />
              <h3 className="font-medium">HSC in Computer Science</h3>
              <p className="text-muted-foreground text-sm">Prit Academy College - Mumbai, Maharashtra</p>
              <p className="text-muted-foreground text-sm">Grade - 73.50%</p>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8 p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            Skills
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3 text-sm text-muted-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Kotlin", "Python", "SQL", "JavaScript"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-sm text-muted-foreground">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Astro", "Bootstrap", "Tailwind CSS"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-sm text-muted-foreground">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "Spring MVC", "Hibernate", "JPA"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-sm text-muted-foreground">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "MySQL", "PostgreSQL", "Redis", "MongoDB"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-sm text-muted-foreground">Others</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "Google Cloud", "Docker", "Fedora"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Download Resume Button */}
        <div className="text-center">
          <Button className="gap-2 px-8 hover:scale-105 transition-transform">
            <Download className="h-4 w-4" /> Download Resume
          </Button>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 Bhavesh Mishra. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Mail className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
              <MessageSquare className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
              <Github className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}