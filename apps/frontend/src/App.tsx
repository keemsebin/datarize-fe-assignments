import './App.css'
import { ClientQueryProvider } from './apis/ClientQueryProvider'
import { ShoppingPage } from './features/Shopping'
import { PageLayout } from './shared/components/PageLayout'

function App() {
  return (
    <ClientQueryProvider>
      <PageLayout>
        <ShoppingPage />
      </PageLayout>
    </ClientQueryProvider>
  )
}

export default App
