import React from 'react'

const App = () => {
  const relative = [
    'John',
    'Alice',
    'Bob',
    'Emily'
  ]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                 {
                  relative.map((data,index)=>(
                    <li key={`relativeListItem${index + 1}`}>
                      {data}
                    </li>
                  ))
                 }
               </ol>

    </div>
  )
}

export default App
