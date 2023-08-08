
import './globals.css';
import { Providers } from "@/redux/provider"


export default function RootLayout({ children } : { children: React.ReactNode }) {

  return (
    <html>
      <body className='flex justify-center items-center'>
      <Providers >
        {children}
      </Providers>
      </body>
    </html>
  )
}
