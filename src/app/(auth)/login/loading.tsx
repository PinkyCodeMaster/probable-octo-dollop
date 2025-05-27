import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Skeleton className="mx-auto h-8 w-32" />
          <Skeleton className="mx-auto h-6 w-40" />
          <Skeleton className="mx-auto h-4 w-48" />
        </div>
        <div>
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-4 w-40 mx-auto" />
      </div>
    </div>
  )
}
