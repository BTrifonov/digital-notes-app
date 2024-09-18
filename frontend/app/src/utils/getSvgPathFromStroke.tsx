export function getSvgPathFromStroke(stroke: number[][]): string {
  if (stroke.length === 0) return "";

  // Reduce stroke to an array of path commands
  const d: (string | number)[] = stroke.reduce(
    (acc: (string | number)[], [x0, y0], i, arr) => {
      // Ensure that arr[(i + 1) % arr.length] is a valid [number, number] tuple
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"] // Initial value: move to the start point and begin a quadratic Bezier curve
  );

  d.push("Z"); // Close the path
  return d.join(" ");
}
