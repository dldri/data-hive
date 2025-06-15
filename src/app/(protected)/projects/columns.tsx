"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type StatusDrawing = {
    job_number: string;
    customer_po: number;
    material_number: number;
    part_number: string;
    fmg_dwg_number: string;
    revision: string;
    prok_fmg_revision: number;
    pims_revision: number;
    status: string;
    last_updated: string;
    good_to_go: boolean;
    site: string;
    po_received_date: string;
    age: number;
    person_responsible: string;
};

export const columns: ColumnDef<StatusDrawing>[] = [
    {
        accessorKey: "good_to_go",
        header: "Good to go",
    },
    {
        accessorKey: "job_number",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Job Number
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "site",
        header: "Site",
    },
    {
        accessorKey: "customer_po",
        header: "Customer PO",
    },
    {
        accessorKey: "part_number",
        header: "Part Number",
    },
    {
        accessorKey: "revision",
        header: "Revision",
    },
    {
        accessorKey: "material_number",
        header: "Material Number",
    },
    {
        accessorKey: "fmg_dwg_number",
        header: "Fortescue Drawing",
    },
    {
        accessorKey: "prok_fmg_revision",
        header: "PROK - Fortescue Revision",
    },
    {
        accessorKey: "pims_revision",
        header: "PIMS Revision",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "person_responsible",
        header: "Person Responsible",
    },
    {
        accessorKey: "last_updated",
        header: "Last Updated",
    },
    {
        accessorKey: "po_received_date",
        header: "PO Received Date",
    },
    {
        accessorKey: "age",
        header: "Age",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const job = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(job.job_number)}
                        >
                            Copy Job Number
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },];
