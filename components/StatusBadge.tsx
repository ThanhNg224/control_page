import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff } from "lucide-react"

interface StatusBadgeProps {
  isOnline: boolean | null
}

export function StatusBadge({ isOnline }: StatusBadgeProps) {
  if (isOnline === null) return null

  return (
    <div className="flex items-center gap-2">
      {isOnline ? (
        <>
          <Wifi className="w-4 h-4 text-green-500" />
          <Badge variant="default" className="bg-green-500 hover:bg-green-600">
            Online
          </Badge>
        </>
      ) : (
        <>
          <WifiOff className="w-4 h-4 text-red-500" />
          <Badge variant="destructive">Offline</Badge>
        </>
      )}
    </div>
  )
}
