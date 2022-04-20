import Image from 'next/image'
import { MailIcon } from '@heroicons/react/outline'

export default function ProfileSummary() {
  return (
    <div className='flex flex-col items-center space-y-3'>
      <Image
        src={'/assets/profile.jpg'}
        className='rounded-full'
        width='100' height='100'
      />

      <div className='flex flex-col items-center'>
        <div className='text-xl'>Joo</div>
        <div className='text-sm text-slate-400'>소프트웨어 개발을 하고 있습니다.</div>
      </div>
    </div>
  )
}
