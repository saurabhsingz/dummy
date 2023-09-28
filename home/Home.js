import "./home.module.css";
import Navbar from "../Navbar/Navbar";
import Row2 from "./Row2.js";
import Row3 from "./Row3";
import Footer from "../footer/footer";
import { Container } from "@mui/material";
import Scurve from "./scurve";

function Home() {
  return (
    <Container>
      <div className="main-container">
        <Navbar />
        <Scurve />
        <Row2 />
        <Row3 />
        <Footer />
      </div>
    </Container>
  );
}

export default Home;
