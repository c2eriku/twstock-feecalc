import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "台股交易金額試算機",
  description: "快速試算台股交易金額，預估手續費與稅金試算輕鬆掌握投資成本",
  other: {
    keywords: "台股, 交易金額, 試算機, 投資, 股票",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
