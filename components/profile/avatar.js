import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full mr-4">
        <Image src={picture} alt={name} width={24} height={24} />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
