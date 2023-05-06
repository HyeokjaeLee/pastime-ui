export function cleanClassName(className: string | undefined | null | false) {
  if (className) {
    return className
      .replace(/(undefined)|(false)|\n/g, '')
      .replace(/ +(?= )/g, '')
      .replace(/^ */g, '')
      .replace(/ *$/g, '');
  }
}
