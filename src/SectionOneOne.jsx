
import { useState, useEffect } from "react";

function SectionOneOne(props){
    
    //here i tell jsx not to use individual states and set this in a group.
    //data=currentState - setData=updateState
    const [data, setData] = useState({ 
        fullname: props.fullname,
        email: props.email,
        phone: props.phone
    });

    const fullname = data.fullname;
    const email = data.email;
    const phone = data.phone;


    useEffect(() => {
        console.log("render")
    }, [setData])

    

    //default info filled out with each element <SectionOne />
    //I could not get this to work right resorted to hardcode props
    /*SectionOne.defaultProps = {
        fullname: "Guest",
        email: "johndoe@gmail.com",
        phone: 1213435566
    }*/


    //button under my inputs needs to change above values
    /*function handleInputChange(event){
        event.preventDefault()
        const {name, value} = event.target
    
        setData((prevFormData) => ({
            //copy current state then update properties
            ...prevFormData,
            [name]: value,
            }));
    }*/

    //button under my inputs needs to change above values
    function handleFullnameChange(event){
        
        setData({
            ...data,
            fullname: event.target.value
            })};

    function handleEmailChange(event){
        event.preventDefault()
        
        setData({
            ...data,
            email: event.target.value
            })};

    function handlePhoneChange(event){
        event.preventDefault()
        
        setData({
            ...data,
            phone: event.target.value
            })};
    
    

    function handleSubmit(event){
        event.preventDefault()
        handleFullnameChange(event)
        handleEmailChange(event)
        handlePhoneChange(event)
        console.log(data, "line 36")
    }

   
    

    //button under html text. I need a way to edit this content
    function handleEdit(event){
        //event.preventDefault()
        alert("edit works for data update")

        console.log(setData)
        
    }

    //where react returns the working code
    return(
        //always need to nest content 1 main div
        <>
            <div>
                <p>Name:{fullname}</p>
                <p>email:{email}</p>
                <p>phone:{phone}</p>
                <button onClick={handleEdit}>Edit Info</button>

            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="name" type="text" name="fullname" value={fullname} onChange={handleFullnameChange} ></input> <br/>
                    <input placeholder="email" type="email" name="email" value={email} onChange={handleEmailChange}  ></input> <br/>
                    <input placeholder="phone" type="phone" name="phone" value={phone} onChange={handlePhoneChange}  ></input> <br/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </>
    )
}


export default SectionOneOne