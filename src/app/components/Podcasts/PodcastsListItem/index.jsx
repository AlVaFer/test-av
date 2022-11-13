import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './styles.scss'

const PodcastsListItem = ({ podcast }) => {
  const { t } = useTranslation()
  return (
    podcast && (
      <div className="list">
        <Link
          key={podcast.id?.attributes['im:id']}
          to={`/podcast/${podcast.id?.attributes['im:id']}`}
        >
          <img
            className="list__img"
            src={podcast['im:image'][2]?.label}
            alt={podcast['im:name']?.label}
          />
          <div className="list__div-list">
            <h5 className="list__div-list__h5">
              {podcast['im:name']?.label.toUpperCase()}
            </h5>
            <h6 className="list__div-list__h6">
              {t('podcasts.author')}
              {podcast['im:artist']?.label}
            </h6>
          </div>
        </Link>
      </div>
    )
  )
}

export default PodcastsListItem
