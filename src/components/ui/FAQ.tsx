"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(
        "border cursor-pointer rounded-md border-gray-300 mt-5 bg-white p-4",
        isOpen && "bg-gray-200"
      )}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex-between">
        <h3 className="text-gray-900 font-semibold text-lg md:!text-xl leading-[26px] md:!leading-[30px] text-left">
          {question}
        </h3>
        <Image
          src="/icons/greaterThan.png"
          alt="arrow"
          width={22}
          height={22}
          className={cn("object-contain rotate-90", isOpen && "-rotate-90")}
        />
      </div>
      {isOpen && (
        <div className="transition-all duration-500 overflow-hidden py-4">
          <p className="text-gray-900 text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-left">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
