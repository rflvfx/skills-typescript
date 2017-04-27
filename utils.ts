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
- Update docs — iteration 26 (2015)
- Minor cleanup — iteration 28 (2015)
- Fix lint warnings — iteration 31 (2015)
- Update config — iteration 37 (2015)
- Add validation — iteration 40 (2015)
- Add example — iteration 57 (2015)
- Fix edge case — iteration 10 (2016)
- Document usage — iteration 16 (2016)
- Update dependencies — iteration 19 (2016)
- Tweak implementation — iteration 21 (2016)
- Document usage — iteration 22 (2016)
- Update docs — iteration 23 (2016)
- Update config — iteration 31 (2016)
- Minor cleanup — iteration 32 (2016)
- Add tests — iteration 35 (2016)
- Fix edge case — iteration 45 (2016)
- Fix typo — iteration 49 (2016)
- Add feature — iteration 52 (2016)
- Add helper — iteration 53 (2016)
- Add validation — iteration 3 (2017)
- Add example — iteration 4 (2017)
- Add feature — iteration 12 (2017)
- Add example — iteration 14 (2017)
- Fix edge case — iteration 18 (2017)
- Polish code — iteration 19 (2017)
- Add validation — iteration 25 (2017)
- Add example — iteration 31 (2017)
- Update dependencies — iteration 35 (2017)
- Update config — iteration 37 (2017)
- Fix edge case — iteration 40 (2017)
- Optimize performance — iteration 42 (2017)
- Add tests — iteration 43 (2017)
