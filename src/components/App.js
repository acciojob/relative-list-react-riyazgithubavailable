import React from 'react'

const App = () => {
  const relative = [
    {
      key:'#relativeListItem1',
      name:'John'
    },
    {
      key:'#relativeListItem2',
      name:'Alice'
    },
    
    {
      key:'#relativeListItem3',
      name:'Bob'
    }
    
  ]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="#relativeList">
                 {
                  relative.map((data)=>(
                    <li key={data.key}>
                      {data.name}
                    </li>
                  ))
                 }
               </ol>

    </div>
  )
}

export default App
