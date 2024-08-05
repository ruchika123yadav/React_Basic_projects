import Tree from './prac2.jsx'

function Title(){
    let name = "ruchika"

    return (
           <div>
           <h3>{name.toUpperCase()}</h3>
           <Tree Name="Ruchika Yadav" age={21} gender="Female"/>
           <Tree/>
            
             
           </div>

    )
}

export default Title