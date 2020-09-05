import React,{useState} from 'react';
import styles from './IndividualCard.module.css';
import {CardDetailModal} from './CardDetailModal/CardDetailModal';


function IndividualCard({card,board,column,handleEdit,handleArchive}) {

  const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
   const convertDate = date => {
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  }; 
   
  function TeamRetreival({name}) {
    
    const arr = name.split(' ');
    let abbr = '';
    arr.forEach(element => {
    abbr += element.charAt(0);
    });
    return <div className={styles.circle}>{abbr}</div>;
}

  const [cardDetailModal,setCardDetailModal]=useState(false);
  const members = card.teamMembers.map(name => <TeamRetreival name={name} key={name} />);
  const date = new Date(card.date);
  const dueDate = convertDate(date);

  function cardEditHandler(){
    setCardDetailModal(false);
    handleEdit();
    
  }

  function cardArchiveHandler(){
    setCardDetailModal(false);
    handleArchive();
  }
  const detailsModal = (
    
      <CardDetailModal>
      
      <div className={styles.modalHeader}>
        <div className={styles.title}>
          {card.title}
          <div className={styles.meta}>
            in <span>{board}</span>
          </div>
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.editBtn} onClick={cardEditHandler}>
            Edit
          </button>
          <button className={styles.archBtn} onClick={cardArchiveHandler}>
            Archive
          </button>
        </div>
        <div className={styles.modalClose} onClick={() => setCardDetailModal(false)}>
          &times;
        </div>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.det}>
          <header>Description</header>
          <div>{card.description}</div>
        </div>
        <div className={styles.det}>
          <header>Members</header>
          <div className={styles.detTeam}>{members}</div>
        </div>
        <div className={styles.det}>
          <header>Due Date</header>
          <div>{dueDate}</div>
        </div>
      </div>
      
      </CardDetailModal>
    
  );

  function dragStart(event,card){
    event.dataTransfer.setData("card",JSON.stringify(card));
    event.dataTransfer.setData("columnFrom",JSON.stringify(column))
  }
    return (
        <>
        
          <li
          draggable="true"
          onDragStart={(e)=>dragStart(e,card)}
          className={styles.item}
          onClick={()=>setCardDetailModal(true)}
        > 
        <div className={styles.text}>{card.title}</div>
        <div className={styles.actions}>
          <div className={styles.actionBtn}>
            <i
              className="material-icons"
              style={{ fontSize: '30px', cursor: 'move' }}
            >
              list
            </i>
            
          </div>
          <div className={styles.team}>{members}</div>
        </div>
        </li>
          
          {cardDetailModal&&detailsModal}
        
        </>   
    )

  }

export default IndividualCard
