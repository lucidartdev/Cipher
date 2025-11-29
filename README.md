
# CIPHER - Privacy-First Crypto Wallet Analyzer

A Next.js application that provides privacy-first blockchain wallet analysis with human-readable insights, gas tracking, and security alerts.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cipher
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_PROJECT_ID=your_reown_project_id
```

Get your Project ID from [Reown Cloud](https://cloud.reown.com/)

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org) (App Router)
- **Web3 Integration**: 
  - [Reown AppKit](https://docs.reown.com/appkit/overview) (formerly WalletConnect)
  - [Wagmi](https://wagmi.sh/) - React Hooks for Ethereum
  - [Viem](https://viem.sh/) - TypeScript Interface for Ethereum
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks + TanStack Query

## 📦 Key Dependencies

```json
{
  "@reown/appkit": "latest",
  "@reown/appkit-adapter-wagmi": "latest",
  "wagmi": "latest",
  "viem": "latest",
  "@tanstack/react-query": "latest",
  "next": "14+",
  "react": "18+",
  "lucide-react": "latest"
}
```

## 🔐 Wallet Integration Setup

This project uses **Reown AppKit** (formerly WalletConnect) for Web3 wallet connections.

### Configuration Files

1. **Create `app/context/Web3Modal.tsx`**:
```typescript
'use client'

import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, polygon } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient()

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!

const metadata = {
  name: 'CIPHER',
  description: 'Privacy-First Crypto Wallet Analyzer',
  url: 'https://cipher.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const networks = [mainnet, arbitrum, polygon]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true
  }
})

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
```

2. **Wrap your app in `app/layout.tsx`**:
```typescript
import { Web3Modal } from './context/Web3Modal'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  )
}
```

## 🎯 Features

- **Privacy-First**: All computations happen client-side, your data never leaves your device
- **Multi-Wallet Support**: Connect with 20+ wallets via Reown AppKit
- **Gas Tracking**: Monitor transaction fees and optimize spending
- **Risk Detection**: Identify dangerous token approvals and security threats
- **Activity Insights**: Human-readable transaction history and visualizations
- **AI Chat Support**: Interactive AI assistant for wallet analysis

## 📁 Project Structure

```
cipher/
├── app/
│   ├── components/
│   │   └── landing-page.tsx      # Main landing page component
│   ├── context/
│   │   └── Web3Modal.tsx         # Web3 provider setup
│   ├── dashboard/
│   │   └── page.tsx              # Dashboard page
│   └── page.tsx                  # Home page
├── public/
│   ├── Cipher.png                # Logo
│   └── assets/                   # Feature images
└── README.md
```

## 🔄 Migration from RainbowKit to Reown

If you're migrating from RainbowKit:

1. **Uninstall RainbowKit**:
```bash
npm uninstall @rainbow-me/rainbowkit wagmi viem
```

2. **Install Reown AppKit**:
```bash
npm install @reown/appkit @reown/appkit-adapter-wagmi wagmi viem @tanstack/react-query
```

3. **Update imports**:
```typescript
// Before (RainbowKit)
import { ConnectButton } from '@rainbow-me/rainbowkit'

// After (Reown)
import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'
```

4. **Update button usage**:
```typescript
// Before
<ConnectButton.Custom>
  {({ openConnectModal }) => (
    <button onClick={openConnectModal}>Connect</button>
  )}
</ConnectButton.Custom>

// After
const { open } = useAppKit()
const { isConnected, address } = useAccount()

<button onClick={() => open()}>
  {isConnected ? address : 'Connect Wallet'}
</button>
```

## 🌐 Environment Variables

Create a `.env.local` file:

```bash
# Reown Project ID (Required)
NEXT_PUBLIC_PROJECT_ID=your_project_id_here

# Optional: API Keys
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Add environment variables
4. Deploy

### Other Platforms

Build the application:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Reown AppKit Docs](https://docs.reown.com/appkit/overview)
- [Wagmi Documentation](https://wagmi.sh/)
- [Viem Documentation](https://viem.sh/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Live Demo](https://cipher.app)
- [Documentation](https://docs.cipher.app)
- [GitHub](https://github.com/yourusername/cipher)

---

Built with ❤️ using Next.js and Reown AppKit