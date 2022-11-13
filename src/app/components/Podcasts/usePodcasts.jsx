import { useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import { endpoints, oneDay } from '../../shared/constants'

export const usePodcasts = () => {
  const fetchPodcasts = useCallback(async () => {
    try {
      const response = await fetch(endpoints.getPodcasts)
      if (response.ok) return response.json()
    } catch (e) {
      throw new Error(e)
    }
  }, [])
  const { isLoading, data, error } = useQuery(['podcasts'], fetchPodcasts, {
    staleTime: oneDay,
  })
  return { isLoading, data, error }
}

export default usePodcasts
