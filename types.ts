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
