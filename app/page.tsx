import InvitationCard from "@/components/ui/invitation-card";

// Wedding details - can be easily customized
const weddingDetails = {
  groomName: "Arunika",
  brideName: "Darshana",
  date: "11",
  day: "Saturday",
  time: "11 AM",
  month: "April",
  year: "2026",
  venue: "Prince Banquet Hall",
  venueAddress: "Green Valley Resort",
  city: "Kurunegala",
  mapUrl:
    "https://maps.google.com/?q=Prince+Banquet+Hall+Green+Valley+Resort+Kurunegala",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0!2d80.3667!3d7.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjknMDAuMCJOIDgwwrAyMicwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-cream via-cream to-cream-dark flex items-center justify-center p-4 md:p-8">
      {/* Background pattern */}
      <div className="fixed inset-0 pattern-lotus opacity-30 pointer-events-none" />

      {/* Main invitation card */}
      <div className="relative z-10 w-full max-w-md">
        <InvitationCard details={weddingDetails} />
      </div>
    </main>
  );
}
