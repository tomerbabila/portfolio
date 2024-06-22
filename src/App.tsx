import React from 'react';
import './App.css';
import './i18n/i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return <div className='App'>{t('general.name')}</div>;
}

export default App;
