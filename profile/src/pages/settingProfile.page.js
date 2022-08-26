import React from 'react'
import { createRoot } from 'react-dom/client';
import SettingProfile from './settingProfile/settingProfile';

function ProfileSetting() {
  return (
    <div>
      <SettingProfile/>
    </div>
  )
}

const mountProfileSetting = (element) => {
  const root = createRoot(element);
  root.render(<ProfileSetting/>);
}

export {mountProfileSetting};