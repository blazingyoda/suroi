import { type Vector } from "./vector";

/**
 * Signed modulo operator.
 * @param a The dividend.
 * @param n The divisor.
 */
export const signedModulo = (a: number, n: number): number => a - Math.floor(a / n) * n;

/**
 * Normalize an angle to a value between 0 and 2π.
 * @param radians The angle, in radians.
 */
export const normalizeAngle = (radians: number): number => {
    if (radians === 0) return radians;
    radians %= Math.PI * 2;

    if (radians < 0) return (Math.PI * 2) - Math.abs(radians);
    else return radians;
};

/**
 * Find the smallest angle between two vertices.
 * @param start The initial vertex, in radians.
 * @param end The final vertex, in radians.
 */
export const minimizeAngle = (start: number, end: number): number => {
    start = normalizeAngle(start);
    end = normalizeAngle(end);

    const CW = end - start;
    const CCW = -((Math.PI * 2) - CW);

    return Math.abs(CW) < Math.abs(CCW) ? CW : CCW;
};

/**
 * Converts degrees to radians.
 * @param degrees An angle in degrees.
 * @return The angle in radians.
 */
export const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);

/**
 * Converts radians to degrees.
 * @param radians An angle in radians.
 * @return The angle in degrees.
 */
export const radiansToDegrees = (radians: number): number => (radians / Math.PI) * 180;

/**
 * Get the distance between two points.
 * @param a The first point.
 * @param b The second point.
 */
export const distance = (a: Vector, b: Vector): number => Math.sqrt(((b.x - a.x) ** 2) + ((b.y - a.y) ** 2));

/**
 * Get the distance between two points squared.
 * @param x1 The x-coordinate of the first point.
 * @param y1 The y-coordinate of the first point.
 * @param x2 The x-coordinate of the second point.
 * @param y2 The y-coordinate of the second point.
 */
export const distanceSquared = (x1: number, y1: number, x2: number, y2: number): number => ((x2 - x1) ** 2) + ((y2 - y1) ** 2);

/**
 * Linearly interpolate between two values.
 * @param start The initial value.
 * @param end The final value.
 * @param amount The size of an interpolation step.
 */
export const lerp = (start: number, end: number, amount: number): number => (1 - amount) * start + amount * end;