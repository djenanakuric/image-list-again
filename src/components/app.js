import axios from "axios";
import React from "react";
import SearchInput from "./searchInput";
import ImageList from "./imageList"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {images: []}
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    async onSearchSubmit (entry) {
        console.log(entry);
       const response = await axios.get(`https://pixabay.com/api/?key=25281433-8da65b6e18d570a7e961edff7&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({images: response.data.hits})
    }
    render () {
        return (
            <div className="ui container" style={ {marginTop: '30px'} }> 
            <SearchInput onSearchSubmit={this.onSearchSubmit}/> 
            <ImageList images = {this.state.images}/>
            </div>
        )
    
    }
}

export default App;