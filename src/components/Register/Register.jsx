import { createUserWithEmailAndPassword,  } from "firebase/auth";
import auth from "../../firebase/firebase.config"
import { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa6";


const Register = () => {
  const [exists, setExists] = useState('')
  const [success, setSuccess] = useState('')
  const [show, setShow] = useState(false)
 
  const submitButtonHandlar = e => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;


    setExists('')
    setSuccess('')

    if(password.length < 6) {
      setExists("Please Enter more charecter")
      return
    }
    else if(!/[A-Z]/.test(password)) {
      setExists("Please Enter at least One uppercase")
      return
    }

    createUserWithEmailAndPassword( auth , email, password )
    .then(res => {
      const user = res.user;
      setSuccess("Successfully done")
      console.log(user)
    })
    .catch(err => {
      const messages = err.message;
      console.log(messages)
      setExists(messages)
    })

  }

  const reverse = () => {
    setShow(!show)
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
          <div className="flex items-center relative">
            <input
              className="w-full p-2 rounded-md"
              type={show ? "password" : "text"}
              name="password"
              placeholder="Enter Password"
            />
            <span className="absolute right-3" onClick={() => reverse()}>
              {show ?<FaEyeSlash></FaEyeSlash> : <FaRegEye></FaRegEye>  }
            </span>
          </div>
          <br />
          <input className="p-2 btn text-xl" type="submit" value="Register" />
        </form>
        <h2>
          {exists && <p className="text-red-700">{exists}</p>}
          {success && <p className="text-green-700">{success}</p>}
        </h2>
      </div>
    );
};

export default Register;