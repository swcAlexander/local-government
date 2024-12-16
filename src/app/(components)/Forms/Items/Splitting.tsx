'use client'
import { useRef } from "react"
import styles from './comparison.module.scss'

export default function Splitting() {
    return (
        <form className={styles.compareForm}>
          <h2>Роз'єднання PDF</h2>
          <div className={styles.tooltip}>
            <div className="in-folder">
              <div className="front-side">
                <div className="tip"></div>
                <div className="cover"></div>
              </div>
              <div className="back-side cover"></div>
            </div>
            <label className="custom-file-upload">
              <input
                type="file"
                id="splitPdfInput"
                accept="application/pdf"
                className="tools-section__input" />
              Choose a file
            </label>
          </div>

          <button type="submit" id="compressSplit" className="tools-section__button">
            Роз'єднати
          </button>
        </form>
    )
    
}