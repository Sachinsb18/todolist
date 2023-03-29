import React from 'react'
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem(props) {
   const items=props.items;
   const listItem=items.map(item=>{
    return <div className="list" key={item.key}>
       <p>
         <input type="text" id={item.text} value={item.text} />
        <span>
        <FontAwesomeIcon className='faicons' icon='trash' 
          onClick={()=>props.deleteItem(item.key)}
        />
       </span>
       </p>
      
      </div>
   })
  
  return (
    <div>{listItem}</div>

  )
}

export default ListItem
