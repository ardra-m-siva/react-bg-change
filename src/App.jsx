
import './App.css'

function App() {
  const changeColor=(colorName)=>{
    switch(colorName){
      case 'blue':mainDiv.style.backgroundColor='blue'; break;
      case 'red':mainDiv.style.backgroundColor='red';break;
      case 'yellow':mainDiv.style.backgroundColor='yellow';break;
      case 'green':mainDiv.style.backgroundColor='green';break;
    }  
  }

  return (
    <>
      <div>
      <h4 className='text-center mt-3 text-info fw-bold fs-3'>Change Colour</h4><br/>
        <div id='mainDiv' className='m-4 d-flex justify-content-center align-items-center'>
          <button onClick={()=>{changeColor('blue')}} className='btn btn-primary btn-outline-light p-2 m-2'>Blue</button>
          <button onClick={()=>{changeColor('red')}} className='btn btn-danger btn-outline-light p-2 m-2'>Red</button>
          <button onClick={()=>{changeColor('yellow')}} className='btn btn-warning btn-outline-light p-2 m-2'>Yellow</button>
          <button onClick={()=>{changeColor('green')}} className='btn btn-success btn-outline-light p-2 m-2'>Green</button>
        </div>
      </div>
    </>
  )
}

export default App
