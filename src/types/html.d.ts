type HTMLTags =
  | 'section'
  | 'dt'
  | 'dd'
  | 'dl'
  | 'ul'
  | 'li'
  | 'button'
  | 'div'
  | 'input';

type OverwritedTagProps<T> = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>,
  'ref'
>;

export type HTMLTagProps<T extends HTMLTags> = T extends 'dl'
  ? OverwritedTagProps<HTMLDListElement>
  : T extends 'ul'
  ? OverwritedTagProps<HTMLUListElement>
  : T extends 'button'
  ? OverwritedTagProps<HTMLButtonElement>
  : T extends 'li'
  ? OverwritedTagProps<HTMLLIElement>
  : T extends 'div'
  ? OverwritedTagProps<HTMLDivElement>
  : T extends 'input'
  ? OverwritedTagProps<HTMLInputElement>
  : OverwritedTagProps<HTMLElement>;
