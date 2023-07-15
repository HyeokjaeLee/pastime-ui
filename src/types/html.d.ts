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

export type HTMLTagProps<T extends HTMLTags> = T extends 'dl'
  ? React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDListElement>,
      HTMLDListElement
    >
  : T extends 'ul'
  ? React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  : T extends 'button'
  ? React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  : T extends 'li'
  ? React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >
  : T extends 'div'
  ? React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  : T extends 'input'
  ? React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
