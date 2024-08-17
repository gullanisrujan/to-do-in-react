export const contactreducer = (state={contacts : []},action) => {
    switch(action.type){
        case "ADD_CONTACT":
            return  {
                contacts : [...state.contacts,
                {
                    data:action.data.data,
                    id:action.data.id
                }]
            }
        case "DELETE_CONTACT":
            const newContacts = state.contacts.filter((e)=> e.id!=action.id)
            return {
                contacts: newContacts
            }
        default:
            return state;
    }

}