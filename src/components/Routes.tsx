import { h, Component } from 'preact';
import Router from 'preact-router';
import Dashboard from './Dashboard';

export default class Routes extends Component {

    render() {
        return (
            <Router>

                <Dashboard path="/" />

            </Router>
        )
    }

}