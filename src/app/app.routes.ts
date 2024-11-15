import { Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { HelloComponent } from './hello/hello.component';


export const routes: Routes = [

    {
        path: 'react',
        component: WebComponentWrapper,
        data: {
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'react',
          exposedModule: './react-app',
          elementName: 'react-root'
        } as WebComponentWrapperOptions
      },
      {
        path: 'child',
        component: WebComponentWrapper,
        data: {
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'react',
          exposedModule: './react-app',
          elementName: 'react-root'
        } as WebComponentWrapperOptions
      },
      {
        path: 'hello',
        component: HelloComponent
      }
      
];
