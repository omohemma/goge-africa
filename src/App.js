import './App.css';
import {Box} from "@mui/material";
import Index from "./pages";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <Box>
      <Switch>
        <Route exact path="/" component={Index}/>
      </Switch>

    </Box>
  );
}

export default App;
