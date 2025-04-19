import { motion } from "framer-motion";
import { useNavigation } from "react-router-dom";
import Button from "../ui/Button";
export default function hero() {
  const navigate = useNavigation();
  return (
    <div className="relative overflow-hidden py-[50px] md:py-[28px] bg-gradient-to-b from-orange-500 to-blue-500 ">
      <div className="container mx-auto px-[4px] relative z-10">
        <div className="text-center max-width-3xl mx-auto">
          <div className="text-center text-[30px] md:text-[25px] font-bold text-gray-900 mb-[6px]">
            IPL 2025 <span className="text-orange-400">Live Score</span>
          </div>
          <p className="text-xl text-gray-700 mb-8">
            Stay updated with real-time scores, team standings and match
            schedules for Indian Premier.
          </p>
          <div className="flex flex-wrap justify-center gap-[4px]">
            <Button variant="primary" size="lg">
              Live Score
            </Button>
            <Button variant="outline" size="lg">
              Schedule
            </Button>
          </div>
        </div>
      </div>

      {/*bat */}
      <div className="absolute top-20 right-[10%] w-[16px] h-[16px] rounded-full bg-red-600 " />
      <div className="absolute bottom-10 left-[5%] w-[8px] h-[6px] bg-gradient-to-b from-amber-900 to-amber-700 rounded-b-lg" />
    </div>
  );
}
