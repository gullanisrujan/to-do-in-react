import Contact from '../contact/Contact'
import { useSelector } from 'react-redux'
function AddContact() {
    let contacts = useSelector((state)=> state.contactreducer.contacts)
    return (
      <div >
        {console.log(contacts)}
       { contacts.map((e)=> 
        <Contact details={e} />
        )
       }
      </div>
    );
  }
  
  export default AddContact;
  