'use client';

import { Sandpack } from "@codesandbox/sandpack-react";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="h-[calc(100vh-32px)]">
        <Sandpack
           files={{
            '/index.js': {}
          }}
          theme='light'
          template='vanilla'
          options={{
            showLineNumbers: true,
            autorun: true,
            autoReload: true,
            showConsole: true,
            showConsoleButton: true,
            showTabs: true,
            closableTabs: true,
            editorHeight: '40vh'
          }}
        />
      </div>
    </main>
  );
}