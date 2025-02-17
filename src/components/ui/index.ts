type ModuleType = {
  default?: React.ComponentType<any>;
  [key: string]: any;
};

const modules = import.meta.glob("./*.tsx");

const componentEntries = await Promise.all(
  Object.entries(modules)
    .filter(([path]) => !path.includes("/index.tsx"))
    .map(async ([path, importer]) => {
      const mod = (await importer()) as ModuleType;
      const componentName = path
        .replace(/^\.\/(.*)\.tsx$/, "$1")
        .split(/[_-]/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");

      return [componentName, mod.default || mod[componentName]] as [string, React.ComponentType<any>];
    })
);

const components = Object.fromEntries(componentEntries);

export default components;
