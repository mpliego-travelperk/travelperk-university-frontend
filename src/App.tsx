import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {RecipeDetail} from "./screens/RecipeDetail";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/recipe/:id" component={RecipeDetail}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
