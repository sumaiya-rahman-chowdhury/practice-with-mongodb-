
const App = () => {
  const handleUser = e =>{
    e.preventDefault()
    const user = {
      name:e.target.name.value,
      email:e.target.email.value,
    }
    console.log(user)
    fetch('http://localhost:3000/',{
      method:'POST',
      headers:{
        "content-Type": "application/json",
      },
      body:JSON.stringify(user)
    }
    )
      .then(res=>res.json())
      .then(data=>console.log(data))
  }
  return (
    <div className="form-class
    ">
      <form action="" onSubmit={handleUser}>
      <input type="text" name="name" />\
      <br />
      <input type="text"  name="email"/>
      <br />
      <button>Submit</button>
      </form>
    </div>
  );
};

export default App;