'use client'
import React from 'react'

type OAuthButtonProps = {
  action: () => Promise<void>
  children: React.ReactNode
}

const OAuthButton = ({action, children}: OAuthButtonProps) => {
  return (
    <form action={action}>
      <button type='submit' className='flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20'>
        {children}
      </button>
    </form>
  )
}

export default OAuthButton