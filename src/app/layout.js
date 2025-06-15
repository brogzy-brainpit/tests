import "./globals.css";

export const metadata = {
  title: "inverstor Aquisition copywriting & coaching for real Estate",
  description: "discription of what you offer, a kind of killer copy that sell & converts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="dark">
      <body>{children}</body>
    </html>
  );
}
