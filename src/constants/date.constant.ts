export const COOKIE_EXPIRES = new Date(Date.now() + 7 * 24 * 60 * 60 * 1_000); /// 7 Days
export const TIME_UNIT = 60;
export const ONE_SECOND_IN_MS = 1_000;
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * TIME_UNIT;
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * TIME_UNIT;

export const REDIRECTION_TIME = ONE_HOUR_IN_MS;
