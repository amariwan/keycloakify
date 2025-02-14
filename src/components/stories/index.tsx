const storyModules = import.meta.glob("./*.stories.@(ts|tsx|js|jsx)");

for (const path in storyModules) {
  storyModules[path]();
}
