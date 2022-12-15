import React, { useState } from 'react'
import styles from './Body.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Editor from '../Editor/Editor';
const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];


    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };

  
      const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });

      console.log(resumeInformation)


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
     <div className={styles.main}>
      <Editor sections={sections} information={resumeInformation}/>
      
     </div>
    </div>
  )
}

export default Body