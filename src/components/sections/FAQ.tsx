'use client';

import React from 'react';
import Section from '@/components/ui/section';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
    {
        question: "福祉事業の経験がなくても開業できますか？",
        answer: "はい、可能です。SPB-FC加盟オーナー様の約8割が福祉未経験からのスタートです。指定申請（開業手続き）のサポートから、スタッフの採用・研修、日々の運営まで本部が全面的にバックアップします。"
    },
    {
        question: "どんな物件がグループホームに向いていますか？",
        answer: "一般的な戸建て住宅（4LDK以上推奨）や、アパート・マンションの1室など様々な形態が可能です。ただし消防法の基準を満たす必要があるため、物件選定の段階から本部がアドバイスいたします。"
    },
    {
        question: "スタッフ（世話人・支援員）の採用は難しいですか？",
        answer: "グループホームの世話人は、特別な資格が不要な業務が多いため、比較的採用しやすい職種です。地域主婦の方やシニア層の雇用も多く、採用ノウハウも提供させていただきます。"
    },
    {
        question: "開業資金はどのくらいかかりますか？",
        answer: "物件の取得費（賃貸可）、消防設備工事費、備品購入費などが主な初期費用です。既存の空き家を活用することで数百万円〜でスタート可能なケースもあります。詳細は説明会にてシミュレーションをご提示します。"
    },
    {
        question: "利用者はどのように集めますか？",
        answer: "地域の相談支援事業所や病院、役所等への営業活動が中心となります。障害者支援区分認定を受けている待機者は非常に多いため、適切な関係構築ができれば早期満室が可能です。"
    }
];

export function FAQ() {
    return (
        <Section id="faq" className="bg-white">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#29acbb] font-bold tracking-widest uppercase mb-2 block">FAQ</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">
                        よくあるご質問
                    </h2>
                </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                            <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-[#29acbb] transition-colors py-6 text-lg">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section>
    );
}
