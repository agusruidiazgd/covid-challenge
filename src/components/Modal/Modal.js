import React, {useState} from "react";
import {postInfected} from '../../services/services';
import './Modal.scss';

const Modal = ({tittle, close, infected, setInfected}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [live, setLive] = useState(false);
    const [age, setAge] = useState("");
    const [female, setFemale] = useState(true);

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

        postInfected(newInfected)
        .then(res => {
            const newList = [...infected];
            newList.push(newInfected);
            setInfected(newList);
            close();
        }).catch(err => alert("ERROR! post user"));
    }

    return (
        <React.Fragment>
            <div className="overlay"></div>
            <section className="modal">
                <header>
                    <h2>{tittle}</h2>
                    <button type="button" onClick={close}>X</button>
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

                        <label>Live</label>
                        <span>
                            <input id="input-date" type="checkbox" name="date"/>
                            <input id="input-date" type="checkbox" name="date"/>
                        </span>
                        
                    </form>
                    <footer>
                        <button id="add-button" type="button" class="btn" onClick={add}>Add</button>
                    </footer>
                </article>
            </section>
        </React.Fragment>
    )
};

export default Modal;