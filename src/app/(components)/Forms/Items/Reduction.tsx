'use client'
import { useRef } from "react"
import styles from './comparison.module.scss'

export default function Reduction() {
    return (
        <form className={styles.compareForm}>
            <h2>Зменшення PDF</h2>
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
                    id="compressPdfInput"
                    accept="application/pdf"
                    className="in-title" />
                Choose a file
                </label>
            </div>
            <button type="submit" id="compressButton" className="tools-section__button">
                Зменшити розмір
            </button>
        </form>
    )
    
}