'use client'
import { useRef } from "react"
import styles from './comparison.module.scss'

export default function Merging() {
    return (
    <form className={styles.compareForm}>
        <h2>Об'єднання PDF</h2>
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
                id="mergePdfInput"
                accept="application/pdf"
                className="in-title" />
            Choose a file
            </label>
        </div>

        <button type="submit" id="compressMerge" className="tools-section__button">
            Об'єднати
        </button>
        <ul id="fileList"></ul>
        {/* Список доданих файлів */}
    </form>
    )
    
}