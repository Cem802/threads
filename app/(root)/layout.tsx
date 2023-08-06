import { Clerk } from '@clerk/nextjs/server'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import Topbar from '@/components/shared/TopBar'
import LeftSidebar from '@/components/shared/LeftSideBar'
import RightSidebar from '@/components/shared/RightSideBar'
import Bottombar from '@/components/shared/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          
          <main>
            <LeftSidebar />

              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>

            <RightSidebar />
          </main>

          <Bottombar />
          </body>
      </html>
    </ClerkProvider>
  )
}
