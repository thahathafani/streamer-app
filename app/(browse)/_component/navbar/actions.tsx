import { Button } from '@/components/ui/button'
import { Clapperboard } from 'lucide-react'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Actions = async() => {
    const user = await currentUser()
  return (
    <div className="flex items-center  justify-end gap-x-2 ml-4 lg:ml-0">
        {!user && (
            <SignInButton>
                <Button size="sm" className='text-white bg-blue-600'>
                    SignIn
                </Button>
            </SignInButton>
        )
        }
        {!!user && (
            <div className='flex items-center gap-x-4'>
                <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary"
                    asChild
                >
                    <Link href={`/u/${user.username}`}>
                    <Clapperboard className="h-5 w-5 lg:mr-2"/>
                    <span className="hidden lg:block">
                        Dashboard
                    </span>
                    </Link>
                </Button>
                <UserButton afterSignOutUrl='/'/>
            </div>
        )

        }
    </div>
  )
}

export default Actions