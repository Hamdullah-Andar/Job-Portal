import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const JobsPageOverview = () => {
  return (
    <div className="p-6">
      <div className="flex items-end justify-end">
        <Link href={"/admin/create"}>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Job
          </Button>
        </Link>
      </div>

      {/* Data Table */}
      
    </div>
  );
};

export default JobsPageOverview;
