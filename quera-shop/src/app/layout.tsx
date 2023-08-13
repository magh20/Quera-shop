
import './globals.css';
import { Providers } from "@/redux/provider"
import { Topbar } from '@/components/topBar';


export default function RootLayout({ children } : { children: React.ReactNode }) {

  return (
    <html>
      <body className='flex justify-center flex-col items-center'>
      <Providers >
        <Topbar/>
        {children}
      </Providers>
      </body>
    </html>
  )
}
