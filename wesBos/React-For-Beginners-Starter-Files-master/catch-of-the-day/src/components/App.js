import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    //using property to set state
    state = {
        fishes:{},
        order:{}
    };
    //syntax is different cause we are going to access "this" instead of using bind
    //updating state using setState in 3 steps
    addFish = (fish) => {
        // 1. take a copy of the exsiting state using object spread
        const fishes = {...this.state.fishes};
        // 2. add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    };
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };
    addToOrder = (key) => {
        // 1. take copy of state
        const order = {...this.state.order};
        // 2. Either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our state object
        this.setState({
            order:order
        })
    }
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = "Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key=> 
                        <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} /> )}
                    </ul>
                </div>
                <Order fishes = {this.state.fishes} order = {this.state.order} />
                {/* passing addFish to Inventory */}
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    };
    

};

export default App;