import "./globals.css";

export const metadata = {
  title: "CitiZen — Waste Marketplace Platform",
  description:
    "CitiZen connects waste-generating SMEs with waste processing industries. Turn waste into economic value in a smooth and organized manner.",
  keywords: "waste marketplace, limbah, UMKM, circular economy, sustainability",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
