import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Layout from '@/components/layout/layout'

export default function Profile() {
  return (
    <Layout>
      <div className='max-w-3xl m-4 sm:mx-auto sm:my-16'>
        <div className='flex flex-row'>
          <div className='w-1/6'>
            <Image
              src={'/assets/profile.jpg'}
              className='rounded-full' alt='Profile Image'
              width='100' height='100'
            />
          </div>

          <div className='w-5/6 py-2 sm:py-3 pl-4 sm:pl-8'>
            <div className='font-bold text-xl sm:text-3xl'>Joo</div>
            <div className='text-slate-400'>소프트웨어 개발을 하고 있습니다.</div>
            <div className='flex space-x-1 items-center'>
              <EnvelopeIcon className='h-4 w-4' />
              <span>joo@joostory.net</span>
            </div>
          </div>
        </div>
        
        <div className='sm:flex sm:flex-row'>
          <div className='sm:w-[500px] sm:pr-10'>
            <div className='my-10'>
              <h2 className='font-bold text-xl'>소개</h2>
              <p className='text-sm'>안녕하세요. 개발자 윤혁주입니다. 15년차 개발자로 카카오에서 한메일, 브런치, 티스토리, My구독 등의 서비스를 개발하였습니다.</p>
            </div>
          </div>

          <div className='sm:w-[140px]'>
            <div className='my-10'>
              <h2 className='font-bold text-md'>보유기술</h2>
              <ul>
                <li>Java</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
