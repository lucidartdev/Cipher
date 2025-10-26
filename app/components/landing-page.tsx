"use client"
import React, { useState, useEffect } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import {
   Shield,
   Eye,
   Zap,
   TrendingUp,
   Lock,
   Activity,
   MessageCircle,
   Send,
   X,
} from "lucide-react";

export default function CipherLanding() {
   const router = useRouter();
   const { isConnected } = useAccount();
   const [isChatOpen, setIsChatOpen] = useState(false);
   const [messages, setMessages] = useState([
      {
         type: "bot",
         text: "Hi! I'm CIPHER AI. Ask me about your wallet activity, gas fees, or security risks.",
      },
   ]);
   const [inputValue, setInputValue] = useState("");

   
   useEffect(() => {
      if (isConnected) {
         router.push('/dashboard');
      }
   }, [isConnected, router]);

   const handleSendMessage = () => {
      if (!inputValue.trim()) return;

      setMessages([...messages, { type: "user", text: inputValue }]);
      setInputValue("");

      // Simulate AI response
      setTimeout(() => {
         setMessages((prev) => [
            ...prev,
            {
               type: "bot",
               text: "I can help you analyze your wallet! Connect your wallet to get started with personalized insights.",
            },
         ]);
      }, 1000);
   };

   return (
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
         {/* Subtle Background Pattern */}
         <div className="absolute inset-0 bg-[radial-linear(circle_at_1px_1px,rgba(101,228,114,0.05)_1px,transparent_0)] bg-size-[40px_40px] "></div>

         {/* linear Orbs */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-[#023697] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div
               className="absolute top-40 -right-20 w-96 h-96 bg-[#001d51] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
               style={{ animationDelay: "1s" }}></div>
            <div
               className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#023697] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
               style={{ animationDelay: "2s" }}></div>
         </div>

        
      

         {/* Content Container */}
         <div className="relative z-10">
            {/* Navigation */}
            <nav className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-100">
               <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-linear-to-br from-[#023697] to-[#001d51] rounded-xl flex items-center justify-center shadow-lg shadow-[#023697]/20">
                     <span className="text-xl font-bold text-white">C</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                     CIPHER
                  </span>
               </div>

               <div className="flex items-center gap-3">
                  {/* Dashboard Link - Only shows when connected */}
                  {isConnected && (
                     <button
                        onClick={() => router.push('/dashboard')}
                        className="bg-white border-2 border-[#023697] text-[#001d51] px-4 py-2 rounded-xl font-semibold hover:bg-[#023697] hover:text-white transition-all duration-300 transform hover:scale-105"
                     >
                        Dashboard
                     </button>
                  )}

                  {/* Connect Wallet Button */}
                  <ConnectButton.Custom>
                     {({
                        account,
                        chain,
                        openAccountModal,
                        openChainModal,
                        openConnectModal,
                        mounted,
                     }) => {
                        const connected = mounted && account && chain;
                        
                        return (
                           <button
                              onClick={connected ? openAccountModal : openConnectModal}
                              className="bg-linear-to-r from-[#023697] to-[#001d51] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#023697]/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                           >
                              {connected ? `${account.displayName}` : 'Connect Wallet'}
                           </button>
                        );
                     }}
                  </ConnectButton.Custom>
               </div>
            </nav>

            {/* Hero Section */}
           <div className="relative">
  {/* Pattern background */}
 <div className="absolute z-[-99] inset-0 opacity-15 bg-white" style={{
    backgroundImage: 'radial-gradient(#023697 1.65px, transparent 1.65px), radial-gradient(#023697 1.65px, #ffffff 1.65px)',
    backgroundSize: '66px 66px',
    backgroundPosition: '0 0, 33px 33px'
  }}></div>
  <div className="container mx-auto px-6 pt-20 pb-32">
               <div className="max-w-5xl mx-auto text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-linear-to-r from-[#023697]/10 to-[#001d51]/10 border border-[#023697]/20 rounded-full px-4 py-2 mb-8 hover:shadow-lg hover:shadow-[#023697]/10 transition-all duration-300">
                     <span className="w-2 h-2 bg-[#023697] rounded-full animate-pulse"></span>
                     <span className="text-sm text-gray-700 font-medium">
                        World's First Privacy-First Crypto Wallet Analyzer
                     </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
                     
                     
                     <br />
                     <span className="bg-linear-to-r from-[#023697] via-[#001d51] to-[#023697] bg-clip-text text-transparent">
                        Personal Analyst
                     </span>
                  </h1>

                  <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                     CIPHER translates your blockchain transactions into plain
                     English insights.
                     <br />
                     Track spending, detect risks, and understand your crypto
                     activity—all without compromising privacy.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex col sm:row items-center justify-center gap-4 mb-12">
                     <ConnectButton.Custom>
                        {({ openConnectModal, mounted, account }) => {
                           const connected = mounted && account;
                           
                           return (
                              <button 
                                 onClick={connected ? () => router.push('/dashboard') : openConnectModal}
                                 className="bg-linear-to-r from-[#023697] to-[#001d51] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#023697]/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                              >
                                 {connected ? 'Go to Dashboard' : 'Get Started for Free'}
                                 <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                                    →
                                 </span>
                              </button>
                           );
                        }}
                     </ConnectButton.Custom>
                     <button className="bg-white border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-[#023697] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                        Watch Demo
                     </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                     <div className="flex items-center space-x-2 hover:text-[#001d51] transition-colors cursor-pointer">
                        <Shield className="w-4 h-4 text-[#023697]" />
                        <span className="font-medium">Zero-Knowledge</span>
                     </div>
                     <div className="flex items-center space-x-2 hover:text-[#001d51] transition-colors cursor-pointer">
                        <Lock className="w-4 h-4 text-[#023697]" />
                        <span className="font-medium">Client-Side Only</span>
                     </div>
                     <div className="flex items-center space-x-2 hover:text-[#001d51] transition-colors cursor-pointer">
                        <Eye className="w-4 h-4 text-[#023697]" />
                        <span className="font-medium">100% Transparent</span>
                     </div>
                  </div>
               </div>

               {/* Floating Cards Preview */}
      <div className="max-w-6xl mx-auto mt-20 relative ">
  <div className="grid md:grid-cols-3 gap-12">
    {/* Card 1 */}
    <div className="relative p-1">
      {/* Frosted glass backdrop - larger than card */}
      <div className="absolute inset-0 bg-[#023697]/10 backdrop-blur-md rounded-2xl transform scale-105 shadow-2xl shadow-black/20"></div>
      
      {/* Actual card */}
      <div className="relative group h-[40vh] bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg shadow-black/20 hover:bg-[#023697]/5 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        <div className="mb-6 group-hover:scale-110 group-hover:rotate-9 transition-all duration-500 flex align-center justify-center">
        <img src="/assets/Gas.png" alt="Gas Tracking" className="w-36 h-36 object-contain" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-transparent bg-linear-to-r from-[#023697] via-[#001d51] to-[#023697] bg-clip-text">
        Gas Tracking
      </h3>
        <p className="text-gray-600">
          Monitor your transaction fees and optimize your
          spending patterns in real-time.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative p-1">
      {/* Frosted glass backdrop - larger than card */}
      <div className="absolute inset-0  bg-[#023697]/10 backdrop-blur-md rounded-2xl transform scale-105 shadow-xl shadow-black/20"></div>
      
      {/* Actual card */}
      <div className="relative group h-[40vh] bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg shadow-black/20 hover:bg-[#023697]/5 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
           <div className="mb-6 group-hover:scale-110 group-hover:rotate-9 transition-all duration-500 flex align-center justify-center">
        <img src="/assets/Warning.png" alt="Risk Detection" className="w-36 h-36 object-contain" />
      </div>
        <h3 className="text-2xl font-bold mb-3 text-transparent bg-linear-to-r from-[#023697] via-[#001d51] to-[#023697] bg-clip-text">
          Risk Detection
        </h3>
        <p className="text-gray-600 text-base">
          Identify dangerous token approvals and protect
          yourself from potential exploits.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative p-1">
      {/* Frosted glass backdrop - larger than card */}
      <div className="absolute inset-0  bg-[#023697]/10 backdrop-blur-md rounded-2xl transform scale-105 shadow-xl shadow-black/20"></div>
      
      {/* Actual card */}
      <div className="relative group h-[40vh] bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg shadow-black/20 hover:bg-[#023697]/5 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
       <div className="mb-6 group-hover:scale-110 group-hover:rotate-9 transition-all duration-500 flex align-center justify-center">
        <img src="/assets/Avtivity.png" alt="Activity Insights" className="w-36 h-36 object-contain" />
      </div>
        <h3 className="text-2xl font-bold mb-3 text-transparent bg-linear-to-r from-[#023697] via-[#001d51] to-[#023697] bg-clip-text">
          Activity Insights
        </h3>
        <p className="text-gray-600 text-base">
          Understand your transaction history with
          human-readable summaries and visualizations.
        </p>
      </div>
    </div>
  </div>
</div>
           

            </div></div>

            {/* Features Section */}
            <div
               id="features"
               className="container mx-auto px-6 py-20 bg-linear-to-b from-gray-50 to-white">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Why Choose{" "}
                        <span className="text-[#023697]">CIPHER</span>?
                     </h2>
                     <p className="text-gray-600 text-lg">
                        Your data stays yours. Forever.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#023697] hover:shadow-xl hover:shadow-[#023697]/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-start space-x-4">
                           <div className="w-10 h-10 bg-linear-to-br from-[#023697] to-[#001d51] rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-[#023697]/20">
                              <Lock className="w-5 h-5 text-white" />
                           </div>
                           <div>
                              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                 Privacy-First Architecture
                              </h3>
                              <p className="text-gray-600">
                                 All computations happen in your browser. Your
                                 wallet data never leaves your device. No
                                 servers, no databases, no tracking.
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#023697] hover:shadow-xl hover:shadow-[#023697]/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-start space-x-4">
                           <div className="w-10 h-10 bg-linear-to-br from-[#023697] to-[#001d51] rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-[#023697]/20">
                              <Zap className="w-5 h-5 text-white" />
                           </div>
                           <div>
                              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                 Verified Data Source
                              </h3>
                              <p className="text-gray-600">
                                 Powered by Space & Time for cryptographically
                                 verified blockchain data. Every insight is
                                 provably accurate.
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#023697] hover:shadow-xl hover:shadow-[#023697]/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-start space-x-4">
                           <div className="w-10 h-10 bg-linear-to-br from-[#023697] to-[#001d51] rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-[#023697]/20">
                              <Activity className="w-5 h-5 text-white" />
                           </div>
                           <div>
                              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                 Human-Readable Insights
                              </h3>
                              <p className="text-gray-600">
                                 No more cryptic transaction hashes. See your
                                 activity translated into plain English with
                                 smart categorization.
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#023697] hover:shadow-xl hover:shadow-[#023697]/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-start space-x-4">
                           <div className="w-10 h-10 bg-linear-to-br from-[#023697] to-[#001d51] rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-[#023697]/20">
                              <Shield className="w-5 h-5 text-white" />
                           </div>
                           <div>
                              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                 Proactive Security Alerts
                              </h3>
                              <p className="text-gray-600">
                                 Get warned about risky token approvals and
                                 suspicious activity before it's too late. Take
                                 control of your security.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-6 py-20">
               <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                     <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <div className="text-4xl font-bold text-[#023697] mb-2">
                           20+
                        </div>
                        <div className="text-gray-600">Wallets Compatible</div>
                     </div>
                   
                     <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <div className="text-4xl font-bold text-[#023697] mb-2">
                           100%
                        </div>
                        <div className="text-gray-600">Privacy Guaranteed</div>
                     </div>
                     <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <div className="text-4xl font-bold text-[#023697] mb-2">
                           24/7
                        </div>
                        <div className="text-gray-600">AI Support</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer */}
            <footer className="container mx-auto px-6 py-12 border-t border-gray-100">
               <div className="flex col md:row items-center justify-between">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                     <div className="w-8 h-8 bg-linear-to-br from-[#023697] to-[#001d51] rounded-lg flex items-center justify-center shadow-lg shadow-[#023697]/20">
                        <span className="text-lg font-bold text-white">C</span>
                     </div>
                     <span className="text-xl font-bold text-gray-900">
                        CIPHER
                     </span>
                  </div>

                  <p className="text-gray-600 text-sm">
                     © 2025 CIPHER. Your data stays yours, always.
                  </p>
               </div>
            </footer>
         </div>

         {/* Floating Chat Button */}
         <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-linear-to-br from-[#023697] to-[#001d51] rounded-full flex items-center justify-center shadow-2xl shadow-[#023697]/40 hover:scale-110 transition-all duration-300 z-50 group">
            {isChatOpen ? (
               <X className="w-6 h-6 text-white" />
            ) : (
               <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
         </button>

         {/* Chat Window */}
       {isChatOpen && (
            <div className="fixed bottom-24 right-6 w-160 h-[500px] bg-white border-2 border-gray-200 rounded-2xl shadow-2xl z-50 grid overflow-hidden">
               {/* Chat Header */}
               <div className="bg-linear-to-r from-[#023697] to-[#001d51] p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold bg-linear-to-r from-[#023697] to-[#001d51] bg-clip-text text-transparent">
                           C
                        </span>
                     </div>
                     <div>
                        <div className="text-white font-semibold">
                           CIPHER AI
                        </div>
                        <div className="text-white/80 text-xs">
                           Always here to help
                        </div>
                     </div>
                  </div>
               </div>

               {/* Chat Messages */}
               <div className="1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, idx) => (
                     <div
                        key={idx}
                        className={`flex ${
                           msg.type === "user" ? "justify-end" : "justify-start"
                        }`}>
                        <div
                           className={`max-w-[80%] p-3 rounded-2xl ${
                              msg.type === "user"
                                 ? "bg-linear-to-r from-[#023697] to-[#001d51] text-white"
                                 : "bg-gray-100 text-gray-900"
                           }`}>
                           {msg.text}
                        </div>
                     </div>
                  ))}
               </div>

               {/* Chat Input */}
               <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                     <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) =>
                           e.key === "Enter" && handleSendMessage()
                        }
                        placeholder="Ask me anything..."
                        className="1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#023697] transition-colors"
                     />
                     <button
                        onClick={handleSendMessage}
                        className="w-10 h-10 bg-linear-to-br from-[#023697] to-[#001d51] rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#023697]/20">
                        <Send className="w-5 h-5 text-white" />
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}