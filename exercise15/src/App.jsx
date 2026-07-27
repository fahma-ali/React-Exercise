import React from 'react'
import LanguageContext from './LanguageContext'
import LanguageUse from './LanguageUse'
export const App = () => {
  const [language, setLanguage] = React.useState("en")

  return (
    <LanguageContext.Provider value={{language,setLanguage}}>
      <LanguageUse/>
    </LanguageContext.Provider>
  )
}
export default App