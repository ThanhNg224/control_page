export async function pingDevice(host: string): Promise<boolean> {
  const response = await fetch(`http://${host}/api/health`, {
    method: "GET",
    signal: AbortSignal.timeout(5000), // 5 second timeout
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  return true
}

export async function triggerAction(host: string, actionLabel: string): Promise<any> {
  const response = await fetch(`http://${host}/api/trigger`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Token": "DEMO_TOKEN",
    },
    body: JSON.stringify({ action: "START_BUY_SIM" }),
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${JSON.stringify(responseData)}`)
  }

  return responseData
}
