import type { LucideIcon } from "lucide-react"

export interface FlowButtonProps {
  label: string
  icon: LucideIcon
  onClick: () => void
}

export interface LogEntry {
  timestamp: string
  message: string
  type: "success" | "error" | "info"
}
