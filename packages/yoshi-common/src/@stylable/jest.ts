import importFrom from 'import-from';
import { isStylableDependencies } from './utils';

function getStylableJest() {
  if (isStylableDependencies()) {
    // @ts-ignore
    return importFrom('@stylable/jest', 'yoshi-stylable-dependencies');
  }

  return require('@stylable/jest');
}

module.exports = getStylableJest();
