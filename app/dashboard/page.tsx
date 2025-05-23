"use client"

import { useEffect, useState } from "react"
import { BarChart2, Download, Filter, RefreshCw, LineChart, PieChart, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import DirectCognosIframe from "./direct-iframe"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [embedUrl, setEmbedUrl] = useState("https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2FNew%2Bdashboard%2Bfor%2Bmy%2Bbi%2Bproject%2B2&closeWindowOnLastView=true&ui_appbar=false&ui_navbar=false&shareMode=embedded&action=view&mode=dashboard&subView=model00000196be09f4ac_00000003")
  const [currentView, setCurrentView] = useState("analytics")
  const [timeframe, setTimeframe] = useState("month")

  useEffect(() => {
    // Simulating data loading on initial render
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Workforce Analytics Dashboard</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Powered by IBM Cognos Analytics to provide comprehensive workforce insights.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            <span className="sr-only">Refresh data</span>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download report</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Job Openings</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">152,847</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$76,580</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500">+2.3%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Growing Field</CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Software Development</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500">+18.2%</span> growth rate
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skills in Demand</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">Data Analysis</Badge>
                <Badge variant="outline">Cloud Computing</Badge>
                <Badge variant="outline">AI/ML</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="space-y-4" onValueChange={setCurrentView}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filter</span>
              </Button>
              <Select defaultValue={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="h-8 w-[150px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Last 24 hours</SelectItem>
                  <SelectItem value="week">Last week</SelectItem>
                  <SelectItem value="month">Last month</SelectItem>
                  <SelectItem value="year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="analytics" className="space-y-4">
            {isLoading ? (
              <Card className="border shadow-sm">
                <CardContent className="flex h-[600px] items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Loading dashboard data...</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <DirectCognosIframe url={embedUrl} />
            )}
            <Card className="border-t bg-muted/50 px-6 py-3">
              <CardContent className="p-0">
                <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
                  <div>Data last updated: May 16, 2025 • {timeframe === "day" ? "Daily" : timeframe === "week" ? "Weekly" : timeframe === "month" ? "Monthly" : "Annual"} view</div>
                  <div className="flex items-center gap-2">
                    <span>Source: IBM Cognos Analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Employment by Industry</CardTitle>
                  <CardDescription>Distribution of jobs across major industry sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] relative flex items-center justify-center rounded-md border bg-muted">
                    <PieChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="absolute text-xs text-muted-foreground">Industry breakdown chart</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Salary Trends</CardTitle>
                  <CardDescription>Average salary trends over time by role</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] relative flex items-center justify-center rounded-md border bg-muted">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="absolute text-xs text-muted-foreground">Salary trends chart</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Emerging Workforce Trends</CardTitle>
                <CardDescription>Key trends and changes in the job market</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Remote Work</h3>
                  <p className="text-sm text-muted-foreground">
                    Remote work opportunities increased by 34% in the past year, with technology and 
                    customer service sectors leading the transition.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Skill Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Demand for digital skills continues to grow, with data analysis, cloud computing, 
                    and AI/ML showing the highest growth rates.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Gig Economy</h3>
                  <p className="text-sm text-muted-foreground">
                    Contract and freelance positions have grown by 22%, particularly in creative, 
                    technical, and professional services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>Download detailed workforce reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h3 className="font-medium">Quarterly Workforce Analysis</h3>
                      <p className="text-sm text-muted-foreground">Q1 2025 comprehensive job market report</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3.5 w-3.5" />
                      <span>PDF</span>
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h3 className="font-medium">Salary Benchmark Study</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive analysis of compensation trends</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3.5 w-3.5" />
                      <span>PDF</span>
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Emerging Skills Report</h3>
                      <p className="text-sm text-muted-foreground">Analysis of in-demand skills and qualifications</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3.5 w-3.5" />
                      <span>PDF</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Settings</CardTitle>
                <CardDescription>Configure your dashboard display and data sources.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="embed-url">IBM Cognos Analytics Dashboard URL</Label>
                  <Input
                    id="embed-url"
                    value={embedUrl}
                    onChange={(e) => setEmbedUrl(e.target.value)}
                    placeholder="Enter your Cognos dashboard embed URL"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the embed URL for your IBM Cognos Analytics dashboard.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="refresh-rate">Data Refresh Rate</Label>
                  <Select defaultValue="30">
                    <SelectTrigger id="refresh-rate">
                      <SelectValue placeholder="Select refresh rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">Every 5 minutes</SelectItem>
                      <SelectItem value="15">Every 15 minutes</SelectItem>
                      <SelectItem value="30">Every 30 minutes</SelectItem>
                      <SelectItem value="60">Every hour</SelectItem>
                      <SelectItem value="manual">Manual refresh only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="mt-4">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
