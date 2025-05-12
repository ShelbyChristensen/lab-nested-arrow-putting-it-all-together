function createLoginTracker(userInfo) {
    let attemptCount = 0;

    const loginAttempt = (passwordAttempt) => {
        attemptCount++;

        if (passwordAttempt === userInfo.password && attemptCount <= 3) {
            return "Login successful";
        } else if (attemptCount <= 3) {
            return `Attempt ${attemptCount}: Login failed`;
        } else {
            return "Account locked due to too many failed login attempts";
        }
    };

    return loginAttempt;
}

const tracker = createLoginTracker({ username: "Shelby_Christensen", password: "12345" });

console.log(tracker("wrong"));
console.log(tracker("nope"));
console.log(tracker("12345"));
console.log(tracker("12345"));