import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // each class needs a method
    
    
    myInput = React.createRef();
    
    goToStore = (e) => {
        //1. stop the form from submitting
        e.preventDefault();
        // 2. get the text from the input
        const storeName =  this.myInput.value.value;
        // 3. Change the page to /store/whatever-is-entered
        this.props.history.push(`/store/${storeName}`);

    }

    render() {
        return (
        <React.Fragment>
            <form action="" className="store-selector" onSubmit={this.goToStore} >
                <h2>Please Enter a Store</h2>
                <input 
                    type="text" 
                    required placeholder = "Store Name" 
                    defaultValue={getFunName()}
                    ref = {this.myInput}
                />
                <button type="submit" >Visit Store  </button>
            </form>
        </React.Fragment>

        )
    }
}

export default StorePicker;