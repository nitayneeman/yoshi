export const isStylableDependencies = () => {
  try {
    require.resolve('yoshi-stylable-dependencies/package.json');
    return true;
  } catch (error) {
    return false;
  }
};
