import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import CircularProgress from '@mui/material/CircularProgress'

import { NavWrapper } from './styles'
import { Title } from './styles'

const Header = () => {
  const { t } = useTranslation()
  const loading = useSelector((state) => state.loading)

  return (
    <header>
      <NavWrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Title bold font={'big'}>
            {t('title')}
          </Title>
        </Link>
        {loading.loading && <CircularProgress color="primary" />}
      </NavWrapper>
    </header>
  )
}

export default Header
