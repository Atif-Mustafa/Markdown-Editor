

function CodeWrite({markdownInput, setMarkdownInput}) {
    console.log('in write')
    return ( 
        <>
        <textarea  autoFocus
            value={markdownInput}
            onChange={(e) => setMarkdownInput(e.target.value)}
           
           style={{
            height:'100%',
            width: '100%'
           }}>
        </textarea>
        </>
     );
}

export default CodeWrite;