import { useState } from "react";
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/actions/index"

function AddContact() {

    const [contact, setContact] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="App" >
            <h3>Add Contact Form</h3>
            <input type='text' onChange={(e) => {
                setContact(e.target.value)
            }} value={contact} ></input>
            <button onClick={() => {
                dispatch(addContact(contact));
                setContact('')
            }} >add</button>
        </div>
    );
}

export default AddContact;
