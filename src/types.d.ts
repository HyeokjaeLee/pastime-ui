declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

type HTMLElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
type HTMLSectionProps = HTMLElementProps;
type HTMLDtProps = HTMLElementProps;
type HTMLDdProps = HTMLElementProps;

type HTMLDListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDListElement>,
  HTMLDListElement
>;

type HTMLUListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type HTMLDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type HTMLInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
