import React from 'react';
import { useState, useEffect } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { SheetHeader, SheetContent } from './SheetContent'
import Map from './Map';
import ogLogo from './assets/og_logo.png';

function App() {
  const [open, setOpen] = useState(false)
  const [sheetContent, setSheetContent] = useState({})
  const [otaniemiWeather, setOtaniemiWeather] = useState({})

  const onDismiss = () => {
    setOpen(false)
  }

  const openSheet = (content) => {
    setSheetContent(content)
    setOpen(true)
  }

  return (
    <div>
      <div className="og-logo">
        <a href="https://grilli.ayy.fi">
          <img src={ogLogo} alt="logo" />
        </a>
      </div>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ headerHeight, minHeight }) => [headerHeight, minHeight]}
        defaultSnap={({ headerHeight }) => headerHeight}
        header={
          <SheetHeader content={sheetContent} weather={otaniemiWeather} />
        }
      >
        <SheetContent content={sheetContent} />
      </BottomSheet>
      <Map openSheet={openSheet} updateWeather={setOtaniemiWeather} />

    </div>
  );
}

export default App;
