'use client';

import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi';
import { base, baseSepolia } from '@reown/appkit/networks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import type { AppKitNetwork } from '@reown/appkit/networks'

const projectId = '0df2c2955d4cda3dc7c8c379302187b2';
const queryClient = new QueryClient();
const networks = [base, baseSepolia] as [AppKitNetwork, ...AppKitNetwork[]];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata: {
    name: 'CIPHER',
    description: 'CIPHER App',
    url: 'https://yourapp.com',
    icons: ['https://yourapp.com/icon.png']
  },
  features: {
    analytics: true,
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}