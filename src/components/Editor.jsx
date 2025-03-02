
import styles from './Editor.module.css'
import { useState } from 'react';
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMde from "react-mde";

const Editor = () => {


    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");

    const [heading, setHeading] = useState(false)

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
      });
      const save = async function* (data) {
        // Promise that waits for "time" milliseconds
        const wait = function (time) {
          return new Promise((a, r) => {
            setTimeout(() => a(), time);
          });
        };
    
        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest
    
        await wait(2000);
        // yields the URL that should be inserted in the markdown
        yield "https://picsum.photos/300";
        await wait(2000);
    
        // returns true meaning that the save was successful
        return true;
      };

    return (
        <div className={styles.container}>
            <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                // loadSuggestions={loadSuggestions}
                childProps={{
                    writeButton: {
                        tabIndex: -1
                    }
                }}
                paste={{
                    saveImage: save
                }}
                minEditorHeight={90}
                heightUnits='vh'
            />
        </div>

    )
}

export default Editor;