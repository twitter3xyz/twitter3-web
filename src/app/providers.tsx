'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
 import {AAContextProvider } from '@m/account/AAContext'

export function Providers({
                            children
                          }: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider>
          <AAContextProvider>
              {children}
          </AAContextProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
