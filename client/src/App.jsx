import './App.css'

function App() {


  return (
    <>
    <div className='main'>
          <div className='line'>
          <h4 className='header'>Get Youtube Subscribers... </h4>
     <p>Get Youtube Subscribers is a simple API application that makes use of node.js and MongoDB as a noSQL database. The goal of this project is to create an API for there are three routers in it:</p>
    </div>

    <div className='line'>
     <a href="https://get-yt-subscribers-1.onrender.com/subscribers" target='_blank'>/subscribers</a>
     </div>
     
   <div className='line'>
      <a href="https://get-yt-subscribers-1.onrender.com/subscribers/names" target='_blank'>/subscribers/names</a>
     
     </div>
        <div className='line'>
<div id='border'>
    <form action="" onSubmit={(e) => {
  e.preventDefault();
  const id = document.getElementById("inputID").value.trim();
  window.location.href = `https://get-yt-subscribers-1.onrender.com/subscribers/${id}`,"_blank";
}}>
       
      <input type="text" name="" id="inputID" placeholder='Enter Youre Unique ID...' />
       <button id="btn" type="submit"> /subscribers/id</button> 
     </form>
     </div>

<img src="/youtube-logo-2 (1).svg" alt="" />
</div>


    </div>

    </>
  )
}

export default App;
