import "./styles.css";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import Portfolio from "./components/Pages/Portfolio.jsx";
import Resume from "./components/Pages/Resume.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
export default function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid item lg={9} md={6} sm={12} xs={12}>
          <Router>
            <Header />
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
