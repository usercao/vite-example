/**
 * The instant on-demand atomic CSS engine.
 * @see https://github.com/unocss/unocss
 */
import { defineConfig } from 'unocss';
import type { Rule, StaticRule } from '@unocss/core';

// https://github.com/action-hong/unocss-preset-scrollbar
// https://github.com/reslear/unocss-preset-scrollbar-hide

interface Theme {
  flex?: Record<string, string>;
}

const flex: Rule<Theme>[] = [
  ['flex', { display: 'flex' }],
  ['flex-row', { 'flex-direction': 'row' }],
  ['flex-col', { 'flex-direction': 'column' }],
];

const alignments: StaticRule[] = [
  ['items-start', { 'align-items': 'flex-start' }],
  ['items-end', { 'align-items': 'flex-end' }],
  ['items-center', { 'align-items': 'center' }],
  ['items-stretch', { 'align-items': 'stretch' }],
  ['items-baseline', { 'align-items': 'baseline' }],
];

const justifies: StaticRule[] = [
  ['justify-start', { 'justify-content': 'flex-start' }],
  ['justify-end', { 'justify-content': 'flex-end' }],
  ['justify-center', { 'justify-content': 'center' }],
  ['justify-between', { 'justify-content': 'space-between' }],
];

const custom: Rule[] = [
  ['front', { color: '#00ba6c !important' }],
  ['verso', { color: '#e55d75 !important' }],
];

export default defineConfig({
  presets: [], // disable default preset
  rules: [...flex, ...alignments, ...justifies, ...custom],
});
