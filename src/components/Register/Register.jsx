
const Register = () => {
 
  const submitButtonHandlar = e => {
    e.preventDefault()
    console.log("submit button is working")
  }
    
    return (
      <div className="w-3/4 mx-auto">
        <form onSubmit={submitButtonHandlar} className="flex flex-col p-1">
          <input
            className="w-full p-2 rounded-md"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            className="w-full p-2 rounded-md"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <br />
            <input className="p-2 btn text-xl" type="submit" value="Register" />
        </form>
      </div>
    );
};

export default Register;