import React from 'react'

const Home = () => {
  const handleChange = (e) => {
    console.log(e.target.files)
  }
  return (
    <div><input type='file' onChange={handleChange}/></div>
  )
}

export default Home