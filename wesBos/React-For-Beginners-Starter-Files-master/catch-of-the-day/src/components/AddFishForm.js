import React from 'react';

class AddFishForm extends React.Component {
    //pulling values from forms using refs
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    
    createFish = (e) => {
        // 1. stop the form form submitting
        e.preventDefault();
        // 2. store values of form into fish object
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        };
        //call addFish from the main App component and passing fish object
        this.props.addFish(fish);
        
        //refresh the form
        e.currentTarget.reset();
    };

    
    render() {
        return (
            <form className="fish-edit" onSubmit = {this.createFish} >
                <input name="name" ref={this.nameRef} type ='text' placeholder = 'Name'/>
                <input name="price" ref={this.priceRef} type ='text' placeholder = 'Price'/>
                <select name="status"ref={this.statusRef} >
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc"ref={this.descRef}  type ='text' placeholder = 'Desc'/>
                <input name="image" ref={this.imageRef} type ='text' placeholder = 'Image'/>
                <button type='submit' >+ Add Fish</button>

            </form>
        )
    }
}

export default AddFishForm;