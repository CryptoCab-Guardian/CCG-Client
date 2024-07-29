import MetaMaskAuth from "@/components/MetaMaskAuth";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-center">
      <MetaMaskAuth />
    </div>
  )
}
