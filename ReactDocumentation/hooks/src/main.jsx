import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './hooks/useState/passingInitializerfunction'
import Counter from './hooks/useState/updateStateBasedPreviousState'
import MovingDot from './hooks/useState/updateObjectState'
import UseSpreadOperatorUpdateObjectPart from './hooks/useState/useSpreadOperatorUpdateObjectPart'
import UpdateNestedObjectPart from './hooks/useState/updateNestedObjectPart'
import UpdateNestedObjectPartUsingImmer from './hooks/useState/updateNestedObjectUsingImmer'
import PushFuncToArr from './hooks/useState/pushFuncToArr'
import UseSpreadToAddIntoArray from './hooks/useState/useSpreadToAddIntoArray'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UseSpreadToAddIntoArray /> */}
    
    
<PushFuncToArr />


{/* <UpdateNestedObjectPartUsingImmer /> */}
{/* <UpdateNestedObjectPart /> */}
{/* <UseSpreadOperatorUpdateObjectPart />     */}
{/* <MovingDot /> */}
{/* <Counter />  passing updater function to setState to update the previous state */}
{/* <TodoList /> */}
  </StrictMode>,
)
