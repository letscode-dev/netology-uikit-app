export const getThemeClassName = (
  theme: string | undefined,
  styles: Record<string, string>,
): string | undefined => {
  const сlassName = theme ? styles["theme-" + theme] : undefined;
  return сlassName;
};
