import uniqid from 'uniqid'
import { useState, useEffect } from 'react'

const defaultContacts = []
export function PhoneBook() {
  // Создаём переменные для хранения данных с помощю хуков
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [contacts, setContacts] = useState(() => {
    let localItem = localStorage.getItem('contacts')
    return JSON.parse(localItem) ?? defaultContacts
  })
  const [filter, setFilter] = useState('')

  // Задаём жизненные циклы компоненту с помощю хуков
  useEffect(() => {
    let localContacts = JSON.stringify(contacts)
    // console.log(localContacts)
    localStorage.setItem('contacts', localContacts)
  }, [contacts])

  // Обьявляем функции обработчики событий
  // Обрабатываем события change в инпутах
  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value)
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break
      case 'phone':
        setPhone(event.target.value)
        break
      case 'filter':
        setFilter(event.target.value)
        break

      default:
        break
    }
  }

  // Обрабатываем событие submit у формы
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    const contact = { name, phone, id: uniqid() }
    console.log(contact)
    setContacts((contacts) => {
      return [...contacts, contact]
    })
    console.log(contacts)
    setName('')
    setPhone('')
  }
  // Создаём функцию фильтра контактов
  const getFilter = () => {
    return contacts.filter((contact) => {
      //   console.log(contact.name.includes(filter))
      let condition = contact.name.toLowerCase().includes(filter.toLowerCase())
      return condition
    })
  }
  const filteredContacts = getFilter()
  console.log(filteredContacts)

  // Возвращаем разметку компонентов
  return (
    <section>
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="phone"
            onChange={handleChange}
            value={phone}
          />
        </label>
        <button type="submit">Click</button>
      </form>
      <h2>Filter</h2>
      <form>
        <label>
          <input
            type="text"
            name="filter"
            placeholder="filter"
            onChange={handleChange}
            value={filter}
          />
        </label>
      </form>
      <h2>Contacts list</h2>
      <article>
        <ul>
          {filteredContacts.length > 0 &&
            filteredContacts.map((contact) => {
              //   console.log(contact)
              return (
                <li key={contact.id}>
                  <span>{contact.name}</span>-<span>{contact.phone}</span>
                </li>
              )
            })}
        </ul>
      </article>
    </section>
  )
}
