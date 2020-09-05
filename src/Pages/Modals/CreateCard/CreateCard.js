import React,{useState,useEffect} from 'react';
import styles from  './CreateCard.module.css';
import Backdrop from '../Backdrop/Backdrop';

function CreateCard(props) {

    const{card,isAdd}=props;
    
    const[cardTitle,setCardTitle]=useState('');
    const[cardDesc,setCardDesc]=useState('');
    const[cardDueDate,setDue]=useState('');
    const[cardMembers,setCardMembers]=useState([]);

    useEffect(() => {
        if (card) {
          setCardTitle(card.title);
          setCardDesc(card.description);
          setCardMembers(card.teamMembers);
          const date = new Date(card.date);
          setDue(date.toISOString().substr(0, 10));
          
        }
      }, [isAdd, card]);
    
    const teamHandler=(e)=>{
        const values = [...e.target.selectedOptions].map(x => x.value);
        setCardMembers(values);
    }
    
    const dueDate=(e)=>{
        const today = new Date().toISOString().slice(0,10);
        if(e.target.value<today){
            alert("You cant select past date");
        }
        else{
            setDue(e.target.value);
        }
        
    }

    function addCardHandler(e){
        e.preventDefault();
        const card = createCard(cardDueDate,cardTitle,cardMembers,cardDesc);
        props.addCard(card);
        
    }
     function editCardHandler(e){
        e.preventDefault();
        const card = createCard(cardDueDate,cardTitle,cardMembers,cardDesc);
        props.handleEdit(card);
        
     }
    
     return (
        <div>

         {
             <>
         <Backdrop/>  
         <form onSubmit={(e)=>addCardHandler(e)} className={styles.cardModal}>
                <div className={styles.colHeader}>
                    <span className={styles.top}>{(props.isAdd)?"Add Card":"Edit Card"}</span>
                    <button onClick={()=>props.closeCardModal()} id={styles.close}>x</button>
                </div> 
                <div className={styles.cardTitle}>
                <p id={styles.ptag}>Enter a title for your task</p>
                <input required value={cardTitle} onChange={(e)=>setCardTitle(e.target.value)} type="text" id={styles.title} placeholder="eg.Add a new icon"></input>
                </div>  
                <div className={styles.cardMembers}>
                     <p id={styles.ptag}>Choose members for this task,(select multiple if needed)</p> 
                        <select
                        multiple={true}
                        onChange={teamHandler}
                        className={styles.team}
                        id="team" 
                        value={cardMembers} 
                        name="team" 
                        >
                        {props.teamMembers.map(x=>(
                        <option value={x} key={x}>
                        {x}
                        </option>
                         ))}
                        </select>
                        </div>
                <div className={styles.cardDesc}>
                <p id={styles.ptag}>Add the description for your task</p> 
                <input value={cardDesc} required onChange={(e)=>setCardDesc(e.target.value)} 
                       type="text" id={styles.description} 
                       placeholder="eg.Add your description here">
                </input>  
                </div>
                <div className={styles.cardDate}>
                <p id={styles.ptag}>Select the due date for this task</p>   
                <input value={cardDueDate} required onChange={dueDate} 
                       type="date" 
                       id={styles.due_date}>
                </input>
                </div>
                <div className={styles.cardBtn}>
                {(props.isAdd)?
                (<button type="submit"  id={styles.CreateCard}>Add Card</button>) 
               :( <button onClick={(e)=>editCardHandler(e)}  id={styles.CreateCard}>Edit Card</button>)  }
                </div>
                </form >
                </>}
                
        </div>
    )
}

export default CreateCard;

function createCard(dueDate, title, teamMembers, description) {
    const date = new Date(dueDate).getTime();
    return {
      title,
      description,
      teamMembers,
      date,
      isArchive: false
    };
  }