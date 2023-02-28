const baseDurationWait = 10;

export function makeAttemptWaitDuration(attemptCount: number) {
    return Math.min(
        Math.max(Math.floor(Math.pow(attemptCount + 1, 3) * baseDurationWait), baseDurationWait),
        5000,
    );
}
