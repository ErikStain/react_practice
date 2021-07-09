import styles from './Contacts.module.css'

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.div}>
        <h2 className={styles.title}>Dogs leave paw prints forever.</h2>
        <p className={styles.text}>
          A dog in heat needs more than shade The more people I meet the more I
          like my dog.
        </p>
      </div>
      <form className={styles.form}>
        <input placeholder="Enter your message" />
        <button className={styles.button}>Send</button>
      </form>
    </section>
  )
}
export default Contacts
