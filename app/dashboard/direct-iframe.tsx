"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface DirectCognosIframeProps {
  url?: string
}

export default function DirectCognosIframe({ url }: DirectCognosIframeProps) {
  const defaultUrl = "https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2FNew%2Bdashboard%2Bfor%2Bmy%2Bbi%2Bproject%2B2&closeWindowOnLastView=true&ui_appbar=false&ui_navbar=false&shareMode=embedded&action=view&mode=dashboard&subView=model00000196be09f4ac_00000003"
  
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl font-medium">IBM Cognos Analytics Dashboard</CardTitle>
          <CardDescription>
            Interactive visualization of workforce data and labor market trends.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[600px] overflow-hidden rounded-md border">
          <iframe
            title="IBM Cognos Analytics Dashboard"
            src={url || defaultUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}
