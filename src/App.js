import { BrowserRouter as Router } from 'react-router-dom'

import './app/i18n/config'
import Layout from './app/containers/Layout'
import Header from './app/containers/Header'
import PodcasterRouter from './app/routers/PodcasterRouter'

export const App = () => (
  <Router>
    <Layout header={<Header />}>
      <PodcasterRouter />
    </Layout>
  </Router>
)

export default App
