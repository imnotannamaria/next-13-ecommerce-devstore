import { Header } from '@/components/header'
import { CartProviver } from '@/context/cart-context'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProviver>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-store gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProviver>
  )
}
