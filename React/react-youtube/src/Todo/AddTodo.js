import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({onCreate})
{
    function submitHandler(event)
    {
        event.preventDefault()

        if(value.trim())
        {
            onCreate(value)
            setValue('')
        }
    }

    const [value, setValue] = useState('');
    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}  />
            <button type="sumbit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo