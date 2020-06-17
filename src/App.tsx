import React from 'react';
import {Route, Switch, BrowserRouter as Router, Redirect, Link} from 'react-router-dom';
import {RecipeDetail} from "./screens/RecipeDetail";
import {RecipeList} from "./screens/RecipeList";
import {Nav} from "./components/Nav"

function App() {
    return (
        <div className="App">
            <Router>
                <Nav.Container key="nav">
                    <Nav.Link key="recipe-list">
                        <Link to={'/recipe'}>Recipes</Link>
                    </Nav.Link>
                    <Nav.Link key="recipe-new">
                        <Link to={'/recipe/New'}>New Recipe</Link>
                    </Nav.Link>
                </Nav.Container>
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
