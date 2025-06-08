// import { createClient } from '@/lib/supabase/client'
//
// export default async function ProtectedPage() {
//
//     const supabase = createClient();
//
//     const { data: status_drawing, error: queryError } = await supabase
//         .from('status_drawing')
//         .select('*')
//     if (queryError) {
//         return (
//             <div className="flex h-svh w-full items-center justify-center gap-2">
//                 Something went wrong
//             </div>
//         )
//     }
//     return (
//         // <ul>
//         //     {
//         //         status_drawing.map((item, index) => (
//         //             <li key={index}>
//         //                 {item.job_number};
//         //             </li>
//         //         ))
//         //     }
//         // </ul>
//         <div>
//             {JSON.stringify(status_drawing)};
//         </div>
//     )
// }
