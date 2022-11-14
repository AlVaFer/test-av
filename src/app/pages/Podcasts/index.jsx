import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import usePodcasts from '../../components/Podcasts/usePodcasts'
import PodcastsListItem from '../../components/Podcasts/PodcastsListItem'
import PodcastsSearchBar from '../../components/Podcasts/PodcastsSearchBar'
import { setLoading } from '../../store/features/loading'

import './styles.scss'

export const Podcasts = () => {
  const dispatch = useDispatch()
  const { data = [], isLoading } = usePodcasts()
  const [filteredPodcasts, setFilteredPodcasts] = useState([])

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])

  return (
    <div className='podcasts'>
      <div className='podcasts__searchbar'>
        <PodcastsSearchBar
          data={data ?? []}
          setFilteredPodcasts={setFilteredPodcasts}
          filteredPodcasts={filteredPodcasts}
        />
      </div>
      <div className='podcasts__list'>
        {filteredPodcasts?.map((podcast, i) => (
          <PodcastsListItem key={i} podcast={podcast} />
        ))}
      </div>
    </div>
  )
}

export default Podcasts
