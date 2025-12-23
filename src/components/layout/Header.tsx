'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { label: 'コンセプト', href: '#concept' },
    { label: 'メリット', href: '#merits' },
    { label: 'ビジネスモデル', href: '#business' },
    { label: 'オーナーの声', href: '#voices' },
    { label: 'FAQ', href: '#faq' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Using a text fallback or local image if available */}
                    <div className="flex items-center">
                        <span className={cn("text-2xl font-black tracking-tighter", isScrolled ? "text-[#29acbb]" : "text-white")}>
                            SPB-FC
                        </span>
                        <span className={cn("ml-2 text-sm font-bold", isScrolled ? "text-slate-800" : "text-white/90")}>
                            Franchise
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-[#29acbb]",
                                isScrolled ? "text-slate-700" : "text-white/90"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button
                        className="bg-[#29acbb] hover:bg-[#1f8b97] text-white font-bold rounded-full px-6"
                        asChild
                    >
                        <Link href="#contact">
                            資料請求・お問い合わせ
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className={isScrolled ? "text-slate-800" : "text-white"}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-6 mt-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-lg font-medium text-slate-800 hover:text-[#29acbb] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button
                                className="bg-[#29acbb] hover:bg-[#1f8b97] text-white font-bold w-full mt-4"
                                asChild
                                onClick={() => setIsOpen(false)}
                            >
                                <Link href="#contact">
                                    資料請求・お問い合わせ
                                </Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
