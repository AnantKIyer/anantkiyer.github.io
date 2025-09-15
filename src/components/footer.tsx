"use client"

import * as React from "react"
import Link from "next/link"

const quickLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="minimal-border-t mt-16">
      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-sm font-mono mb-2">ANANT KIYER</div>
            <div className="text-xs font-mono text-muted-foreground">
              Full Stack Developer
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-mono text-muted-foreground mb-4">LINKS</div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono minimal-hover p-1 -m-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-mono text-muted-foreground mb-4">CONTACT</div>
            <div className="space-y-2">
              <a
                href="mailto:anant@example.com"
                className="text-xs font-mono minimal-hover p-1 -m-1 block"
              >
                anant@example.com
              </a>
              <div className="text-xs font-mono text-muted-foreground">
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 minimal-border-t text-center">
          <div className="text-xs font-mono text-muted-foreground">
            &copy; {new Date().getFullYear()} ANANT KIYER. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  )
}