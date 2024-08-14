import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <div className="col-span-full">
          <div className="text-2xl font-bold mb-4">Welcome, John!</div>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-4xl font-bold">$5,432.00</div>
            <div className="flex items-center gap-2">
              <TrendingUpIcon className="w-5 h-5 text-green-500" />
              <div className="text-green-500">+2.5%</div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-full p-2">
                  <ShoppingCartIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">Amazon</div>
                  <div className="text-sm text-muted-foreground">May 15, 2023</div>
                </div>
              </div>
              <div className="text-green-500 font-medium">+$49.99</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-full p-2">
                  <WalletIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">Rent Payment</div>
                  <div className="text-sm text-muted-foreground">May 1, 2023</div>
                </div>
              </div>
              <div className="text-red-500 font-medium">-$1,200.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-full p-2">
                  <ShoppingCartIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">PayPal</div>
                  <div className="text-sm text-muted-foreground">April 28, 2023</div>
                </div>
              </div>
              <div className="text-green-500 font-medium">+$25.00</div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Upcoming Bills</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-full p-2">
                  <PowerIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">Electricity</div>
                  <div className="text-sm text-muted-foreground">June 1, 2023</div>
                </div>
              </div>
              <div className="text-red-500 font-medium">-$120.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-full p-2">
                  <GlassWaterIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">Water</div>
                  <div className="text-sm text-muted-foreground">June 15, 2023</div>
                </div>
              </div>
              <div className="text-red-500 font-medium">-$50.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-muted rounded-full p-2">
                  <NetworkIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">Internet</div>
                  <div className="text-sm text-muted-foreground">June 20, 2023</div>
                </div>
              </div>
              <div className="text-red-500 font-medium">-$75.00</div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Savings Goal</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">New Car</div>
                <div className="text-sm text-muted-foreground">$20,000 goal</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold">$10,000</div>
                <div className="text-sm text-muted-foreground">50% complete</div>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: "50%" }} />
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Investment Portfolio</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">S&P 500</div>
                <div className="text-sm text-muted-foreground">$10,000 invested</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold">$12,500</div>
                <div className="text-sm text-muted-foreground">25% gain</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Nasdaq</div>
                <div className="text-sm text-muted-foreground">$5,000 invested</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold">$6,250</div>
                <div className="text-sm text-muted-foreground">25% gain</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Crypto</div>
                <div className="text-sm text-muted-foreground">$2,500 invested</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold">$3,125</div>
                <div className="text-sm text-muted-foreground">25% gain</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function GlassWaterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  )
}


function NetworkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function PowerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function WalletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
