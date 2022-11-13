import { Link, useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import usePodcasts from '../../Podcasts/usePodcasts'

import { CardWrapper } from './styles'

const SidedCard = ({ podcastId }) => {
  const { data } = usePodcasts()
  const { t } = useTranslation()
  const isEpisode = Object.keys(useParams()).includes('episodeId')
  const podcast = data?.feed?.entry?.find(
    (podcast) => podcast.id.attributes['im:id'] === podcastId
  )

  return (
    <CardWrapper>
      <Card sx={{ width: '18rem' }}>
        <CardContent sx={{ padding: '1rem' }}>
          <Link
            to={isEpisode ? `/podcast/${podcastId}` : ''}
            style={{ cursor: isEpisode ? 'pointer' : 'auto' }}
          >
            <CardMedia
              sx={{ borderRadius: 1 }}
              component="img"
              height="240"
              image={podcast['im:image'][2].label}
              alt={podcast['im:name'].label}
            />
            <hr />
            <h5>{podcast['im:name'].label}</h5>
          </Link>
          <h6>
            {t('sidedCard.by')} {podcast['im:artist'].label}
          </h6>
          <hr />
          <h5>{t('sidedCard.description')}</h5>
          <p>{podcast['summary'].label}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  )
}

export default SidedCard
