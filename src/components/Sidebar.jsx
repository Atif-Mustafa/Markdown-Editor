import { useState } from 'react'
import './Sidebar.css'
const Sidebar = ({ titleList, createNewTitle, currentTitleId, deleteTitle }) => {

    const [edit, setEdit] = useState(false);
    console.log(titleList)
    return (

        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                // textAlign: 'center',
                // margin: 'auto',
                width: '100%',
                marginInline: '20%'
            }}>
                <h1>NOTES</h1>
                <button style={{
                    padding: '.3rem',
                    borderRadius: '100%',
                    backgroundColor: '#3c90e7',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    marginLeft: '8%'
                }} onClick={createNewTitle}>+</button>
            </div>
            <div>
                {
                    titleList.map((title, index) => {
                        return (
                            <div key={index} className={currentTitleId === index ? 'selected-titleList' : ''}
                                style={{
                                 
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    justifyContent: 'space-between',
                                    gap: '1rem'

                                }}>
                                {/* title */}
                                {
                                    edit ?
                                        <div style={{
                                            padding: '1rem'
                                        }}>
                                            <input type="text" value={title.titleBody} onChange={(e) => updateTitleList(e, index)} />
                                            <button className='addBtn'>Add</button>
                                            <button className='cancelBtn' onClick={() => setEdit(false)}>Cancel</button>
                                        </div> :
                                        <h2
                                            style={{
                                                color: 'white'
                                            }}>{title.titleBody}</h2>
                                }
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '.3rem',
                                }}>
                                    {/* edit */}
                                    <button className='editBtn' onClick={() => setEdit(true)}
                                       disabled>
                                        <i class="ri-pencil-line"></i>
                                    </button>
                                    {/* delete */}
                                    <button className='deleteBtn' onClick={(e) => deleteTitle(e, index)}>
                                        <i class="ri-delete-bin-line"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Sidebar;