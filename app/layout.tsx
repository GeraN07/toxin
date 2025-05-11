import type { Metadata } from 'next';
import type { LayoutProps } from '../.next/types/app/layout';


export const metadata: Metadata = {
  title: 'Toxin',
  description: 'Toxin app',
};


import ReduxProvider from './components/redux-provider/redux-provider';
import JQueryLoader from './components/jQueryLoader/JQueryLoader';
import ToasterProvider from './components/toaster-provider/toaster-provider';





export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/plugins/Revealator-plugin/fm.revealator.jquery.css" />
      </head>
      <body>
        <JQueryLoader /> 
        <ReduxProvider> 
        <ToasterProvider />
          {children}</ReduxProvider>
      </body>
    </html>
  );
}
