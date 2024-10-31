import { Button } from '@/components/button'
import { formatBytes } from '@/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: 'bg-white',
      },
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'rounded-full border-4 border-error-50 bg-error-100 p-2 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
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
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">
              {formatBytes(size, 1)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-50">
              <div
                style={{
                  width: state === 'complete' ? '100%' : '80%',
                }}
                className="h-2 w-4/5 rounded-full bg-violet-600"
              />
            </div>

            <span className="text-sm font-medium text-zinc-700">
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
