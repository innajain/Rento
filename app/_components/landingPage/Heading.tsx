export function Heading({
    titleBeforeRed,
    red,
    titleAfterRed,
    subHeading,
  }: {
    titleBeforeRed: string
    red: string
    titleAfterRed: string
    subHeading?: string
  }) {
    return (
      <div className="flex flex-col gap-3">
        <p className="font-bold text-4xl">
          {titleBeforeRed} <span className="text-[#fe6f61]">{red}</span>{" "}
          {titleAfterRed}
        </p>
        {subHeading && <p className="text-[#979797] font-medium">{subHeading}</p>}
      </div>
    )
  }