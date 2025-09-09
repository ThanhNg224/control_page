"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { pingDevice, triggerAction } from "@/lib/kioskClient"
import type { LogEntry } from "@/types/kiosk"

export function useKiosk() {
  const [host, setHost] = useState("")
  const [isOnline, setIsOnline] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const { toast } = useToast()

  // Load saved host from localStorage on mount
  useEffect(() => {
    const savedHost = localStorage.getItem("kiosk-host")
    if (savedHost) {
      setHost(savedHost)
    }
  }, [])

  const addLog = (message: string, type: "success" | "error" | "info" = "info") => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs((prev) => [...prev, { timestamp, message, type }])
  }

  const saveHost = (newHost: string) => {
    localStorage.setItem("kiosk-host", newHost)
  }

  const handleHostChange = (value: string) => {
    setHost(value)
    saveHost(value)
  }

  const handlePingDevice = async () => {
    if (!host.trim()) {
      toast({
        title: "Error",
        description: "Please enter a host address",
        variant: "destructive",
      })
      return
    }

    setIsChecking(true)
    addLog(`Pinging ${host}...`, "info")

    try {
      await pingDevice(host)
      setIsOnline(true)
      addLog(`✓ Device online: ${host}`, "success")
      toast({
        title: "Success",
        description: "Device is online",
      })
    } catch (error) {
      setIsOnline(false)
      const errorMsg = error instanceof Error ? error.message : "Unknown error"
      addLog(`✗ Device offline: ${host} (${errorMsg})`, "error")
      toast({
        title: "Error",
        description: "Device is offline",
        variant: "destructive",
      })
    } finally {
      setIsChecking(false)
    }
  }

  const handleTriggerAction = async (actionLabel: string) => {
    if (!host.trim()) {
      toast({
        title: "Error",
        description: "Please enter a host address",
        variant: "destructive",
      })
      return
    }

    addLog(`Triggering action: ${actionLabel}`, "info")

    try {
      const responseData = await triggerAction(host, actionLabel)
      addLog(`✓ ${actionLabel} success: ${JSON.stringify(responseData)}`, "success")
      toast({
        title: "Success",
        description: `${actionLabel} triggered successfully`,
      })
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Unknown error"
      addLog(`✗ ${actionLabel} failed: ${errorMsg}`, "error")
      toast({
        title: "Error",
        description: `Failed to trigger ${actionLabel}`,
        variant: "destructive",
      })
    }
  }

  return {
    host,
    isOnline,
    isChecking,
    logs,
    handleHostChange,
    handlePingDevice,
    handleTriggerAction,
  }
}
