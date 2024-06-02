"use client";

import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { COLORS, DesignOptions } from "@/validators/option-validator";

const ColorRadioGroup = ({
  optionChange,
  options,
}: {
  optionChange: (attr: Partial<DesignOptions>) => void;
  options: DesignOptions;
}) => {
  return (
    <RadioGroup
      value={options.color}
      onChange={(value) => optionChange({ color: value })}
    >
      <Label>Color: {options.color.label}</Label>
      <div className="mt-3 flex items-center space-x-3">
        {COLORS.map((color) => (
          <Field key={color.label}>
            <Radio
              value={color}
              className={`${cn(
                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent",
                {
                  [`border-${color.tw}`]: options.color === color,
                }
              )}`}
            >
              <span
                className={cn(
                  `bg-${color.tw}`,
                  "h-8 w-8 rounded-full border border-black border-opacity-10"
                )}
              />
            </Radio>
          </Field>
        ))}
      </div>
    </RadioGroup>
  );
};

export default ColorRadioGroup;
