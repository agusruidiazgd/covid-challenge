import React, {useEffect, useState} from 'react';
import InfectedTable from '../components/Tables/InfectedTable';
import InfectedChart from '../components/InfectedChart/InfectedChart';
import {getInfected,sortByAge} from '../services/services';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Modal from '../components/Modal/Modal';
import './pages.scss';


const Infected = ({infected, setInfected}) =>{
    const [order, setOrder] = useState(false);
    const [displayNewInfectedModal, setDisplayNewInfectedModal] = useState(false);

    const addInfected = () =>{
        setDisplayNewInfectedModal(true);
    }

    useEffect(() => {
        const promise = getInfected();
        promise.then(data => { 
            setInfected(data);
        });
    }, []);

    const changeOrder = async() =>{
        setOrder(!order);
        if(order === false){
            const promise = getInfected();
            promise.then(data => { 
                setInfected(data);
            });
        }else{
            sortByAge(infected);
        }
        
    }

    const sortByAge = (data) =>{
        const orderedData = [...data].sort((a,b)=>{
            return Number(a.age) - Number(b.age);
        })
        setInfected(orderedData);
        return orderedData;
    }

    return(
        <section className="page">
            <header className="page-header">
                <h3>INFECTED LIST</h3>
            </header>
            {
                displayNewInfectedModal ?
                <Modal 
                    tittle = {'Add new Infected'} 
                    close = {() => setDisplayNewInfectedModal(false)} 
                    infected = {infected}
                    setInfected = {setInfected}
                />
                :
                null  
            } 
            <main className="page-content">
                <div className='button-container'>
                    <button onClick={changeOrder}>Order by age</button>
                    <button onClick={addInfected}>Add an infected</button>
                    <ReactHTMLTableToExcel 
                        id='export-excel'
                        className='btn-export'
                        table='infected-table'
                        filename='infectedtable'
                        sheet='hoja 1'
                        buttonText='Export to Excel'
                    />
                </div>
                
                <div className='table-chart-container'>
                    <InfectedChart infected={infected}/>
                    <InfectedTable infected={infected}/>
                </div>
            </main>
        </section>
    )

}

export default Infected;
