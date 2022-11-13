import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { endpoints, oneDay } from '../../shared/constants'

export const usePodcastDetail = () => {
  const { podcastId } = useParams()
  const fetchTracks = useCallback(async () => {
    try {
      const response = await fetch(endpoints.getTracks(podcastId))
      if (response.ok) return response.json()
    } catch (e) {
      throw new Error(e)
    }
  }, [podcastId])
  const { isLoading, data, error } = useQuery(
    ['tracks', podcastId],
    fetchTracks,
    {
      staleTime: oneDay,
    }
  )
  return { isLoading, data, error }
}

export default usePodcastDetail
