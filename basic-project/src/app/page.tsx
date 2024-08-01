"use client"
import { FormEvent, useState } from "react"
import { useRouter } from 'next/navigation'


export default function Home() {
  const [inputval, setInputval] = useState('');
  const { push } = useRouter();
  // console.log(inputval);

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputval);
    setInputval("")
    push(`predection/${inputval}`)
  }



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-600 p-4 rounded-2xl">
        <h1 className="text-3xl mb-5">Enter your Name</h1>
        <form onSubmit={handlesubmit} className="flex flex-col gap-5">
          <input
            className="px-4 py-2 rounded-lg bg-black outline-none"
            value={inputval}
            onChange={e => setInputval(e.target.value)}
            type="text" placeholder="Enter your name" />
          <button className="bg-red-600 px-4 py-2 rounded-md" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}