import { AuthProvider } from "./hooks/useAuth";
import CustomRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return(
    <AuthProvider>
      <Header />
      <CustomRoutes />
      <Footer />
    </AuthProvider>
  )
}

export default App