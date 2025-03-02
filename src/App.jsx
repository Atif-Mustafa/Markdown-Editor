import { useEffect, useState } from 'react'
import styles from './App.module.css'
import './App.css'
import Split from 'react-split';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';

// import remarkGfm from 'remark-gfm'

function App() {
  const [titleList, setTitleList] = useState(JSON.parse(localStorage.getItem('titleList')) || [
    {
      id: 0,
      titleBody: `# Enter title here`
    }
  ])

  const [currentTitleId, setCurrentTitleId] = useState(0)

  useEffect(() => {
    localStorage.setItem('titleList', JSON.stringify(titleList))
  }, [titleList])


  const createNewTitle = () => {

    const newTitle = {
      // id: uuidv4()
      id: 0,
      titleBody: `# Enter title here`
    }
    console.log()
    setTitleList(prevTitle => [newTitle, ...prevTitle])
    setCurrentTitleId(newTitle.id)
  }

  const deleteTitle = (e, idx) => {
    setTitleList(prevList => prevList.splice(idx, 1))
  }


 
  return (
    // Layout
    <div >
      <Split
        sizes={[30, 70]}
        minSize={[200, 300]}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        className={styles.container}
      >
        <Sidebar
          titleList={titleList}
          createNewTitle={createNewTitle}
          deleteTitle={deleteTitle}
          currentTitleId={currentTitleId}
        />
        <Editor />
      </Split>
    </div>
  )
}

export default App
