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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments)
              };
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
          `}
        </Script>

        {/* Signals Gateway */}
        <Script id="signals-gateway" strategy="afterInteractive">
          {`
            function assign(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];if(s)for(var k in s)if(Object.prototype.hasOwnProperty.call(s,k))t[k]=s[k]}return t;}

            !(function(f,b,e,vv,n,nn,tt,ss){
              if(!f.cbq){
                nn=f.cbq=function(){
                  nn.initialized
                    ? nn.apply(f.cbq,arguments)
                    : nn.queue.push(arguments);
                };
                if(!f._cbq)f._cbq=nn;
                nn.push=nn;
                nn.loaded=!0;
                nn.version='2.0';
                nn.queue=[];
                tt=b.createElement(e);
                tt.async=!0;
                tt.src=vv;
                ss=b.getElementsByTagName(e)[0];
                ss.parentNode.insertBefore(tt,ss);
              }

              if(f.xbq)return;
              if(f.fbq)f.xbq=f.fbq;

              n=f.fbq=function(){
                var args=Array.prototype.slice.call(arguments);
                var m=args[0];
                var isT=m==='track'||m==='trackCustom';
                var isS=m==='trackSingle'||m==='trackSingleCustom';
                var mId=args[isT?1:2]+"."+Date.now()+Math.random().toString(36);

                if(isT&&args.length<4)
                  arguments=args.concat((args.length<3?[{}, {eventID:mId}]:[{eventID:mId}]));
                else if(isS&&args.length<5)
                  arguments=args.concat((args.length<4?[{}, {eventID:mId}]:[{eventID:mId}]));

                if(isT&&(!arguments[3]||!arguments[3].eventID))
                  arguments[3]=assign({},arguments[3]||{},{eventID:mId});

                if(isS&&(!arguments[4]||!arguments[4].eventID))
                  arguments[4]=assign({},arguments[4]||{},{eventID:mId});

                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments);

                if(typeof m==='string'&&m.indexOf('track')===0){
                  if(isS){
                    for(
                      var newArgs=[arguments[0]==='trackSingle'?'track':'trackCustom'],i=2;
                      i<arguments.length;
                      i++
                    ){
                      newArgs.push(arguments[i]);
                    }
                    arguments=newArgs;
                  }

                  if(arguments[1]){
                    (f.cbq.initialized
                      ? f.cbq.apply(f.cbq,arguments)
                      : f.cbq.queue.push(arguments));
                  }
                }
              };

              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=(f.xbq)?f.xbq.queue:[];
            })(
              window,
              document,
              'script',
              'https://sgw.stape.ac/sdk/2471263269676949709/events.js'
            );

            cbq('setHost','https://sgw.stape.ac/');
            cbq('init','2471263269676949709');
            cbq('set','integrationMethod','forkFromSnippetCode@1.0');

            fbq('track','PageView');
          `}
        </Script>

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

