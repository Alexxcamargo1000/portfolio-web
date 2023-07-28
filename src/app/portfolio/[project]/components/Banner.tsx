import Image from 'next/image'

export interface BannerProps {
  image: string
}

export function Banner({ image }: BannerProps) {
  return (
    <div className="overflow-hidden animate-fade rounded-3xl drop-shadow-lg shadow-sm shadow-neutral-900  h-48 object-center w-full">
      <Image
        className="w-full h-full object-cover"
        quality={100}
        alt="website food-explorer"
        src={image}
        width={900}
        height={900}
      />
    </div>
  )
}
