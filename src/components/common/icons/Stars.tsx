import { Star } from "lucide-react";

const Stars = ({ count, className }: { count: number; className?: string }) => {
  return new Array(count)
    .fill("")
    .map((_) => (
      <Star
        className={`h-4 w-4 text-yellow-400 fill-yellow-400 ${className}`}
      />
    ));
};

export default Stars;
