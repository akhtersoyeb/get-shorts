import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UserButton } from '@clerk/nextjs'

function DashboardPage() {
  return (
    <>
      <div className='absolute top-10 right-10'>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="h-screen flex flex-col items-center justify-center space-y-10">
        <div className='w-full max-w-md flex flex-col items-center space-y-2'>
          <Label htmlFor='urlLink'>Enter the youtube video link</Label>
          <Input
            className=''
            id='urlLink'
            type='url'
            placeholder='youtube.com/watch?v=CF3Uk2jc_ig'
          />
        </div>
        <p>OR</p>
        <div className='w-full max-w-md flex flex-col items-center space-y-2'>

          <Label htmlFor='videoFile'>Upload video file</Label>
          <Input
            className=''
            id='videoFile'
            type='file'
            accept="video/*"
          />
        </div>
      </div>
    </>
  )
}

export default DashboardPage