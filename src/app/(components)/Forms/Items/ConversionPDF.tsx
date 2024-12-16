'use client'
import { useRef } from "react"
import styles from './comparison.module.scss'

export default function ConvertingPDF() {
    return (
        <form className={styles.compareForm}>
          <h2>Конвертація PDF в JPEG</h2>
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
                id="convertPdfToJpegInput"
                accept="application/pdf"
                className="tools-section__input" />
              Choose a file
            </label>
          </div>

          <button type="submit" id="convertPDFToJPEG" className="tools-section__button">
            Конвертувати в JPEG
          </button>
        </form>
    )
    
}