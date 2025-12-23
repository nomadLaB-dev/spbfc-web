'use client';

import React from 'react';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function Contact() {
    return (
        <Section id="contact" className="bg-slate-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#29acbb]/5 skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#29acbb] font-bold tracking-widest uppercase mb-2 block">Contact</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
                            まずは資料請求・<br />説明会へご参加ください
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            SPB-FCの加盟条件や収支シミュレーションについて、より詳しく知りたい方はお気軽にお問い合わせください。<br />
                            オンライン説明会も随時開催しております。
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#29acbb]/10 p-3 rounded-full text-[#29acbb]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-bold">お電話でのお問い合わせ</div>
                                    <div className="text-2xl font-black text-slate-900">03-1234-5678</div>
                                    <div className="text-xs text-slate-500">平日 10:00 - 18:00</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#29acbb]/10 p-3 rounded-full text-[#29acbb]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-bold">メールでのお問い合わせ</div>
                                    <div className="text-lg font-bold text-slate-900">info@spb-fc.jp</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="shadow-xl border-slate-200">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl font-bold text-center">お問い合わせフォーム</CardTitle>
                                <CardDescription className="text-center">
                                    以下のフォームに必要事項をご入力ください。
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">姓</label>
                                            <Input id="last-name" placeholder="山田" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">名</label>
                                            <Input id="first-name" placeholder="太郎" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">メールアドレス</label>
                                        <Input id="email" type="email" placeholder="example@email.com" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">電話番号</label>
                                        <Input id="phone" type="tel" placeholder="090-1234-5678" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">お問い合わせ内容</label>
                                        <Textarea id="message" placeholder="資料請求、説明会参加希望など" className="min-h-[100px]" />
                                    </div>

                                    <Button type="submit" className="w-full bg-[#29acbb] hover:bg-[#1f8b97] text-white font-bold h-12 text-lg mt-4">
                                        送信する <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
