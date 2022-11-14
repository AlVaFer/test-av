import Linkify from 'linkify-react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import { styles, linkifyOptions } from './styles'

const PodcastEpisodeCard = ({ currentTrack }) => (
  <Card sx={styles.card}>
    <CardContent sx={styles.cardContent}>
      <h3>{currentTrack?.trackName}</h3>
      {currentTrack?.shortDescription
        ? (
          <>
            <h4>{currentTrack?.shortDescription}</h4>
            <br />
          </>
          )
        : null}
      <Linkify as='p' options={linkifyOptions}>
        {currentTrack?.description}
      </Linkify>
      <CardMedia
        sx={styles.cardmedia}
        component='audio'
        controls
        src={currentTrack?.episodeUrl}
        alt={currentTrack?.episodeName}
      />
    </CardContent>
  </Card>
)

export default PodcastEpisodeCard
