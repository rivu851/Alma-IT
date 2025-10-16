import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

// LinkedIn-style loading skeletons
export const ProfileCardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("card-3d bg-card rounded-xl p-6 border", className)}>
    <div className="flex items-start gap-4 mb-4">
      <Skeleton className="w-16 h-16 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
    <div className="mb-4 space-y-2">
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-40" />
      </div>
      <div className="ml-6">
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
    <div className="mb-4 space-y-2">
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-3 w-28" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
    <div className="mb-4 flex flex-wrap gap-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-6 w-18 rounded-full" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-9 flex-1" />
      <Skeleton className="h-9 w-9" />
    </div>
  </div>
);

export const EventCardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("card-3d bg-card rounded-xl overflow-hidden border", className)}>
    <Skeleton className="h-48 w-full" />
    <div className="p-6">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-4" />
      <div className="space-y-3 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-8" />
        </div>
        <Skeleton className="h-2 w-full rounded-full" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-9 flex-1" />
        <Skeleton className="h-9 w-9" />
      </div>
    </div>
  </div>
);

export const JobCardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("card-3d bg-card rounded-xl p-6 border", className)}>
    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
      <div className="flex items-start gap-4">
        <Skeleton className="w-16 h-16 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-48" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-3 w-40" />
        </div>
      </div>
      <div className="flex-1 space-y-3">
        <Skeleton className="h-4 w-full" />
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-18 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-48">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  </div>
);

export const NewsCardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("card-3d bg-card rounded-lg p-4 border", className)}>
    <Skeleton className="h-5 w-20 rounded-full mb-3" />
    <Skeleton className="h-5 w-full mb-2" />
    <Skeleton className="h-4 w-full mb-3" />
    <div className="flex items-center justify-between mb-3">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-3 w-20" />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Skeleton className="h-3 w-3" />
          <Skeleton className="h-3 w-4" />
        </div>
        <div className="flex items-center gap-1">
          <Skeleton className="h-3 w-3" />
          <Skeleton className="h-3 w-4" />
        </div>
      </div>
      <Skeleton className="h-8 w-12" />
    </div>
  </div>
);

export const FeaturedNewsCardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("card-3d bg-card rounded-xl overflow-hidden border", className)}>
    <Skeleton className="h-64 w-full" />
    <div className="p-6">
      <Skeleton className="h-5 w-20 rounded-full mb-3" />
      <Skeleton className="h-7 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-4" />
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-6" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-6" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  </div>
);

export const LoadingSpinner = ({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div className={cn("animate-spin rounded-full border-2 border-muted border-t-primary", sizeClasses[size], className)} />
  );
};

export const ContentLoader = ({ 
  isLoading, 
  skeleton, 
  children 
}: { 
  isLoading: boolean; 
  skeleton: React.ReactNode; 
  children: React.ReactNode 
}) => {
  if (isLoading) {
    return <>{skeleton}</>;
  }
  return <>{children}</>;
};