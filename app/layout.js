// --- default -----------------------


// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Plugin",
//   // description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

























import localFont from "next/font/local";
import "./globals.css";







export const metadata = {
  title: "Plugin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" href="/favicon.ico" />
       <title>Plugin</title>
       </head>
      <body className="bg-gray-200">
    
        <div className="content ">{children}</div>

      </body>
    </html>
  );
}


