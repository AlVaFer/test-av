import React, { useState, useEffect } from 'react'

import PodcastEpisodeCard from './PodcastEpisodeCard'
import SidedCard from '../shared/SidedCard'
import { EpisodeWrapper, CentralWrapper } from './styles'

/**
 * PodcastEpisodeDetail
 * @param {String} trackId Id of the track
 * @param {String} podcastId Id of the podcast
 * @param {Array} tracksData List of tracks of a podcast
 * @returns {JSX.Element}
 */
const PodcastEpisodeDetail = ({ tracksData, trackId, podcastId }) => {
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    if (tracksData) {
      const track = tracksData.results.find(
        (track) => track.trackId === Number(trackId)
      )
      setCurrentTrack(track)
    }
  }, [tracksData, trackId])

  return (
    <EpisodeWrapper>
      <SidedCard podcastId={podcastId} />
      <CentralWrapper>
        <PodcastEpisodeCard currentTrack={currentTrack} />
      </CentralWrapper>
    </EpisodeWrapper>
  )
}

export default PodcastEpisodeDetail
