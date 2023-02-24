import React, { useState } from 'react'

function Form() {
	// const [firstName, setFirstName] = useState('John')
	// const [lastName, setLastName] = useState('Henry')
  const [formData, setFormData] = useState({
    firstName: 'Henry',
    lastName: 'Ford'
  })

	// function handleFirstNameChange(event) {
	// 	setFormData({
  //     ...formData,
  //     firstName: event.target.value
  //   })
	// }

	function handleFormChange(event) {
		setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
	}
  console.log(formData)

	return (
		<form>
			<input type='text' name='firstName' onChange={handleFormChange} value={formData.firstName} />
			<input type='text' name='lastName' onChange={handleFormChange} value={formData.lastName} />
			<button type='submit'>Submit</button>
		</form>
	)
}

export default Form
