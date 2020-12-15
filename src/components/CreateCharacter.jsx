import React, { useState } from "react";
import { connect } from "react-redux";
import { createCharacters } from "../actions/CharactersActions.jsx";

function CharacterCreate(props) {
    const [name, setName] = useState("");
    const [image_url, setImage_URL] = useState("");
    const [lane, setLane] = useState("");
    const [description, setDescription] = useState("");
    
    
    const handleSubmit = e => {
        e.preventDefault();
        const character = {
            name: name,
            image_url: image_url,
            lane: lane,
            description: description
        }

        console.log("a")
        props.createCharacters(character)
        console.log("b")
        
        setName("");
        setImage_URL("");
        setLane("");
        setDescription("");
    }
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <div className="character-form">
            <h3> Create a Champion! </h3>
            <form onSubmit={handleSubmit}>
                <label>Champion Name:</label>
                <input 
                    style={BarStyling}
                    placeholder="Champion Name"
                    name="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                /><br/>
                <label> Image URL: </label>
                <input
                    style={BarStyling}
                    placeholder="Image URL"
                    name="image_url"
                    type="text"
                    onChange={(e)=> setImage_URL(e.target.value)}
                    value={image_url}
                /><br/>
                <label>Champion Lane: </label>
                <input
                    style={BarStyling}
                    placeholder="Champion Lane"
                    name="lane"
                    type="text"
                    onChange={(e)=> setLane(e.target.value)}
                    value={lane}
                /><br/>
                <label>Champion Description:</label>
                <input
                    style={BarStyling}
                    placeholder="Champion Description"
                    name="description"
                    type="text"
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                /><br></br>
                <input 
                    variant="outline-primary"
                    type="submit" 
                    value="Create Character"
                />
            </form>
        </div>
    )
}
export default connect(null, { createCharacters })(CharacterCreate)