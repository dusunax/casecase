"use client";
import MaxWidthWrapper from "../wrapper/MaxWidthWrapper";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviews;
