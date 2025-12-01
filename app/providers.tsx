'use client';

import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base, baseSepolia } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { walletConnect, injected } from '@wagmi/connectors'

// Your Reown project ID
const projectId = '0df2c2955d4cda3dc7c8c379302187b2';

const queryClient = new QueryClient();

// Define networks for AppKit with explicit typing
const networks = [base, baseSepolia] as [AppKitNetwork, ...AppKitNetwork[]];

// Set up Wagmi adapter with only the connectors you need
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
  connectors: [
    walletConnect({ projectId, showQrModal: false }),
    injected({ shimDisconnect: true })
  ]
});

// Create AppKit instance
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