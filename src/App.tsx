import React from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import {RecipeDetail} from "./screens/RecipeDetail";
import {RecipeList} from "./screens/RecipeList";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/recipe/new" component={RecipeDetail}/>
                    <Route path="/recipe/:id" component={RecipeDetail}/>
                    <Route path="/recipe" component={RecipeList}/>
                    <Route>
                        <Redirect to="/recipe"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
