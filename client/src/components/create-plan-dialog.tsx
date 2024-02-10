import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreatePlanForm } from "@/components/create-plan-form";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export function CreatePlanDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="h-8">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add plan
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[1000px] overflow-y-scroll max-h-[800px]">
        <DialogHeader>
          <DialogTitle>Create Plan</DialogTitle>
          <DialogDescription>
            Create a measurement plan here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <CreatePlanForm />
      </DialogContent>
    </Dialog>
  );
}
