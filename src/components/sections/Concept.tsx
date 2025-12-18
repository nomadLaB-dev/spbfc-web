'use client';

import React from 'react';
import Section from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Concept() {
    return (
        <Section id="concept" className="bg-white">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#007AFF] font-bold tracking-widest uppercase mb-2 block">Concept</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">
                        圧倒的な「不足」を解消する
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        現在、日本国内で障害者グループホームの数が圧倒的に足りていません。<br />
                        住まいを探している障害者の方々に「安心できる居場所」を提供することは、社会的に大きな意義のある事業です。
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Current Situation */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="h-full border-slate-200 bg-slate-50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-slate-300" />
                        <CardHeader>
                            <CardTitle className="text-xl text-slate-500 font-bold text-center">現在の課題（社会）</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <X className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                                    <span>障害者のための住まいが足りない</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <X className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                                    <span>親が高齢化し「親亡き後」が不安</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <X className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                                    <span>自立したくても受け入れ先がない</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <X className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                                    <span>空き家が増え続けている</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* SPB-FC Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Card className="h-full border-[#007AFF]/20 bg-white shadow-xl relative overflow-hidden transform md:-translate-y-4">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[#007AFF]" />
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#007AFF] font-black text-center">SPB-FC のソリューション</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="bg-[#007AFF]/10 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-[#007AFF]" />
                                    </div>
                                    <span className="font-bold text-slate-800">障害者へ「安心・安全な住まい」を提供</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-[#007AFF]/10 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-[#007AFF]" />
                                    </div>
                                    <span className="font-bold text-slate-800">空き家を活用し、地域問題を解決</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-[#007AFF]/10 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-[#007AFF]" />
                                    </div>
                                    <span className="font-bold text-slate-800">国からの給付金による安定経営</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-[#007AFF]/10 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-[#007AFF]" />
                                    </div>
                                    <span className="font-bold text-slate-800">社会貢献と収益性の両立</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
