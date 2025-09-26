'use client';

import { Sandpack } from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import { useMemo } from "react";

export default function Home() {
  // 使用 useMemo 来避免服务端渲染问题
  const editorConfig = useMemo(() => {
    // 自定义 JavaScript 自动补全
    const jsAutocompletion = autocompletion({
      activateOnTyping: true,
      override: [
        (context) => {
          const word = context.matchBefore(/\w*/);
          if (!word) return null;
          
          // JavaScript 关键字和常用API补全
          const suggestions = [
            // 基础关键字
            'function', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue',
            'var', 'let', 'const', 'class', 'extends', 'import', 'export', 'from', 'default',
            'try', 'catch', 'finally', 'throw', 'new', 'this', 'super', 'static', 'async', 'await',
            'true', 'false', 'null', 'undefined',
            
            // Console API
            'console.log', 'console.error', 'console.warn', 'console.info', 'console.table', 'console.clear',
            
            // DOM API
            'document.getElementById', 'document.querySelector', 'document.querySelectorAll',
            'document.createElement', 'document.createTextNode', 'document.body', 'document.head',
            'addEventListener', 'removeEventListener', 'appendChild', 'removeChild',
            'innerHTML', 'innerText', 'textContent', 'setAttribute', 'getAttribute',
            'classList.add', 'classList.remove', 'classList.toggle', 'classList.contains',
            
            // Timer函数
            'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval',
            
            // JSON
            'JSON.stringify', 'JSON.parse',
            
            // Math对象
            'Math.random', 'Math.floor', 'Math.ceil', 'Math.round', 'Math.abs',
            'Math.max', 'Math.min', 'Math.sqrt', 'Math.pow', 'Math.PI',
            
            // Array方法
            'push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'concat', 'join',
            'map', 'filter', 'reduce', 'forEach', 'find', 'findIndex', 'some', 'every',
            'sort', 'reverse', 'includes', 'indexOf', 'lastIndexOf', 'length',
            
            // String方法
            'charAt', 'charCodeAt', 'toLowerCase', 'toUpperCase', 'trim', 'split',
            'replace', 'substring', 'substr', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
            
            // Object方法
            'Object.keys', 'Object.values', 'Object.entries', 'Object.assign', 'Object.create',
            
            // Array构造
            'Array.from', 'Array.isArray', 'Array.of',
            
            // Promise
            'Promise.resolve', 'Promise.reject', 'Promise.all', 'Promise.race',
            'then', 'catch', 'finally',
            
            // 事件
            'onclick', 'onload', 'onchange', 'onsubmit', 'onmouseover', 'onmouseout',
            'addEventListener', 'removeEventListener', 'preventDefault', 'stopPropagation'
          ];
          
          const filtered = suggestions.filter(s => 
            s.toLowerCase().startsWith(word.text.toLowerCase())
          );
          
          if (filtered.length === 0) return null;
          
          return {
            from: word.from,
            options: filtered.map(label => ({
              label,
              type: label.includes('.') ? "method" : "keyword",
              boost: label.includes('console.') ? 95 : 
                     label.includes('document.') ? 90 : 
                     label.includes('.') ? 85 : 80
            }))
          };
        }
      ]
    });

    const extensions = [
      javascript(),
      jsAutocompletion
    ];

    const extensionsKeymap = [...completionKeymap];

    return { extensions, extensionsKeymap };
  }, []);

  return (
    <main className="min-h-screen p-4">
      <div className="h-[calc(100vh-32px)]">
        <Sandpack
          files={{
            '/index.js': {
              code: ``
            }
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
            editorHeight: 400,
            codeEditor: editorConfig
          }}
        />
      </div>
    </main>
  );
}