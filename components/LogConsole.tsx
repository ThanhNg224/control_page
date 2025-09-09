"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { LogEntry } from "@/types/kiosk"

interface LogConsoleProps {
  logs: LogEntry[]
}

export function LogConsole({ logs }: LogConsoleProps) {
  const logContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll logs to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
  }, [logs])

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Status Log</h3>
        <div
          ref={logContainerRef}
          className="bg-slate-900 text-green-400 p-4 rounded-lg h-64 overflow-y-auto font-mono text-sm space-y-1"
        >
          {logs.length === 0 ? (
            <div className="text-slate-500">No logs yet...</div>
          ) : (
            logs.map((log, index) => (
              <div
                key={index}
                className={`
                  ${log.type === "success" ? "text-green-400" : ""}
                  ${log.type === "error" ? "text-red-400" : ""}
                  ${log.type === "info" ? "text-blue-400" : ""}
                `}
              >
                <span className="text-slate-400">[{log.timestamp}]</span> {log.message}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
