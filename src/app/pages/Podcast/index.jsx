import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../store/features/loading'

import PodcastDetail from '../../components/PodcastDetail'
import usePodcastDetail from '../../components/PodcastDetail/usePodcastDetail'

const Podcast = () => {
  const dispatch = useDispatch()
  const { podcastId } = useParams()
  const { data, isLoading } = usePodcastDetail(podcastId)

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])

  return <PodcastDetail podcastId={podcastId} tracksData={data} />
}

export default Podcast
