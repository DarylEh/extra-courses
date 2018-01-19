import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyCS8kD6lDWohsJrxiCMsjmiiu19a9S2Gzk';

//Create a new component.  This component should produce some HTML



class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            videos:[]
        };
        YTSearch({ 
            key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({
                videos
            });
        });
    }
    render() {
    return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
    );
}
}
//Take this component's generated HTML an put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));