declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

type HTMLTags =
  | 'section'
  | 'dt'
  | 'dd'
  | 'dl'
  | 'ul'
  | 'button'
  | 'div'
  | 'input';

type HTMLElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type HTMLTagProps<T extends HTMLTags> = T extends 'dl'
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
  : HTMLElementProps;

type Theme = 'light' | 'dark';
