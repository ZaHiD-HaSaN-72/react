import React from 'react'
import { useState } from 'react'

const App = () => {
const [name, setname] = useState("");
const [age, setage] = useState("");
const [Dep, setDep] = useState("");
const [StudentData, setStudentData] = useState([]);
const deleteHandler = (i)=>{
   let copyData =[...StudentData]
   copyData.splice(i);
   setStudentData(copyData);
}

  const addHandler = (e)=>{
    e.preventDefault()
    setStudentData([...StudentData,{name, age, Dep}]);
    setname("")
    setage("")
    setDep("")
    }

let addStudent = <h3>NO Student</h3>

 if (StudentData.length>0) {
  addStudent = StudentData.map((t,i)=>{
    return <div key={i} className='border-2 p-4 rounded my-2'>
      <h1>Name: {t.name}</h1>
      <h2>Age: {t.age}</h2>
      <h2>Department: {t.Dep}</h2>
      <button
      onClick={()=>{
        deleteHandler(i)
      }}
      className='py-1 px-3 bg-red-600 rounded mt-4'>Delete</button>
    </div>
  })
 }
  return (
    <>

    <h1 className='
    text-5xl font-bold text-center bg-slate-400 py-6 
    '>
      Student list</h1>
    <div className='w-full my-7 py-4 '>
      <h2 className='text-center font-bold text-4xl my-4'>Add student here</h2>
      <form onSubmit={addHandler} className='flex gap-3 flex-col w-[30%] mx-auto p-8 bg-teal-700 rounded-md my-4'>
        <input 
        type="text" 
        placeholder='Student name'
        className='border-2 border-black rounded p-2 '
        value={name}
        onChange={(e)=>{
          setname(e.target.value)
        }}
        />
        <input 
        type="text" 
        placeholder='Student age' 
        className='border-2 border-black rounded p-2 '
        value={age}
        onChange={(e)=>{
          setage(e.target.value)
        }}
        />
        <input 
        type="text" 
        placeholder='Department' 
        className='border-2 border-black rounded p-2 '
        value={Dep}
        onChange={(e)=>{
          setDep(e.target.value)
        }}
        />
        <button
        className='py-2 px-3 bg-slate-800 text-white rounded'        
        >Add</button>
      </form>
      <hr />
      <div className='p-7 bg-sky-600 text-white my-4'>
            <ul >
              {addStudent}
            </ul>
      </div>
    </div>
      
    </>
  )
}

export default App




