import importFrom from 'import-from';
import {
  isStylableDependencies,
  getYoshiStylableDependenciesDir,
} from './utils';

function getStylableNode() {
  if (isStylableDependencies()) {
    // @ts-ignore
    return importFrom(
      getYoshiStylableDependenciesDir(),
      '@stylable/module-utils',
    );
  }

  return require('@stylable/node');
}

const stylableNode = getStylableNode();

export const stylableModuleFactory = stylableNode.stylableModuleFactory;
export const resolveNamespaceFactory = stylableNode.resolveNamespaceFactory;
