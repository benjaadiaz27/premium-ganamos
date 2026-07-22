import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Ganamos | Casino Online",
  description:
    "Jugá con cargas rápidas, retiros 24 hs y atención personalizada por WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){
            n.callMethod?
            n.callMethod.apply(n,arguments):
            n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
            }(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '2137102760187798');
            fbq('track', 'PageView');
          `}
        </Script>


        {/* Signals Gateway */}
        <Script
          id="signals-gateway"
          strategy="afterInteractive"
        >
          {`
            !function(a,h,e,v,n,t,s){
              if(a.cbq)return;
              n=a.cbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments);
              };
              if(!a._cbq)a._cbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=h.createElement(e);
              t.async=!0;
              t.src=v;
              s=h.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);
            }(
              window,
              document,
              'script',
              'https://sgw.stape.ac/sdk/2471263269676949709/events.js'
            );

            cbq('setHost', 'https://sgw.stape.ac/');
            cbq('init', '2471263269676949709');
            cbq('track', 'PageView');
          `}
        </Script>


        {/* Fallback Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2137102760187798&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>


        {children}

      </body>
    </html>
  );
}

