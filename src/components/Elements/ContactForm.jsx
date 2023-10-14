import styles from "../Style.module.css"
import { Component } from 'react'
import { nanoid } from 'nanoid'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    prepareToSubmit = (evt) => {
        const id = nanoid()
        const { name, number } = this.state
        evt.preventDefault()
        this.props.onSubmit({ id, name, number })
        this.setState({ name: '', number: '' })

    }
  
    render() {
        const { name, number } = this.state

        return (
            <form onSubmit={evt => this.prepareToSubmit(evt)} className={styles.Form}>
                <label className={styles.Label}>
                    Name
                    <input value={name} onChange={evt => this.handleChange(evt)} type="text" name="name" required />
                </label>
                <label className={styles.Label}>
                    Number
                    <input value={number} onChange={evt => this.handleChange(evt)} type="tel" name="number" required />
                </label>
                <button type='submit' className={styles.SubmitButton}>Add contact</button>
            </form>
        )
    }
}

export { ContactForm } 