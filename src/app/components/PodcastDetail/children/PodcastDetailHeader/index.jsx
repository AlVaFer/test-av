import { DetailWrapper } from './styles'

const PodcastDetailHeader = ({ tracksData }) => (
  <DetailWrapper>
    <h3>Episodes: {tracksData?.results[0]?.trackCount}</h3>
  </DetailWrapper>
)

export default PodcastDetailHeader
