import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-amber-100 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-green-400 wrapper h3-bold text-center inline-block text-transparent bg-clip-text sm:text-left">
            Create Event
          </h3>
        </div>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
