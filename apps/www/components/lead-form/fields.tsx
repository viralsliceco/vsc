// Minimal themed form primitives. We don't pull in shadcn's full <Input />
// here because (a) the project only ships <Button>, and (b) these need to
// match the existing dark-on-black aesthetic of the rest of the site.

"use client";

import * as React from "react";

const baseField =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 " +
  "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-zinc-200 mb-1.5">
      {children}
      {required && <span className="text-primary ml-1">*</span>}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-400">{message}</p>;
}

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & { error?: string };
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ error, className, ...rest }, ref) {
    return (
      <input
        ref={ref}
        className={`${baseField} ${error ? "border-red-500/60 focus:border-red-500" : ""} ${className ?? ""}`}
        {...rest}
      />
    );
  },
);

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: readonly string[];
  placeholder?: string;
  error?: string;
};
export function Select({ options, placeholder = "Select…", error, className, ...rest }: SelectProps) {
  return (
    <select
      className={`${baseField} appearance-none ${error ? "border-red-500/60" : ""} ${className ?? ""}`}
      {...rest}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string };
export function TextArea({ error, className, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={`${baseField} resize-y min-h-[110px] ${error ? "border-red-500/60" : ""} ${className ?? ""}`}
      {...rest}
    />
  );
}
