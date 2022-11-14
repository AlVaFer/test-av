import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'

import './styles.scss'

/**
 * PodcastsSearchBar
 * @param {Array} data Data from usePodcasts
 * @param {Function} setFilteredPodcasts Function to set the podcasts
 * @param {Array} filteredPodcasts List of filtered podcasts
 * @returns {JSX.Element}
 */
const PodcastsSearchBar = ({ data, setFilteredPodcasts, filteredPodcasts }) => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState('')

  const findResults = () => {
    const filteredResults = data?.feed?.entry.filter(
      (product) =>
        product['im:name']?.label
          .toLowerCase()
          .includes(searchValue.toLowerCase().trim()) ||
        product['im:artist']?.label
          .toLowerCase()
          .includes(searchValue.toLowerCase().trim())
    )
    setFilteredPodcasts(filteredResults ?? [])
  }

  useEffect(() => {
    searchValue && searchValue !== ''
      ? findResults()
      : setFilteredPodcasts(data?.feed?.entry)
  }, [searchValue, data, setFilteredPodcasts])

  return (
    <div className='searchbar'>
      <Badge
        name='badge'
        badgeContent={filteredPodcasts?.length}
        color='primary'
        showZero
        sx={{ '& .MuiBadge-badge': { fontSize: 20, height: 25 } }}
        max={200}
        data-testid='badge'
      />
      <TextField
        name='input-search'
        type='text'
        variant='outlined'
        underline='none'
        placeholder={t('search')}
        onChange={(e) => setSearchValue(e.target.value)}
        inputProps={{ 'aria-label': 'textbox-search' }}
        data-testid='input-search'
      />
    </div>
  )
}

export default PodcastsSearchBar
