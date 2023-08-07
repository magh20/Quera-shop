import './globals.css';

export default function RootLayout({ children } : { children: React.ReactNode }) {

  return (
    <html>
      <body className='flex justify-center items-center'>
        {children}
      </body>
    </html>
  )
}
