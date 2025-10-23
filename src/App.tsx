import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoadingFallback } from './components/Fallback';

const Home = lazy(() => import('./routes/Home')
  .then(mod => ({ default: mod.Home })))
const Layout = lazy(() => import('./routes/Layout')
  .then(mod => ({ default: mod.Layout })))

const App = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
