import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState<any>([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  const onhandleRemove = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa")) {
      fetch(`http://localhost:3000/products/{id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => setProducts(products.filter((product: any) => product.id !== id)))
    }
  }
  return ( 
    <>
      <div>
        {products.map((item: any, index: number) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <button onClick={() => onhandleRemove(item.id)}>Remove</button>
          </div>
        )
        )}
      </div>
    </>
  )

  // const [job, setJob] = useState('')
  // const [jobs, setJobs] = useState(() => {
  //   const storageJobs = localStorage.getItem('jobs');
  //   return storageJobs ? JSON.parse(storageJobs) : [];
  // });

  // console.log(jobs);  

  // const handleAdd = () => {
  //   setJobs(prev => {
  //     const todoObj = { id: Math.floor(Math.random() * 1000), title: job };
  //     const newJobs = [todoObj, ...prev, job]
  //     const jsonJobs = JSON.stringify(newJobs)
  //     localStorage.setItem('jobs', jsonJobs)
  //     return newJobs
  //   })
  //   setJob('')
  // }
  // const toggleTask = (todoid: number) => {
  //   const todoArr = [...jobs];
  //   const ftodo = todoArr.find((td) => td.id == todoid)
  //   ftodo.completed = !ftodo.completed ? true : !ftodo.completed;
  //   setJobs([...todoArr])
  // }
  // return (
  //   <>
  //     <div className='todoapp'>
  //       <h1>To do list </h1>
  //       <input value={job} onChange={e => setJob(e.target.value)} />
  //       <button onClick={handleAdd}>Add</button>
  //       <div className='todolist'>

  //         {jobs.map((job) => (

  //           <div className={job.completed ? "todoitem complete" : " todoitem"} key={ jobs.id}>
  //             <span onClick={()=>toggleTask(job.id)} >{job.title}</span>
  //           </div>

  //         ))}
  //       </div>
  //     </div>
  //   </>
  // )
}

export default App
