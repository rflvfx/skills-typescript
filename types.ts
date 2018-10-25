// TypeScript core patterns
interface User { id: number; name: string; email: string; role?: "admin" | "user"; }

type ApiResponse<T> = { data: T; error?: string };

function wrap<T>(value: T): ApiResponse<T> { return { data: value }; }

// Utility types in action
type UserPreview = Pick<User, "id" | "name">;
type UserUpdate = Partial<User>;

const u: User = { id: 1, name: "Ana", email: "ana@dev.io", role: "admin" };
console.log(wrap(u), u satisfies User);
- Fix typo — iteration 7 (2015)
- Add feature — iteration 11 (2015)
- Fix lint warnings — iteration 14 (2015)
- Improve naming — iteration 21 (2015)
- Add example — iteration 29 (2015)
- Improve naming — iteration 32 (2015)
- Minor cleanup — iteration 42 (2015)
- Update config — iteration 46 (2015)
- Add tests — iteration 54 (2015)
- Refactor module — iteration 56 (2015)
- Improve error handling — iteration 60 (2015)
- Polish code — iteration 8 (2016)
- Fix typo — iteration 14 (2016)
- Update config — iteration 25 (2016)
- Extend coverage — iteration 27 (2016)
- Optimize performance — iteration 36 (2016)
- Minor cleanup — iteration 41 (2016)
- Fix lint warnings — iteration 56 (2016)
- Document usage — iteration 57 (2016)
- Document usage — iteration 9 (2017)
- Extend coverage — iteration 10 (2017)
- Polish code — iteration 17 (2017)
- Update config — iteration 22 (2017)
- Tweak implementation — iteration 26 (2017)
- Improve error handling — iteration 34 (2017)
- Update config — iteration 45 (2017)
- Extend coverage — iteration 48 (2017)
- Improve naming — iteration 50 (2017)
- Tweak implementation — iteration 58 (2017)
- Update dependencies — iteration 3 (2018)
- Add validation — iteration 8 (2018)
- Add helper — iteration 9 (2018)
- Polish code — iteration 20 (2018)
- Add validation — iteration 24 (2018)
- Refactor module — iteration 33 (2018)
- Add helper — iteration 34 (2018)
