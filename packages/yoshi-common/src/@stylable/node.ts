import importFrom from 'import-from';
import { isStylableDependencies } from './utils';

function getStylableNode() {
  if (isStylableDependencies()) {
    // @ts-ignore
    return importFrom('@stylable/module-utils', 'yoshi-stylable-dependencies');
  }

  return require('@stylable/node');
}

const stylableNode = getStylableNode();
export const stylableModuleFactory = stylableNode.stylableModuleFactory;
export const resolveNamespaceFactory = stylableNode.resolveNamespaceFactory;
