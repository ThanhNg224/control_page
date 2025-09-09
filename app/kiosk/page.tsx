"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { CreditCard, FileText, RefreshCw, ArrowRightLeft } from "lucide-react"
import { useKiosk } from "@/hooks/useKiosk"
import { FlowButton } from "@/components/FlowButton"
import { StatusBadge } from "@/components/StatusBadge"
import { LogConsole } from "@/components/LogConsole"

export default function KioskControlPage() {
  const { host, isOnline, isChecking, logs, handleHostChange, handlePingDevice, handleTriggerAction } = useKiosk()

  const flowButtons = [
    { label: "Buy SIM", icon: CreditCard },
    { label: "Standardize Information", icon: FileText },
    { label: "Replace SIM", icon: RefreshCw },
    { label: "Transfer Ownership", icon: ArrowRightLeft },
  ]

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-balance">Kiosk Control Panel</h1>
          <p className="text-muted-foreground">Demo control interface for kiosk devices</p>
        </div>

        {/* Connection Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="host" className="text-sm font-medium">
                Kiosk Device Host
              </label>
              <div className="flex gap-2">
                <Input
                  id="host"
                  placeholder="192.168.1.120:8088"
                  value={host}
                  onChange={(e) => handleHostChange(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handlePingDevice} disabled={isChecking} className="min-w-20">
                  {isChecking ? "Pinging..." : "Ping"}
                </Button>
              </div>
            </div>

            <StatusBadge isOnline={isOnline} />
          </CardContent>
        </Card>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-4">
          {flowButtons.map((button) => (
            <FlowButton
              key={button.label}
              label={button.label}
              icon={button.icon}
              onClick={() => handleTriggerAction(button.label)}
            />
          ))}
        </div>

        <LogConsole logs={logs} />
      </div>

      <Toaster />
    </div>
  )
}
