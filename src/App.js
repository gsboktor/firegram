import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm'
import ProgressBar from './comps/ProgressBar'
import ImageGrid from './comps/ImageGrid';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
