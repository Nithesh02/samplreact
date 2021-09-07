import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';

function Router() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/' component={Error404}/>
                <Redirect to ='/404' />

            </Switch>
        </div>
    )
}



export default Router;