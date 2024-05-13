import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const events = await getAllEvents({
    query: '',
    category: '',
    page: 1,
    limit: 6
  });

  console.log(events)

  return (
    <>
    <section className="bg-amber-100 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="flex flex-col justify-center gap-10">
       <h1 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-green-400 h1-bold inline-block text-transparent bg-clip-text ">Pesta? Konser? Seminar? Temukan Keajaiban pada Setiap Acara di Platform kami.
       </h1>
       <p className="p-regular-20 md:p-regular-24 text-slate-500">Ayo Bergabung dalam Kegembiraan. Biar Kami Yang Mengatur, Kamu Yang Menikmati Event Pilihanmu!</p>
       <Button size="lg" asChild className="button w-full sm:w-fit bg-green-400">
        <Link href="#events">
          Jelajahi Sekarang
        </Link>
       </Button>
      </div>
      <Image 
      src="/assets/images/hero2.png"
      alt="hero"
      width={1000}
      height={1000}
      className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />
      </div>
    </section>  
   
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-green-400 h2-bold inline-block text-transparent bg-clip-text mb-[-30px]">Acara Mendatang</h2>
      <h2 className="text-2xl text-slate-500">Berikut adalah berbagai event terbaru kami, salah satunya mungkin menarik minatmu</h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search
        {' '}
        Category
        {' '}
        Filter
        {' '}
      </div>

      <Collection
      data={events?.data}
      emptyTitle="Tidak Ada Event"
      emptyStateSubtext="Kembali Lagi Nanti"
      collectionType="All_Events"
      limit={6}
      page={1}
      totalPages={2}
      />
    </section>
  
    </>
  );
}
