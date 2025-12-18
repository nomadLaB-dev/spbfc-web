'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 z-10" />
                {/* Placeholder for high-quality office/cityscape image */}
                <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"
                    alt="Comfortable Home / Care"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 md:px-6 text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="bg-[#007AFF] text-white px-3 py-1 text-sm font-bold rounded-sm uppercase tracking-wider">
                            Franchise
                        </span>
                        <span className="text-slate-300 font-medium tracking-wide">
                            SPB-FC
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                        社会貢献と安定収益を<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
                            両立するビジネス。
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
                        障害者グループホーム運営で、
                        <br />
                        地域社会に「必要とされる」喜びと、
                        <br />
                        景気に左右されない「安定した基盤」を。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="bg-[#007AFF] hover:bg-[#0062CC] text-white text-lg font-bold px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            資料請求・お問い合わせ
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white border-white/30 hover:bg-white/10 hover:text-white text-lg px-10 py-6 h-auto rounded-full backdrop-blur-sm"
                        >
                            ビジネスモデルを知る
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-[#007AFF]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#007AFF] to-transparent" />
            </motion.div>
        </div>
    );
}
