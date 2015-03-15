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
- Minor cleanup — iteration 10 (2015)
- Update docs — iteration 12 (2015)
- Add example — iteration 18 (2015)
- Optimize performance — iteration 19 (2015)
