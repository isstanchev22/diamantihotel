import type { TextareaHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames'

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  error?: string
}

export function TextAreaField({
  id,
  label,
  error,
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-diamanti-navy">
        {label}
      </label>
      <textarea
        id={id}
        className={classNames(
          'min-h-32 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-diamanti-navy outline-none transition placeholder:text-diamanti-navy/45 focus:border-diamanti-sea md:text-base',
          error ? 'border-red-500' : 'border-diamanti-sand',
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
