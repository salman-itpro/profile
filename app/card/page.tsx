"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Moon, Sun, Download, Mail, Phone, Globe, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function CardPage() {
  const { setTheme, theme } = useTheme();

  const handleDownload = () => {
    // In a real application, this would trigger a download of the business card
    // For now, we'll just show the design
    console.log("Downloading business card...");
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
            Business Card
          </h1>
          <p className="text-muted-foreground text-lg">
            Download my digital business card
          </p>
        </div>

        <div className="flex justify-center mb-8">
          {/* Business Card Preview */}
          <Card className="w-[400px] h-[225px] p-6 bg-gradient-to-br from-primary/5 to-primary/20 backdrop-blur-sm hover:shadow-xl transition-all relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Profile Image */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right">
                <h2 className="text-xl font-bold">Salman Ahmed</h2>
                <p className="text-sm text-muted-foreground">Java Developer</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contact@bhaveshmishra.dev</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">bhaveshmishra.dev</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Islamabad, Pakistan</span>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">QR Code</span>
            </div>
          </Card>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <Button
            onClick={handleDownload}
            className="gap-2 px-8 hover:scale-105 transition-transform"
          >
            <Download className="h-4 w-4" /> Download Business Card
          </Button>
        </div>

        {/* Instructions */}
        <Card className="mt-12 p-6">
          <h2 className="text-xl font-semibold mb-4">How to use</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>1. Click the download button to get the digital business card</li>
            <li>2. Print the card on a standard business card paper (3.5" × 2")</li>
            <li>3. Scan the QR code to view my digital profile</li>
          </ul>
        </Card>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Salman Ahmed. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}