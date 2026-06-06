import { useState, useEffect } from 'react'

export function useSimulatedFetch(staticData, delayMs = 800) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reset state if staticData changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true)
    
    const timer = setTimeout(() => {
      setData(staticData)
      setIsLoading(false)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [staticData, delayMs])

  return { data, isLoading }
}
