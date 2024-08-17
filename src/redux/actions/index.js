export const addContact = (data)=>{
    return{
        type : "ADD_CONTACT",
        data: {
            data:data,
            id: new Date().getMilliseconds().toString()
        }
    }
}

export const deleteContact = (id)=>{
    return{
        type : "DELETE_CONTACT",
        id:id
    }
}
