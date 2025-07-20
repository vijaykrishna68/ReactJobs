import React from 'react'
import { 
  Route, 
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage , {jobLoader}from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  //Add new Job
  const addJob =async (newJob) =>{
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
}

  //Delete Job
  const deleteJob = async (id)=>{
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
    })
  }

  //Edit Job
  const editJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path = '/edit-job/:id' 
      element={<EditJobPage editJobSubmit={editJob}/>} 
      loader = {jobLoader}/>
      <Route path = '/jobs/:id' 
      element={<JobPage deleteJob ={deleteJob}/>} 
      loader = {jobLoader}/>
    </Route>
  
)
);
  return <RouterProvider router={router}/>
}

export default App