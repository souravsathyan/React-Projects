import AlertDialogs from "@/components/AlertDialogs";
import AlertDialogBody from "@/components/AlertDialogs";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { toast } from "sonner";

function ContactMe() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    // You can add form submission logic here if needed
  };

  return (
    <section className="w-screen flex justify-center items-center h-screen">
      <div className="flex  flex-col justify-center items-center w-screen">
        <AnimatedShinyText className="inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <h1 className="text-4xl font-bold mb-8">Let's Connect</h1>
        </AnimatedShinyText>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 p-8 rounded-lg bg-white/5 backdrop-blur-sm shadow-lg"
        >
          <Input
            name="name"
            placeholder="Enter Name"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="email"
            placeholder="Enter Email"
            type="email"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <Input
            name="phone"
            placeholder="Enter Phone"
            type="tel"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <Textarea
            name="message"
            placeholder="Enter Message"
            rows={4}
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <Button
            type="submit"
            className="w-full bg-slate-700 dark:bg-slate-50 dark:text-slate-700 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </Button>
        </form>
        <AlertDialogs open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </section>
  );
}

export default ContactMe;
