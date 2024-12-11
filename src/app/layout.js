import localFont from 'next/font/local';
// import "./globals.css";
import "../styles/main.scss";
import "../styles/res.scss";
import SmoothScrolling from "@/components/SmoothScrolling";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy-Regular.ttf', 
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy-Medium.ttf',
      weight: '500', 
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy-SemiBold.ttf',
      weight: '600', 
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ]
});

export const metadata = {
  title: "ChillDays - Say Goodbye to Endless Searching",
  description:
    "Discover ChillDays: Your App for personalized restaurant and entertainment recommendations. Every place you visit with ChillDays will become an instant favorite. Ideal for locals and tourists alike.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gilroy.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
