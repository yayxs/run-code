'use client'
import { Sandpack } from '@codesandbox/sandpack-react'
export default function Page() {
  return (
    <div>
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
  )
}
