'use client';

import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base, baseSepolia } from '@reown/appkit/networks'

// Your Reown project ID (this is your WalletConnect project ID)
const projectId = '0df2c2955d4cda3dc7c8c379302187b2';

const queryClient = new QueryClient();

// Define networks for AppKit
const networks = [base, baseSepolia];

// Set up Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// Create AppKit instance
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata: {
    name: 'CIPHER',
    description: 'CIPHER App',
    url: 'https://yourapp.com', // Update with your actual URL
    icons: ['https://yourapp.com/icon.png'] // Update with your actual icon
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