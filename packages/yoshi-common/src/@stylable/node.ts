import importFrom from 'import-from';
import {
  isStylableDependencies,
  getYoshiStylableDependenciesDir,
} from './utils';

function getStylableModuleFactory() {
  if (isStylableDependencies()) {
    // @ts-ignore
    return importFrom(
      getYoshiStylableDependenciesDir(),
      '@stylable/module-utils',
    ).stylableModuleFactory;
  }

  return require('@stylable/node').stylableModuleFactory;
}

function getStylableNamespaceFactory() {
  if (isStylableDependencies()) {
    // @ts-ignore
    return importFrom(getYoshiStylableDependenciesDir(), '@stylable/node')
      .stylableModuleFactory;
  }

  return require('@stylable/node').stylableModuleFactory;
}

export const stylableModuleFactory = getStylableModuleFactory();
export const resolveNamespaceFactory = getStylableNamespaceFactory();
