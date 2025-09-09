import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './hooks/useState/passingInitializerfunction'
import Counter from './hooks/useState/updateStateBasedPreviousState'
import MovingDot from './hooks/useState/updateObjectState'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovingDot />
    
    
    
    {/* <Counter />  passing updater function to setState to update the previous state */}
    {/* <TodoList /> */}
  </StrictMode>,
)
