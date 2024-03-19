
import { useState } from 'react';
import './App.css';
function App() {
  const [data,setdata] = useState({
    character:0,
    words:0,
    sentences:0,
    paragraphs:0,
    spaces:0,
    punctuations:0
  })
  const findLength = (item) => (item == null ? 0 : item.length);
  const handlechange = (e)=>{
       setdata({
        ...data,
        sentences:findLength(e.target.value.match(/\./g)),
        words:findLength(e.target.value.match(/[a-zA-Z]+/g)),
        character:findLength(e.target.value.replace(/\s/g,"")),
        spaces:findLength(e.target.value.match(/\s/g)),
        punctuations:findLength(e.target.value.match( /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)),
        paragraphs:findLength(e.target.value.match(/\n{2,}/g))
       })
  }
  // console.log(data)
  return (
    <div className="App">
      <div className="appContainer">
        <h1 className='heading'>Text Analyzer</h1>
        <p className='info'>Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
        <div className='tabsContainer'>
          <button className='wordTab'>
            Word input
          </button>
          <button className='paraTab active'>
            Paragraph
          </button>
        </div>
        <textarea className='inputtext' name="para" id="para" cols="80" rows="10" placeholder='Type, or copy/paste your content here.' onChange={handlechange}></textarea>
        <table>
          <thead>
            <tr>
              <th>Characters</th>
              <th>Words</th>
              <th>Sentences</th>
              <th>Paragraphs</th>
              <th>Spaces</th>
              <th>Punctuations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.character}</td>
              <td>{data.words}</td>
              <td>{data.sentences}</td>
              <td>{data.paragraphs}</td>
              <td>{data.spaces}</td>
              <td>{data.punctuations}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
