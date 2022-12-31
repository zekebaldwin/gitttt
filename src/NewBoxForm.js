import React, {useState} from 'react'

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor: '',
        height: '',
        width: '',
        color: ''
    }
    const [colors, setColors] = useState(['red', 'green', 'black'])
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addBox(formData.backgroundColor, formData.height, formData.width)
        setFormData(INITIAL_STATE)
    }
    const handleFilter = (e) => {
        setColors(['red'])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
            name='backgroundColor' 
            placeholder='Item Color'
            value={formData.backgroundColor}
            onChange={handleChange}/>

            <input type='text' 
            name='height' 
            placeholder='Height in EM'
            value={formData.height}
            onChange={handleChange}/>

            <input type='text' 
            name='width' 
            placeholder='Width in EM'
            value={formData.width}
            onChange={handleChange}/>

            <input type='text' 
            name='practice' 
            placeholder='practice'
            value={formData.color}
            onChange={handleFilter}/>
            <ul>
                {colors.map(color => {
                    return <li> {color} </li>
                })}
            </ul>


            <button>Add Box</button>
        </form>
    )
}
export default NewBoxForm