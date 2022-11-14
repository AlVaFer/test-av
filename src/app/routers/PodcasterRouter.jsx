import { Routes, Route } from 'react-router-dom'
import Podcast from '../pages/Podcast'
import Podcasts from '../pages/Podcasts'
import PodcastEpisode from '../pages/PodcastEpisode'

export const PodcasterRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Podcasts />} />
      <Route path='/podcast/:podcastId' element={<Podcast />} />
      <Route
        path='/podcast/:podcastId/episode/:episodeId'
        element={<PodcastEpisode />}
      />
    </Routes>
  )
}

export default PodcasterRouter
