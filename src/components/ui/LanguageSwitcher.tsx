import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Language {
  languageTag: string;
  label: string;
  href: string;
}

interface LanguageSwitcherProps {
  currentLanguage: { languageTag: string };
  enabledLanguages: Language[];
}

export const LanguageSwitcher = ({
  currentLanguage,
  enabledLanguages
}: LanguageSwitcherProps) => {
  if (enabledLanguages.length <= 1) return null;

  return (
    <Select
      value={currentLanguage.languageTag}
      onValueChange={value => {
        const selected = enabledLanguages.find(
          ({ languageTag }) => languageTag === value
        );
        if (selected) {
          window.location.href = selected.href;
        }
      }}
    >
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Select a locale" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {enabledLanguages.map(({ languageTag, label }) => (
            <SelectItem key={languageTag} value={languageTag}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
