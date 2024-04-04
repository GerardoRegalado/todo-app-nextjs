// --> Package Imports
import React from 'react'
// --> Local Imports
import styles from './../page.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Made with Next.js, Mobx, Bootstrap and love 🫰🏻</p>
      </footer>
    </>
  )
}

export default Footer