'use client';

import React from 'react';
import Section from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Home, ShieldCheck, TrendingUp, HeartHandshake, Coins, Clock } from 'lucide-react';

const benefits = [
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "国からの給付金で安心",
        description: "売上の約7-9割は「国民健康保険団体連合会（国保連）」からの入金です。未回収リスクが極めて低く、安定した資金繰りが可能です。"
    },
    {
        icon: <TrendingUp className="w-10 h-10" />,
        title: "景気に左右されない",
        description: "福祉事業は景気変動の影響を受けにくい安定産業です。不況時でも需要が減ることはなく、長期的に安定した経営が見込めます。"
    },
    {
        icon: <Clock className="w-10 h-10" />,
        title: "ストック型ビジネス",
        description: "一度入居が決まれば、数年〜数十年単位での利用が一般的。毎月の売上が積み上がっていく、典型的なストックビジネスです。"
    },
    {
        icon: <Home className="w-10 h-10" />,
        title: "空き家や戸建を活用",
        description: "駅近である必要はありません。郊外の空き家や中古戸建を活用することで、初期投資と家賃コストを大幅に抑えることができます。"
    },
    {
        icon: <HeartHandshake className="w-10 h-10" />,
        title: "社会貢献性が高い",
        description: "「親亡き後問題」や「地域での自立」など、社会的な課題を解決する事業です。地域社会から感謝され、やりがいを感じられます。"
    },
    {
        icon: <Coins className="w-10 h-10" />,
        title: "高収益も目指せる",
        description: "満室稼働により、高い利益率を実現可能です。多店舗展開もしやすく、事業の柱として大きく育てることができます。"
    }
];

export function Merits() {
    return (
        <Section id="merits" className="bg-slate-50">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#007AFF] font-bold tracking-widest uppercase mb-2 block">Merits</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">
                        SPB-FC加盟のメリット
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        福祉事業の強みである「安定性」と「社会貢献性」。<br />
                        さらにSPB-FCならではのノウハウが、あなたの事業成功を後押しします。
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
                    >
                        <div className="text-[#007AFF] mb-6 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
