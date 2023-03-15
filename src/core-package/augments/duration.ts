export function makeAttemptWaitDuration(attemptCount: number) {
    const waitDuration = Math.min(Math.floor(Math.pow(attemptCount, 3)), 5000);

    return waitDuration;
}
