import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister=async(e)=>{
        e.preventDefault()
        const user={
            name:e.target.name.value,
            age:e.target.age.value
        }
        await axios.post('https://fsdproject-1.onrender.com/users',user)
        alert('User registered successfully')
    }
  return (
    <div>
        <form onSubmit={handleregister}>
            <label>Name:</label> <input type='text' name='name' />
            <label>Age:</label> <input type='text' name='age' />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register