import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import { LinksProvider } from './context/LinksContext';
import { ActiveLinkProvider } from './context/ActiveLinkContext';
import { LinkUpdateProvider } from './context/LinkUpdateContext'
import { App } from './App'


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <LinksProvider>
        <ActiveLinkProvider>
          <LinkUpdateProvider>
            <App />
          </LinkUpdateProvider>
      </ActiveLinkProvider>
      </LinksProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

