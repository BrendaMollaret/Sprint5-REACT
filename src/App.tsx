import { Container, ToastContainer } from "react-bootstrap";
import { CarritoProvider } from "./components/CarritoProvider/CarritoProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <CarritoProvider>
          <Header />
          <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
            <Suspense fallback={<Loader/>}>
              <AppRoutes/>
            </Suspense>
          </Container>
          <Footer />
        </CarritoProvider>
      </Router>
    </>
  );
};

export default App;
