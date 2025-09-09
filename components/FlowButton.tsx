"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { FlowButtonProps } from "@/types/kiosk"

export function FlowButton({ label, icon: Icon, onClick }: FlowButtonProps) {
  return (
    <Card className="h-32 hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer group">
      <CardContent className="flex flex-col items-center justify-center h-full p-4 text-center" onClick={onClick}>
        <Icon className="w-8 h-8 mb-2 text-primary group-hover:text-primary/80 transition-colors" />
        <span className="text-sm font-medium text-balance">{label}</span>
      </CardContent>
    </Card>
  )
}
