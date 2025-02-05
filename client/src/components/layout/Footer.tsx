import { Link } from "wouter";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">DevOverflow</h3>
            <p className="text-sm text-muted-foreground">
              The open-source Q&A platform built by developers, for developers.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/api">API</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/discord">Discord</Link></li>
              <li><Link href="/twitter">Twitter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Open Source</h3>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevOverflow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
