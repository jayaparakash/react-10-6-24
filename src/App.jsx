
import { useDispatch, useSelector } from 'react-redux';
import { Parent } from './contexthook/Parent';
import { Counter } from './hooks/counter/Counter';
import { Reducer } from './hooks/Reducer/Reducer';
import { Ref } from './hooks/ref/Ref';
import { Toggle } from './hooks/Toggle/ToggleBtn';
import { MainLayout } from './Layout/MainLayout';
 
export const App = ()=>{
  return(
    <>
  <MainLayout />
  {/* <Counter /> */}
  {/* <Toggle /> */}
  {/* <Ref /> */}
  {/* <Reducer /> */}
  {/* <Parent /> */}
    </>
  )
}

// components
// jsx
// props
// routing 
// styles and rules 
// fragments