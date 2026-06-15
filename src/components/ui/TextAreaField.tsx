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
    <div className="min-w-0 space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-diamanti-ink">
        {label}
      </label>
      <textarea
        id={id}
        className={classNames(
          'block min-h-32 w-full min-w-0 appearance-none rounded-xl border bg-diamanti-shell px-4 py-3 text-sm text-diamanti-ink outline-none transition placeholder:text-diamanti-ink/45 focus:border-diamanti-sea focus:ring-2 focus:ring-diamanti-sea/25 md:text-base',
          error ? 'border-diamanti-coral' : 'border-diamanti-mist/60',
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs text-diamanti-coral" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
