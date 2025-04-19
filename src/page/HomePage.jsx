import Header from "../components/Header";
import TeamStanding from "../components/TeamStanding";
import Hero from "../components/hero";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/stadium.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-scree bg-black/40">
        <div className="space-y-12 pb-12">
          <div className="bg-opacity-90">
            <Hero />
          </div>
          <div classname="bg-opacity-90">
            <TeamStanding />
          </div>
        </div>
      </div>
    </div>
  );
}
