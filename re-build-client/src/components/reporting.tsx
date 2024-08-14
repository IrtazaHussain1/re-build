import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CartesianGrid, XAxis, Bar, BarChart, Pie, PieChart, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export function Reporting() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
      <Card className="w-full col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle>Email Performance Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-4">
            <h4 className="text-2xl font-bold">45,231</h4>
            <p className="text-muted-foreground">Total Emails Sent</p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <h4 className="text-2xl font-bold">Newsletter</h4>
            <p className="text-muted-foreground">12,345 emails</p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <h4 className="text-2xl font-bold">Promotion</h4>
            <p className="text-muted-foreground">8,765 emails</p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <h4 className="text-2xl font-bold">Announcement</h4>
            <p className="text-muted-foreground">5,432 emails</p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <h4 className="text-2xl font-bold">Transactional</h4>
            <p className="text-muted-foreground">18,689 emails</p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Emails Sent per Day</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <BarchartChart className="aspect-[9/4]" /> */}
        </CardContent>
      </Card>
      <Card className="w-full col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Email Status Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <PiechartcustomChart className="aspect-square" /> */}
        </CardContent>
      </Card>
    </div>
  )
}

// function BarchartChart(props: any) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//         className="min-h-[300px]"
//       >
//         <BarChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             tickFormatter={(value: any) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
//         </BarChart>
//       </ChartContainer>
//     </div>
//   )
// }


// function LinechartChart(props: any) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//       >
//         <LineChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//           margin={{
//             left: 12,
//             right: 12,
//           }}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             axisLine={false}
//             tickMargin={8}
//             tickFormatter={(value: any) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
//         </LineChart>
//       </ChartContainer>
//     </div>
//   )
// }


// function PiechartcustomChart(props: any) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           visitors: {
//             label: "Visitors",
//           },
//           chrome: {
//             label: "Chrome",
//             color: "hsl(var(--chart-1))",
//           },
//           safari: {
//             label: "Safari",
//             color: "hsl(var(--chart-2))",
//           },
//           firefox: {
//             label: "Firefox",
//             color: "hsl(var(--chart-3))",
//           },
//           edge: {
//             label: "Edge",
//             color: "hsl(var(--chart-4))",
//           },
//           other: {
//             label: "Other",
//             color: "hsl(var(--chart-5))",
//           },
//         }}
//       >
//         <PieChart>
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Pie
//             data={[
//               { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//               { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//               { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//               { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//               { browser: "other", visitors: 90, fill: "var(--color-other)" },
//             ]}
//             dataKey="visitors"
//             nameKey="browser"
//           />
//         </PieChart>
//       </ChartContainer>
//     </div>
//   )
// }
