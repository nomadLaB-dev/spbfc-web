'use client';

import React from 'react';
import Section from '@/components/ui/section';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "山本 健一",
        role: "元飲食業オーナー / 運営2年目",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
        content: "コロナ禍で飲食業が厳しくなり、安定した事業を探していました。福祉は全くの未経験でしたが、本部の手厚いサポートのおかげでスムーズに開業できました。今では3棟を運営し、経営も安定しています。"
    },
    {
        name: "伊藤 さゆり",
        role: "元看護師 / 運営1年目",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop",
        content: "病院勤務時代、退院後の行き場のない患者さんを見てきました。「地域で安心して暮らせる場所を作りたい」と思い起業。利用者さんの笑顔が見られる毎日が、本当にやりがいです。"
    },
    {
        name: "高橋 誠",
        role: "不動産オーナー / 運営3年目",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
        content: "所有する空き家の活用方法としてグループホームを選びました。地域貢献にもなり、家賃収入以上の収益が得られています。建物も大切に使ってもらえるので、オーナーとしても満足です。"
    }
];

export function Testimonials() {
    return (
        <Section id="voices" className="bg-slate-50">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#29acbb] font-bold tracking-widest uppercase mb-2 block">Voices</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">
                        オーナー様の声
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        異業種からの参入や、不動産オーナーなど、<br />
                        様々な背景を持つ方々が成功しています。
                    </p>
                </motion.div>
            </div>

            <div className="max-w-5xl mx-auto px-8 md:px-12">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                                <div className="p-1 h-full">
                                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                                        <CardContent className="flex flex-col p-8 h-full">
                                            <Quote className="w-10 h-10 text-[#29acbb]/20 mb-6" />
                                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed italic">
                                                "{item.content}"
                                            </p>
                                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                                                />
                                                <div>
                                                    <div className="font-bold text-slate-900">{item.name}</div>
                                                    <div className="text-xs text-slate-500">{item.role}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 bg-white border-slate-200 hover:bg-slate-50 text-slate-600" />
                    <CarouselNext className="-right-4 bg-white border-slate-200 hover:bg-slate-50 text-slate-600" />
                </Carousel>
            </div>
        </Section>
    );
}
