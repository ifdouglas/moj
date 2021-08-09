import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import Pad from 'containers/Pad'
import Styled from './styled'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      enabled: true,
      retry: 1,
      retryDelay: 5000,
    },
  },
})

const App = () => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Styled.App>
        <Pad />
      </Styled.App>
    </QueryClientProvider>
  </RecoilRoot>
)

export default App
