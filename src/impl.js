import { type Component } from 'react';
import packageJson from '../package.json';

const context = require.context('./implementations/', true, /index\.js$/);
const { dependencies } = packageJson;

type ComponentsType = {
  Box: Component,
  Dot: Component,
  Provider: Component,
  TextBox: Component,
  View: Component
};

type ImplementationType = {
  components: ComponentsType,
  name: string,
  version: string
};

function packageFromDirname(name) {
  switch (name) {
    case 'emotion-css':
    case 'emotion-css-without-plugin':
      return '@emotion/core';
    case 'emotion-css-v11':
    case 'emotion-css-v11-without-plugin':
      return '@emotion/react';
    case 'emotion-styled':
    case 'emotion-styled-without-plugin':
      return '@emotion/styled';
    case 'emotion-styled-v11':
    case 'emotion-styled-v11-without-plugin':
      return '@emotion-v11/styled';
    case 'emotion-vanilla':
    case 'emotion-vanilla-without-plugin':
      return 'emotion';
    case 'emotion-vanilla-v11':
    case 'emotion-vanilla-v11-without-plugin':
      return '@emotion-v11/css';
    case 'styled-components-without-plugin':
      return 'styled-components';
    default:
      return name;
  }
}

const toImplementations = (context: Object): Array<ImplementationType> =>
  context.keys().map(path => {
    const components = context(path).default;
    const name = path.split('/')[1];
    const packageName = packageFromDirname(name);
    const version = dependencies[packageName] || '';
    return { components, name, version };
  });

const toObject = (impls: Array<ImplementationType>): Object =>
  impls.reduce((acc, impl) => {
    acc[impl.name] = impl;
    return acc;
  }, {});

const map = toObject(toImplementations(context));

export default map;
