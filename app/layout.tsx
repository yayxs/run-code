import { SandpackCSS } from "./components/SandpackStyles";

export const metadata = {
  title: "Run Code",
  description: "Get started with running code in your browser.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SandpackCSS />
      </head>
      <body>{children}</body>
    </html>
  );
}