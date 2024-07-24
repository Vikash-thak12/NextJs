"use client"
import { FormEvent, useState } from "react"

export default function Home() {
    const [inputval, setInputval] = useState('');
    // console.log(inputval);

    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(inputval);
        setInputval("")
    }

  

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <h1 className="text-3xl mb-5">Enter your Name</h1>
            </div>
            <form onSubmit={handlesubmit} className="flex flex-col gap-5">
                <input
                className="px-4 py-2 rounded-lg bg-black"
                    value={inputval}
                    onChange={e => setInputval(e.target.value)}
                    type="text" placeholder="Enter your name" />
                <button className="bg-gray-600 px-4 py-2 rounded-md" type="submit">Submit</button>
            </form>
        </div>
    )
}