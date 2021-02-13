import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import './style.scss';

export default class SiteHeader extends Component {

    render() {
        return (
            <nav id="site-header">

                <div class="inner">

                    <Link href="/" class="logo">Bitcoin Bot</Link>

                    <div class="nav-items flex-row flex-center">
                    </div>

                </div>

            </nav>
        )
    }

}