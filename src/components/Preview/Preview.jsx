import ReactMarkdown from 'react-markdown'
function Preview({markdownInput}) {
    console.log("in preview")
    console.log(markdownInput)

    return (
        <ReactMarkdown
            children={markdownInput}
            components={{
               code: MarkComponent,
            }}
        />
    );
}
function MarkComponent({value}) {
return (
    {value}
)
}

export default Preview;