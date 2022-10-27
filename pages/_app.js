import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AppProvider } from "../context/appContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AppProvider>
  );
}

export default MyApp;
