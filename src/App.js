// import React from "react"
// import Card from "./Card"
// import RoundedImg from './RoundedImg'

// function App() {
//     return (
//         <div>
//           <div>
          
//             <RoundedImg src={"https://picsum.photos/id/237/300/300"} />
//         </div>
          
//             <Card cardColor="red" height={200} width={200} />
//             <Card  />
//             <Card cardColor="green" />
//         </div>
//     )
// }

// export default App

import React from "react"
import RoundedImg from "./RoundedImg"
import Callout from "./Callout"
import Count from "./Count"
import Name from "./Name"

function App() {    
    return (
        <div>
            <RoundedImg   />
            <Callout>
              <h1>I am here</h1>
            </Callout>
            <Callout>
              <h3>I am here too!</h3>
            </Callout>
            <Count />
            <Name />
        </div>
    )
}

export default App