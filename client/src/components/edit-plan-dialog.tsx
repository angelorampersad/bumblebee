import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditPlanForm } from "@/components/edit-plan-form";
import { PencilIcon } from "lucide-react";

interface PlanData {
  plan: {
    id: string;
    name: string;
    description: string;
    published: boolean;
    label: string;
    tier: string;
    pillar: string;
    createdAt: Date;
    updatedAt: Date;
    specifications:
      | {
          id: string;
          test: string;
          event: string;
          contexts: string[];
          planId: string | null;
        }[];
  } | null;
}

export function EditPlanDialog({ plan }: PlanData) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <PencilIcon className="mr-2 h-4 w-4" />
          Edit plan
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[1000px] overflow-y-scroll max-h-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Plan</DialogTitle>
          <DialogDescription>
            Edit the measurement plan here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <EditPlanForm plan={plan} />
      </DialogContent>
    </Dialog>
  );
}
