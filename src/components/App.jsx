import { Component } from 'react'
import { ContactForm } from './Elements/ContactForm'
import { ContactList } from './Elements/ContactList'
import { Filter } from './Elements/Filter'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  handleSubmit = newContact => {
    const { contacts } = this.state
    const { id, name, number } = newContact

    const nameInContacs = contacts.some(contact =>
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    )

    if(nameInContacs) {
      alert(`${name} is already in contacts`)
    } else {
      contacts.push({
        id: id,
        name: name,
        number: number
      })
      this.setState({ contacts: contacts })
    }
  }

  contactDelete = id => {
    const { contacts } = this.state

    const index = contacts.findIndex(n => n.id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    this.setState({ contacts: contacts })
  }

  render() {
    const { contacts, filter } = this.state
    const normFilter = filter.toLowerCase()
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    )

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} value={filter} />
        <ContactList contacts={filteredContacts} onClick={this.contactDelete} />
      </div>
    )
  }
}
