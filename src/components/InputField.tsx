import React from 'react'

const InputField = () => {
  return (
    <form className='input'>
        <input type={'text'} placeholder='Enter a task' className='input-box' />
        <button className='input-submit'>Go</button>
    </form>
  )
}

export default InputField;
