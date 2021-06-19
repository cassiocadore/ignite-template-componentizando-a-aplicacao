import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { GenresProvider } from './hooks/useGenres';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenresProvider>
      <SideBar />

      <Content />
      </GenresProvider>
    </div>
  )
}