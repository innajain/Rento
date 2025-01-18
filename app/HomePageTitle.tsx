export function HomePageTitle({ mt }: { mt?: number }) {
    mt = mt ?? 0
    return (
      <div
        className="text-white flex flex-col gap-4 items-center h-24"
        style={{ marginTop: mt }}
      >
        <span className="text-5xl font-bold tracking-wider">
          Student Centric Accommodation Platform
        </span>
        <span className="text-2xl  tracking-wider">
          affordable & comfortable living, just steps away from campus!
        </span>
      </div>
    )
  }