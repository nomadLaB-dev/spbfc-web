'use client';

import React from 'react';
import Section from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Laptop, Database, UserCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function CoreSystem() {
    return (
        <Section id="system" className="bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-[#007AFF]/10 p-2 rounded-lg">
                            <Laptop className="w-6 h-6 text-[#007AFF]" />
                        </div>
                        <span className="text-[#007AFF] font-bold tracking-widest uppercase">Core System</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
                        運営コアシステム<br />
                        <span className="text-[#007AFF]">「ユルケア」</span>
                    </h2>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        独自のノウハウを蓄積して開発したグループホーム運営専用システムです。<br />
                        日々の記録から請求業務までをこのシステム一つで完結。複雑な事務作業から解放されます。
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="bg-[#007AFF] w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <span className="font-bold">1</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">日々の情報入力が、そのまま請求へ</h3>
                                <p className="text-slate-600">
                                    日報やバイタル記録などを入力するだけで、毎月の国保連請求データが自動的に生成されます。月末の煩雑な集計作業は不要です。
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="bg-[#007AFF] w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <span className="font-bold">2</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">未経験者でもスムーズな運営</h3>
                                <p className="text-slate-600">
                                    直感的な操作画面で、PC操作に不慣れなスタッフでも迷わず使えます。記録漏れの防止アラートなど、現場目線の機能が満載です。
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative background shape */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10" />

                    <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#007AFF] to-blue-400" />
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#007AFF] text-sm font-bold mb-2">
                                    ALL IN ONE
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800">Yuru Care System</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-2">
                                    <Database className="w-8 h-8 text-[#007AFF]" />
                                    <span className="font-bold text-slate-700 text-sm">利用者台帳</span>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-2">
                                    <UserCheck className="w-8 h-8 text-[#007AFF]" />
                                    <span className="font-bold text-slate-700 text-sm">スタッフ管理</span>
                                </div>
                                <div className="bg-[#007AFF] p-4 rounded-xl border border-blue-500 flex flex-col items-center text-center gap-2 col-span-2 shadow-lg transform hover:scale-[1.02] transition-transform">
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                    <span className="font-bold text-white">国保連・利用者請求データ<br />自動作成</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                <p className="text-sm text-slate-500">
                                    運営の「面倒」を「簡単」に変える、<br />
                                    現場から生まれたシステムです。
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Floating badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -right-6 md:right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px]"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-slate-800 text-sm">ミス削減</span>
                        </div>
                        <p className="text-xs text-slate-500">
                            返戻（請求ミス）のリスクを大幅に減らします
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </Section>
    );
}
