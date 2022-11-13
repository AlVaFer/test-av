import { Link } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { useTranslation } from 'react-i18next'

import { millisToTime, dateFormat } from '../../../../shared/helpers'
import { styles } from './styles'

const PodcastDetailEpisodesList = ({ tracksData }) => {
  const { t } = useTranslation()
  const tracks = tracksData?.results

  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table sx={styles.table} size="large" aria-label="tracks">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>{t('episodes.title')}</strong>
            </TableCell>
            <TableCell align="left">
              <strong>{t('episodes.date')}</strong>
            </TableCell>
            <TableCell align="left">
              <strong>{t('episodes.duration')}</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks?.length &&
            tracks.map((track) => {
              return (
                <TableRow key={track.trackId} sx={styles.tableRow}>
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/podcast/${track.collectionId}/episode/${track.trackId}`}
                    >
                      {track.trackName}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    {dateFormat(track.releaseDate)}
                  </TableCell>
                  <TableCell align="left">
                    {millisToTime(track.trackTimeMillis)}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PodcastDetailEpisodesList
