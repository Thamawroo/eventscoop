import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 })

  return (
    <>
    {/* My Tickets */}
    <section className="bg-amber-100 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
     <div className="wrapper flex items-center justify-center sm:justify-between">
      <h3 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-green-400 h3-bold text-center inline-block text-transparent bg-clip-text sm:text-left ml-2">Tiket Event</h3>
     </div>
     <div className="wrapper flex items-center justify-center sm:justify-between">
      <Button asChild size="lg" className="button w-full hidden sm:flex md:w-fit bg-green-400">
       <Link href="/#events">
         Jelajahi Event lainnya
       </Link>
      </Button>
      </div>
    </section>

    {/*<section className="wrapper my-8">
    <Collection
      data={events?.data}
      emptyTitle="Belum ada Tiket Event yang dibeli"
      emptyStateSubtext="Jangan khawatir - Masih banyak event-event menarik yang bisa kamu temukan!"
      collectionType="My_Tickets"
      limit={3}
      page={1}
      urlParamName='ordersPage'
      totalPages={2}
      />
  </section>*/}

    {/* Events Organized */}
    <section className="bg-amber-100 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
     <div className="wrapper flex items-center justify-center sm:justify-between">
      <h3 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-green-400 h3-bold text-center inline-block text-transparent bg-clip-text sm:text-left ml-2">Event Oleh</h3>
     </div>
     <div className="wrapper flex items-center justify-center sm:justify-between">
      <Button asChild size="lg" className="button hidden w-full sm:flex md:w-fit bg-green-400">
       <Link href="/events/create">
         Buat Event Baru
       </Link>
      </Button>
      </div>
    </section>

    *<section className="wrapper my-8">
    <Collection
      data={organizedEvents?.data}
      emptyTitle="Belum ada Event yang dibuat"
      emptyStateSubtext="Ayolah buat Event kamu sekarang"
      collectionType="Events_Organized"
      limit={3}
      page={1}
      urlParamName='eventsPage'
      totalPages={2}
      />
</section>
    </>
  )
}

export default ProfilePage