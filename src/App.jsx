
import { useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
import { AddTodo } from './components/AddTodo';

const queryClient = new QueryClient()

function App() {
  
  const [isLoggedin,setIsloggedin] = useState(true)
  

  return (
    <>
    <div className='app'>
      <QueryClientProvider client={queryClient}>
      <Header/>
      {isLoggedin?
      <>
        <AddTodo />
        <TodoList />
        <Logout setIsloggedin={setIsloggedin}/>
      </>
      :
      <Login setIsloggedin={setIsloggedin}/>}
      </QueryClientProvider>
    </div>
    </>
  )
}

export default App
