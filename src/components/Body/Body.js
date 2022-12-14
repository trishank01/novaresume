import React from 'react'
import styles from './Body.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  return (
    <div className={styles.container}>
     <p className={styles.heading}>Resume Builder</p>
     <div className={styles.toolbar}>
        <div className={styles.colors}>
         {colors.map((color) => {
            return (
                <span key={color} style={{backgroundColor: color}} className={styles.item}/>
            )
         })}
        </div>
        <button>Download <AiOutlineArrowDown/> </button>
     </div>
    </div>
  )
}

export default Body