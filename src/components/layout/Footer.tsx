import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                SPB-FC
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400">
                            社会貢献と安定収益を両立する<br />
                            障害者グループホームフランチャイズ
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">サイトマップ</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#concept" className="hover:text-white transition-colors">コンセプト</Link></li>
                            <li><Link href="#merits" className="hover:text-white transition-colors">メリット</Link></li>
                            <li><Link href="#business" className="hover:text-white transition-colors">ビジネスモデル</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">お問い合わせ</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#faq" className="hover:text-white transition-colors">よくある質問</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">資料請求</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">説明会のお申し込み</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">運営会社</h3>
                        <p className="text-sm text-slate-400 mb-2">
                            SPB-FC 本部<br />
                            （株式会社SPB）
                        </p>
                        <p className="text-xs text-slate-500">
                            ※ 各事業所は独立採算で運営されています。
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} SPB-FC. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">プライバシーポリシー</Link>
                        <Link href="#" className="hover:text-white transition-colors">利用規約</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
