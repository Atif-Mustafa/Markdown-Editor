import { FaBold, FaCode, FaHeading, FaImage, FaItalic, FaLink, FaQuoteRight, FaStrikethrough } from 'react-icons/fa';
import { VscListOrdered } from "react-icons/vsc";
import { RiListUnordered } from "react-icons/ri";
import { FaListCheck } from "react-icons/fa6";
import styles from './Nav.module.css'
import { useState } from 'react';
function Nav({ setInPreviewMode, setInWriteMode, inWriteMode, inPreviewMode , setHeading}) {
    return (
        <>
            <div className={styles.navigationContainer}>
                <nav className={styles.navigation}>
                    <div className={styles.btnContainer}>
                        <button className={`${inWriteMode ? styles.active : styles.btnn}`} onClick={() => {
                            setInWriteMode(true); setInPreviewMode(false)
                        }}>Write</button>
                        <button className={`${inPreviewMode ? styles.active : styles.btnn}`} onClick={() => {
                            setInWriteMode(false)
                            setInPreviewMode(true)
                        }}>Preview</button>
                    </div>
                    {inWriteMode && (
                        <>
                            <div className={styles.btnContainer}>
                                <button onClick={() => setHeading(true)} className={`${styles.btn}`} title='Heading'>
                                    <FaHeading />
                                </button>
                                <button className={`${styles.btn}`} title='Bold'>
                                    <FaBold />
                                </button>
                                <button className={`${styles.btn}`} title='Italic'>
                                    <FaItalic />
                                </button>
                                <button className={`${styles.btn}`} title='Strikethrough'><FaStrikethrough /></button>
                            </div>
                            <div className={styles.btnContainer}>
                                <button className={`${styles.btn}`} title='Link'><FaLink />
                                </button>
                                <button className={`${styles.btn}`} title='Blockquote'>
                                    <FaQuoteRight />
                                </button>
                                <button className={`${styles.btn}`} title='Code'><FaCode /></button>
                                <button className={`${styles.btn}`} title='Image'><FaImage /></button>
                            </div>
                            <div className={styles.btnContainer}>
                                <button className={`${styles.btn}`} title='Unordered-list'><RiListUnordered /></button>
                                <button className={`${styles.btn}`} title='Ordered-list'><VscListOrdered /></button>
                                <button className={`${styles.btn}`} title='Check-list'><FaListCheck /></button>
                            </div>
                        </>
                    )}
                </nav>
            </div></>
    );
}

export default Nav;