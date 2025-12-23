'use client';

import React from 'react';
import Section from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function BusinessModel() {
    return (
        <Section id="business" className="bg-slate-900 text-white">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#29acbb] font-bold tracking-widest uppercase mb-2 block">Business Model</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        安定した収益構造
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        グループホーム運営の収益源は、主に「訓練等給付費（国）」と「利用者負担金」の2階建て。<br />
                        極めて貸し倒れリスクが低く、計算できるビジネスモデルです。
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Graph Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700"
                >
                    <h3 className="text-xl font-bold mb-8 text-center text-slate-200">売上構成イメージ</h3>
                    <div className="flex gap-4 h-64 items-end justify-center px-4">

                        {/* Revenue Structure */}
                        <div className="w-full max-w-[300px] flex flex-col items-center gap-2 relative h-full justify-end">
                            <div className="w-full text-center text-white font-bold mb-2">1棟（定員4名）の月商イメージ</div>

                            <motion.div
                                initial={{ height: "0%" }}
                                whileInView={{ height: "70%" }}
                                transition={{ duration: 0.8 }}
                                className="w-full bg-[#29acbb] rounded-t-sm relative flex items-center justify-center text-white border-b border-white/20"
                            >
                                <span className="text-lg font-bold">訓練等給付費</span>
                                <span className="absolute text-xs bottom-2 text-white/80">（国保連より入金）</span>
                            </motion.div>
                            <motion.div
                                initial={{ height: "0%" }}
                                whileInView={{ height: "30%" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full bg-[#65d3e0] rounded-b-sm relative flex items-center justify-center text-white"
                            >
                                <span className="text-lg font-bold">利用者負担</span>
                                <span className="absolute text-xs bottom-2 text-white/80">（家賃・食費等）</span>
                            </motion.div>
                        </div>

                    </div>
                    <p className="text-xs text-slate-500 text-center mt-6">
                        ※ 区分や地域、稼働率により金額は変動します。
                    </p>
                </motion.div>

                {/* Description */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-3 text-white">国保連からの入金で安心</h3>
                        <p className="text-slate-400 leading-relaxed">
                            売上の大半を占める「訓練等給付費」は、国（国民健康保険団体連合会）から支払われます。一般的な商売のような未回収リスクがほとんどなく、金融機関からの評価も高い事業です。
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold mb-3 text-white">ストック型で収益が積み上がる</h3>
                        <p className="text-slate-400 leading-relaxed">
                            障害者グループホームは「生活の場」であるため、一度入居が決まると数年から数十年と長期にわたって利用されます。毎月ゼロから営業する必要がなく、安定した収益が見込めます。
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="bg-slate-800 border-none">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-slate-400">平均入居期間</div>
                                    <div className="text-3xl font-black text-[#29acbb]">5年<span className="text-base text-white ml-1">以上</span></div>
                                </div>
                                <div className="h-10 w-[1px] bg-slate-600"></div>
                                <div>
                                    <div className="text-sm text-slate-400">給付金入金率</div>
                                    <div className="text-3xl font-black text-[#29acbb]">100%</div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
