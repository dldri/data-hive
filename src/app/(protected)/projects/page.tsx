import { StatusDrawing, columns } from "./columns";
import { DataTable } from "./data-table";
import { createClient } from "@/lib/supabase/client";
import { PostgrestError } from "@supabase/supabase-js";

export default async function JobStatus() {

    const supabase = createClient();

    const { data, error }: { data: StatusDrawing[] | null; error: PostgrestError | null } = (await supabase
        .from('status_drawing')
        .select('*'))

    if (error) {
        return (
            <div className="flex h-svh w-full items-center justify-center gap-2">
                Something went wrong
            </div>
        )
    }

    if (!data) {
        return (
            <div className="flex h-svh w-full items-center justify-center gap-2">
                No data available
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10">
            {/* <pre> */}
            {/*     {JSON.stringify(formattedData[0], null, 2)}; */}
            {/* </pre> */}
            <DataTable columns={columns} data={data} />
        </div>
    );
};

