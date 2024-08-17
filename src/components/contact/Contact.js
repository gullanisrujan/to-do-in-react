import { useDispatch } from "react-redux"
import { deleteContact } from '../../redux/actions/index'
function Contact({details}) {
  const dispatch = useDispatch()
  return (
    <div className="App">
        <h1>{details.data}<span><button className="btn bg-danger" onClick={()=>dispatch(deleteContact(details.id))}> delete</button></span></h1>
    </div>
  );
}

export default Contact;
