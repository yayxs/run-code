import { Sandpack } from "@codesandbox/sandpack-react";
/**
 * The only reason this is a separate import, is so
 * we don't need to make the full page 'use client', but only this copmponent.
 */
export const SandpackCode = () => {
    return (
        <>
            <Sandpack files={{
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

        </>
    );
};