import { Button } from '@/components/button'
import { formatBytes } from '@/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: 'bg-white dark:border-zinc-700',
      },
      complete: {
        container: 'border-violet-500 dark:border-violet-300/30',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'rounded-full border-4 border-error-50 bg-error-100 p-2 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export const FileItem = ({ name, size, state }: FileItemProps) => {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="size-4" />
      </div>
      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700 dark:text-error-400">
              Upload failed, please try again
            </span>
            <span className="text-sm text-error-600 dark:text-error-500">
              {name}
            </span>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size, 1)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-50 dark:bg-zinc-400">
              <div
                style={{
                  width: state === 'complete' ? '100%' : '80%',
                }}
                className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400"
              />
            </div>

            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}
      {state === 'complete' ? (
        <Button type="button" variant="ghost">
          <CheckCircle2 className="size-5 fill-violet-500 text-white" />
        </Button>
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="size-5" />
        </Button>
      )}
    </div>
  )
}
