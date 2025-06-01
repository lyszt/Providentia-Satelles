// import { useState } from 'react'

import './App.css'




export default function App() {
    return (
        <main className="w-full bg-gray-400 h-full flex justify-items-center align-center">
            { // Chat component
                 }
            <form>
                <div className="w-50 m-auto">
                    <div className="w-100 p-4 flex row gap-3 justify-content-end">
                        <label className="w-25 m-10"> Chat </label>
                        <textarea className="w-100 h-100" placeholder="Talk to Providentia."/>
                        <input className="w-25" type="submit" value="Send"/>
                    </div>
                </div>
            </form>
        </main>
    );
}