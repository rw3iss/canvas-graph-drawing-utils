import { h, Component, createRef } from 'preact';
import Button from '../../shared/Button';
import Graph from './Graph';
import MinMaxAvgWidget from './widgets/MinMaxAvgWidget';
import './style.scss';

export default class GraphPage extends Component {

    container = createRef();
    canvas = createRef();
    
    graph = undefined;

    state = {
        loading: true
    }

    componentWillMount() {
        this.bindEvents();
    }

    setDimensions() {
        let w = this.container.current.offsetWidth;
        let h = this.container.current.offsetHeight;

        if (this.props.minWidth) {
            w = Math.max([w, this.props.minWidth]);
        }

        if (this.props.minHeight) {
            h = Math.max([h, this.props.minHeight]);
        }

        this.canvas.current.setAttribute('width', w);
        this.canvas.current.setAttribute('height', h);
        this.graph.resize(w, h);
    }

    bindEvents() {
        window.onresize = (e) => this.setDimensions();
    }

    async componentDidMount() {
        this.graph = new Graph(this.canvas.current.getContext("2d"));
        this.setDimensions();

        // get and set data
        let data = await this.props.getData();
        this.graph.setData(data);
        this.graph.setMinMax(35000,55000); // todo: determine

        // add some widgets
        this.graph.addWidget(new MinMaxAvgWidget());

        // done
        this.setState({ loading: false });
    }

    render() {

        if (this.graph) 
            this.graph.render();
        
        return (
            <div class="graph" ref={this.container}>

                { this.state.loading && <div>Loading...</div> }

                <canvas ref={this.canvas} style={`opacity: ${this.state.loading ? 0 : 1}`} />

            </div>
        );
    }

}