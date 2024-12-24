import { memo, useMemo } from "react";

const Child = memo(({ add, count }) => {
  console.log("Child Rendered");

  const calculate = useMemo(() => {
    console.log("Calculated again", count);
    return count * 2;
  }, [count]);
});

export default Child;
