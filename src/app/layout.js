import "./globals.css";

export const metadata = {
  title: "maryann agency name",
  description: "discription of what you offer, a kind of killer copy that sell & converts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
