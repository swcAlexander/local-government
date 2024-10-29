'use client'
import { useRef } from "react"

export default function Reduction() {
    return (
        <div className="tools-section__container">
            <h2>Зменшення PDF</h2>
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
                    id="compressPdfInput"
                    accept="application/pdf"
                    className="in-title" />
                Choose a file
                </label>
            </div>
            <button id="compressButton" className="tools-section__button">
                Зменшити розмір
            </button>
        </div>
    )
    
}