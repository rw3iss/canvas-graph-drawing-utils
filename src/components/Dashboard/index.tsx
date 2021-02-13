import { h, Component, createRef } from 'preact';
import Button from '../../shared/Button';
import Graph from '../shared/Graph';
import './style.scss';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Dashboard extends Component {

    state = {
    }

    constructor() {
        super();
    }

    loadData() {
        return new Promise((resolve, reject) => {
            let pointCount = 20;
            let data = [];

            for (let i = 0; i < pointCount; i++) {
                data.push({ x: i, y: getRandomInt(40000,50000) });
            }

            return resolve(data);
        });
    }

    render() {
        return (
            <div class="page" id="dashboard">

                <div class="container">

                    <Graph getData={this.loadData} />

                </div>

            </div>
        );
    }

}