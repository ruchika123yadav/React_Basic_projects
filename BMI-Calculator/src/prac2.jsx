

function Tree({Name,age,gender}){

    let arr = [1,2,3,4,5,6]
    let list = arr.map((feat)=>{
        <li>{feat}</li>
    })
    return (
        <div>
       <p>{Name}</p>
       <p>{age}</p>
       <p>{gender}</p>
        <ul>{list}
        </ul>
        </div>
    )
}

export default Tree