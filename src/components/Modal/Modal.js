import React, {useState} from "react";
import {postInfected} from '../../services/services';
import './Modal.scss';

const Modal = ({tittle, close, infected, setInfected}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [live, setLive] = useState(null);
    const [age, setAge] = useState("");
    const [female, setFemale] = useState(null);

    const changeFirstName = event => setFirstName(event.target.value);
    const changeLastName = event => setLastName(event.target.value);
    const changeCountry = event => setCountry(event.target.value);
    const changeAge = event => setAge(event.target.value);

    const add = () => {
        const newInfected = {
            'first_name':firstName,
            'last_name': lastName,
            'country': country,
            'live':live ,
            'age': age,
            'female':female
        };
        if(newInfected.first_name === "" || newInfected.first_name === "") {
            return alert("Error: Enter first and last name to add a new infected, please.")
        }else{
            postInfected(newInfected)
            .then(res => {
                const newList = [...infected];
                newList.push(newInfected);
                setInfected(newList);
                close();
            }).catch(err => alert("ERROR! post user"));
        }
        
    }

    const changeLive = (event) => event.target.checked === true ? setLive(true) : setLive(true);

    const changeFemale = (event) => event.target.value === 'female' ? setFemale(true) : setFemale(false);


    return (
        <React.Fragment>
            <div className="overlay"></div>
            <section className="modal">
                <header>
                    <h2>{tittle}</h2>
                    <button type="button" className="close" onClick={close}>X</button>
                </header>
                <article className="modal-content">
                    <form>
                        <label>First Name</label>
                        <input id="input-name" className="data" type="text" onChange={changeFirstName}/>

                        <label>Last Name</label>
                        <input id="input-lastname" className="data" type="text" onChange={changeLastName}/>

                        <label>Age</label>
                        <input id="input-country" className="data" type="text" onChange={changeAge}></input>

                        <label>Country</label>
                        <input id="input-country" className="data" type="text" onChange={changeCountry}></input>

                        <div className="wrap-live">
                            <label>Live</label>
                            <input id="live-checkbox" type="checkbox" onChange={changeLive}/>
                        </div>
                        
                        <select onChange={changeFemale}>
                            <option value="-1" selected disabled>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        
                    </form>
                    <footer>
                        <button id="add-button" type="button" className="btn" onClick={add}>Add</button>
                    </footer>
                </article>
            </section>
        </React.Fragment>
    )
};

export default Modal;