import AddTodo from "@/components/AddTodo";
import Bin from "@/components/Bin";
import CompletedList from "@/components/CompletedList";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative ">
      <div className="fixed inset-0 z-0 ">
        <Image
          src="/annie-spratt-Y0q-pc9t76U-unsplash.jpg"
          alt="background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="relative z-10 min-h-screen p-4 ">
        <h1 className="text-7xl text-center font-bold mb-8">TODOS</h1>
        
  
        <div className="md:grid md:grid-cols-3 gap-6 ">
  
          <div className="md:col-span-2 mb-8 md:mb-0 ">
            <TodoList />
            <AddTodo />
          </div>
          
        
          <div className="md:space-y-6 max-md:flex justify-center gap-6">
            <CompletedList />
            <Bin />
          </div>
        </div>
      </div>
    </div>
  );
}