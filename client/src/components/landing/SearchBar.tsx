import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { fadeIn } from "@/lib/animations";

export function SearchBar() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-3xl w-full mx-auto px-4 -mt-8"
    >
      <div className="relative">
        <Search className="absolute left-4 top-3 text-muted-foreground" />
        <Input 
          placeholder="Search questions..." 
          className="pl-12 h-14 text-lg rounded-full shadow-lg"
        />
      </div>
    </motion.div>
  );
}
