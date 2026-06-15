import type { InputHTMLAttributes } from 'react'
import { classNames } from '../../lib/classNames'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
}

export function FormField({ id, label, error, className, ...props }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-diamanti-ink">
        {label}
      </label>
      <input
        id={id}
        className={classNames(
          'min-h-[44px] w-full rounded-xl border bg-diamanti-shell px-4 py-3 text-sm text-diamanti-ink outline-none transition placeholder:text-diamanti-ink/45 focus:border-diamanti-sea focus:ring-2 focus:ring-diamanti-sea/25 md:text-base',
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
