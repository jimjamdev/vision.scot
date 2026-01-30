'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Tooltip } from './Tooltip';
import fundingData from '@/data/funding-data.json';
import type { Components } from 'react-markdown';

interface PolicyContentProps {
  content: string;
}

const entities = fundingData.entities as Record<string, {
  type: string;
  description: string;
  relevance?: string;
  funding_source?: string;
}>;

// Sort terms by length (longest first) to match longer terms before shorter ones
const terms = Object.keys(entities).sort((a, b) => b.length - a.length);

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function addTooltipsToText(text: string): React.ReactNode {
  if (typeof text !== 'string') return text;

  const result: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;
  const usedTerms = new Set<string>();

  while (remainingText.length > 0) {
    let foundMatch = false;

    for (const term of terms) {
      const escapedTerm = escapeRegExp(term);
      const regex = new RegExp(`\\b${escapedTerm}\\b`, 'i');
      const match = remainingText.match(regex);

      if (match && match.index !== undefined) {
        if (match.index > 0) {
          result.push(remainingText.slice(0, match.index));
        }

        const termKey = term.toLowerCase();
        const entityData = entities[term];

        if (!usedTerms.has(termKey) && entityData) {
          result.push(
            <Tooltip key={`tooltip-${keyIndex++}`} term={match[0]} data={entityData}>
              {match[0]}
            </Tooltip>
          );
          usedTerms.add(termKey);
        } else {
          result.push(match[0]);
        }

        remainingText = remainingText.slice(match.index + match[0].length);
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      const nextChar = remainingText[0];
      if (result.length > 0 && typeof result[result.length - 1] === 'string') {
        result[result.length - 1] = (result[result.length - 1] as string) + nextChar;
      } else {
        result.push(nextChar);
      }
      remainingText = remainingText.slice(1);
    }
  }

  return result.length === 1 && typeof result[0] === 'string' ? result[0] : result;
}

// Process children recursively to add tooltips to text nodes
function processChildren(children: React.ReactNode): React.ReactNode {
  if (typeof children === 'string') {
    return addTooltipsToText(children);
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => {
      if (typeof child === 'string') {
        return <span key={i}>{addTooltipsToText(child)}</span>;
      }
      return child;
    });
  }
  return children;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-16 mb-8 leading-tight tracking-tight">
      {processChildren(children)}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-16 mb-6 pb-3 border-b-2 border-sky-500/30">
      {processChildren(children)}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-10 mb-4">
      {processChildren(children)}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mt-8 mb-3">
      {processChildren(children)}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
      {processChildren(children)}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-3 mb-6 ml-1">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-3 mb-6 ml-1 list-decimal list-inside">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-3">
      <span className="text-sky-500 mt-2 flex-shrink-0">
        <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="4" />
        </svg>
      </span>
      <span>{processChildren(children)}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-sky-500 pl-6 py-4 my-8 bg-gradient-to-r from-sky-50 to-transparent dark:from-sky-900/20 dark:to-transparent rounded-r-lg italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-900 dark:text-white">
      {processChildren(children)}
    </strong>
  ),
  em: ({ children }) => (
    <em className="text-slate-700 dark:text-slate-200">
      {processChildren(children)}
    </em>
  ),
  hr: () => (
    <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <table className="w-full text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-slate-100 dark:bg-slate-800 text-left">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
      {processChildren(children)}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">
      {processChildren(children)}
    </td>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 underline underline-offset-2 decoration-sky-300 dark:decoration-sky-700 hover:decoration-sky-500"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono text-slate-800 dark:text-slate-200">
      {children}
    </code>
  ),
};

export function PolicyContent({ content }: PolicyContentProps) {
  return (
    <article className="prose-container">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
