
import { useState, useEffect } from "react";
import './SectionOne.css'


function SectionOne(props){

    const defaultValue = {
        fullname: props.fullname,
        email: props.email,
        phone: props.phone,
        school: props.school,
        degree: props.degree,
        dateFinished: props.dateFinished,
        position: props.position,
        company: props.company,
        task: props.task,
        dateshired: props.dateshired,
    }

    const [data, setData] = useState({
        inputValues: defaultValue,
        previousName: defaultValue,
        currentName: defaultValue,
        isCurr: true})


    function handleInputChange(name, event){
        setData({
            ...data,
            inputValues: {
                ...data.inputValues,
                [name]: event.target.value,
            },
        })
        console.log("new data", data)
    }

    function handleSubmit(event){
        //event.preventDefault()
        /*console.log(data)

        setData({
            ...data,
            isCurr: true,
        })*/
        const {currentName, inputValues, previousName } = data;

        setData({
            ...data,
            previousName: currentName,
            currentName: inputValues,
            isCurr: true,
        })
        console.log("data", data)
    }
    
    function previous(event){
        event.preventDefault()
        console.log(event)
        console.log(data)

        /*setData({
            ...data,
            isCurr: false, 
            
        })*/
        const { previousName, currentName } = data;
        setData({
           
            currentName: previousName,
            previousName: currentName,
            isCurr: false,
        }) 
    }  
    
    function clear(){
        setData({
          previousName: defaultValue,
          currentName: defaultValue,
          inputValues: defaultValue,
          isCurr: true
        })
      }

    
    useEffect(() => {
        console.log("render",)
    }, [setData])


    return (    
    <>
        <div> 
                {data.isCurr ? (
                        <div className="output">
                           <p>Name: {data.inputValues.fullname}</p>
                           <p>Email: {data.inputValues.email}</p>
                           <p>Phone: {data.inputValues.phone}</p>
                           <p>School: {data.inputValues.school}</p>
                           <p>Degree: {data.inputValues.degree}</p>
                           <p>Finished: {data.inputValues.dateFinished}</p>
                           <p>Position: {data.inputValues.position}</p>
                           <p>Company: {data.inputValues.company}</p>
                           <p>Tasks: {data.inputValues.task}</p>
                           <p>Date Hired: {data.inputValues.dateshired}</p>
                        </div>
                    ) : ( 
                        <div className="output">
                            <p>Name: {data.currentName.fullname}</p>
                            <p>Email: {data.currentName.email}</p>
                            <p>Phone: {data.currentName.phone}</p>
                            <p>School: {data.currentName.school}</p>
                            <p>Degree: {data.currentName.degree}</p>
                            <p>Finished: {data.currentName.dateFinished}</p>
                            <p>Position: {data.currentName.position}</p>
                            <p>Company: {data.currentName.company}</p>
                            <p>Task: {data.currentName.task}</p>
                            <p>Date Hired: {data.currentName.dateshired}</p>
                        </div>
                    )
                } 
        </div>


        <br/> <br/> 
        
        <div className="sectOne">
        <h3>Applicant Info</h3>
            <input 
                placeholder="name"
                type="text"
                name="fullname"
                onChange={(e) => handleInputChange("fullname", e)}
            />
            <input
                placeholder="email"
                type="email"
                pattern=".+@example\.com"
                required
                name="email"
                onChange={(e) => handleInputChange("email", e)}
            />
            <input
                placeholder="phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                name="phone"
                onChange={(e) => handleInputChange("phone", e)}
            />

            <h3>School Info</h3>

            <input
                placeholder="school name"
                type="text"
                required
                name="school"
                onChange={(e) => handleInputChange("school", e)}
            />
            <input
                placeholder="Degree Name"
                type="text"
                required
                name="degree"
                onChange={(e) => handleInputChange("degree", e)}
            />
            <input
                placeholder="Date Finished"
                type="text"
                required
                name="dateFinished"
                onChange={(e) => handleInputChange("dateFinished", e)}
            />

            <h3>Past Employment</h3>

             <input
                placeholder="position"
                type="text"
                required
                name="position"
                onChange={(e) => handleInputChange("position", e)}
            />
            <input
                placeholder="company"
                type="text"
                required
                name="company"
                onChange={(e) => handleInputChange("company", e)}
            />
            <input
                placeholder="task"
                type="text"
                required
                name="task"
                onChange={(e) => handleInputChange("task", e)}
            />
            <input
                placeholder="dateshired"
                type="text"
                required
                name="dateshired"
                onChange={(e) => handleInputChange("dateshired", e)}
            />
            <br />
            <div className="buttonHolder">
                <button onClick={handleSubmit} className="infoButton">Submit</button>
                <button onClick={previous} className="previous">Previous</button>
                <button onClick={clear} className="previous">Clear</button>
            </div>
        </div>
 
    </>
    )
}


export default SectionOne


//1. A section to add general information like name, email and phone number.

/*Be sure to include an edit and submit button for each section or for the whole CV. 
The submit button should submit your form and display the value of your input fields
 in HTML elements. The edit button should add back (display) the input fields, with 
 the previously displayed information as values. In those input fields, you should be 
 able to edit and resubmit the content. You’re going to make heavy use of state and 
 props, so make sure you understood those concepts.*/