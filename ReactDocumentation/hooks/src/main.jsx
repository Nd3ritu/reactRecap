import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './hooks/useState/passingInitializerfunction'
import Counter from './hooks/useState/updateStateBasedPreviousState'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    
    {/* <Counter />  passing updater function to setState to update the previous state */}
    {/* <TodoList /> */}
  </StrictMode>,
)
