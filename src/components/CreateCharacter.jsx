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
        
        props.createCharacters(character)

        setName("");
        setImage_URL("");
        setLane("");
        setDescription("");
    }
    return (
        <div className="character-form">
            <h3> Create a character! </h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    name="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                /><br/>
                <label> Image URL: </label>
                <input
                    name="image_url"
                    type="text"
                    onChange={(e)=> setImage_URL(e.target.value)}
                    value={image_url}
                /><br/>
                <label>Lane: </label>
                <input
                    name="lane"
                    type="text"
                    onChange={(e)=> setLane(e.target.value)}
                    value={lane}
                /><br/>
                <label>Description:</label>
                <input
                    name="description"
                    type="text"
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                /><br></br>
                <input type="submit" value="Create Character"/>
            </form>
        </div>
    )
}
export default connect(null, { createCharacters })(CharacterCreate)