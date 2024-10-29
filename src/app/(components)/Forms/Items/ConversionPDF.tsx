'use client'
import { useRef } from "react"

export default function ConvertingPDF() {
    return (
        <div className="tools-section__container">
          <h2>Конвертація PDF в JPEG</h2>
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
                id="convertPdfToJpegInput"
                accept="application/pdf"
                className="tools-section__input" />
              Choose a file
            </label>
          </div>

          <button id="convertPDFToJPEG" className="tools-section__button">
            Конвертувати в JPEG
          </button>
        </div>
    )
    
}