'use client'
import { useRef } from "react"

export default function ConvertingJPEG() {
    return (
        <div className="tools-section__container">
          <h2>Конвертація JPEG в PDF</h2>
          <div className="in-container">
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
                id="convertJpegToPdfInput"
                accept="image/jpeg"
                className="tools-section__input" />
              Choose a file
            </label>
          </div>

          <button id="convertJPEGToPDF" className="tools-section__button">
            Конвертувати в PDF
          </button>
        </div>
    )
    
}