export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const k = String(item[key]);
    (acc[k] ||= []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}
- Improve naming — iteration 6 (2015)
- Fix typo — iteration 9 (2015)
