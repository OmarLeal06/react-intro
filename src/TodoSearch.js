import './TodoSearch.css'

function TodoSearch() {
    return (
        <input 
        placeholder="Cortar cebolla" 
        className="TodoSearch"
        onChange={(event) =>{
          console.log(event.target.value)
        }}
        ></input>
    )
  }


export { TodoSearch}