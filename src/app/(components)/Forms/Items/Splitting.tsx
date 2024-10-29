'use client'
import { useRef } from "react"

export default function Splitting() {
    return (
        <div className="tools-section__container">
          <h2>Роз'єднання PDF</h2>
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
                id="splitPdfInput"
                accept="application/pdf"
                className="tools-section__input" />
              Choose a file
            </label>
          </div>

          <button id="compressSplit" className="tools-section__button">
            Роз'єднати
          </button>
        </div>
    )
    
}