import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/Fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
          <TooltipComponent content="settings" position="top">
            <button>
              <FiSettings />
            </button>

          </TooltipComponent>

        </div>

        </div>

      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
