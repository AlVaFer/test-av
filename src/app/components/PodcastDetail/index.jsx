import PodcastDetailHeader from './children/PodcastDetailHeader'
import PodcastDetailEpisodesList from './children/PodcastDetailEpisodesList'
import SidedCard from '../shared/SidedCard'
import './styles.scss'

/**
 * PodcastDetail
 * @param {String} podcastId Id of the podcast
 * @param {Array} tracksData List of tracks of a podcast
 * @returns {JSX.Element}
 */
const PodcastDetail = ({ podcastId, tracksData }) => (
  <div className="detail">
    <SidedCard podcastId={podcastId} />
    <div className="detail__column">
      <PodcastDetailHeader tracksData={tracksData} />
      <PodcastDetailEpisodesList tracksData={tracksData} />
    </div>
  </div>
)

export default PodcastDetail
