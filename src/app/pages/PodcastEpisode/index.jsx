import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setLoading } from '../../store/features/loading'
import usePodcastDetail from '../../components/PodcastDetail/usePodcastDetail'
import PodcastEpisodeDetail from '../../../app/components/PodcastEpisode'

const PodcastEpisode = () => {
  const dispatch = useDispatch()
  const { podcastId, episodeId } = useParams()
  const { data: tracksData, isLoading } = usePodcastDetail()

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])

  return (
    <PodcastEpisodeDetail
      tracksData={tracksData}
      trackId={episodeId}
      podcastId={podcastId}
    />
  )
}

export default PodcastEpisode
