const modules = import.meta.globEager('./*.tsx');
const components: Record<string, any> = {};

for (const path in modules) {
  if (path.includes('index.ts')) continue;
  const match = path.match(/\.\/(.*)\.tsx$/);
  if (!match) continue;
  let componentName = match[1];
  // Optional: Namenskonvention anpassen (z. B. erster Buchstabe groß)
  componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  components[componentName] = modules[path].default || modules[path][componentName];
}

export default components;
