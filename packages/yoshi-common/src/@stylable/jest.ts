import importFrom from 'import-from';
import {
  isStylableDependencies,
  getYoshiStylableDependenciesDir,
} from './utils';

function getStylableJest() {
  if (isStylableDependencies()) {
    // @ts-ignore
    return importFrom(getYoshiStylableDependenciesDir(), '@stylable/jest');
  }

  return require('@stylable/jest');
}

module.exports = getStylableJest();
