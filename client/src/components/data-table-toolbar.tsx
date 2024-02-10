"use client";

import { useRouter } from "next/navigation";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/data-table-view-options";

import { tiers, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { CreatePlanDialog } from "@/components/create-plan-dialog";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const router = useRouter();
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("published") && (
          <DataTableFacetedFilter
            column={table.getColumn("published")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("tier") && (
          <DataTableFacetedFilter
            column={table.getColumn("tier")}
            title="Tier"
            options={tiers}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <CreatePlanDialog />
    </div>
  );
}
