import * as React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
    TrendingUp,
    Calendar as CalendarIcon,
  } from "lucide-react";

const Listing = () => {
    const [dateRange, setDateRange] = React.useState<{ from: Date; to: Date}>({ from: new Date(), to: new Date("2024-07-20") });
    
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3 xl:col-span-2">
        <Card className="">
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <CardTitle>Listings</CardTitle>
                <p className="text-[#1655FB] cursor-pointer">View All</p>
              </div>
              <div className="flex justify-end">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal rounded-full border-[#1655FB]",
                        !dateRange && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateRange ? `${format(dateRange.from, "PPP")} - ${format(dateRange.to, "PPP")}` : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Listings Viewed</CardDescription>
                <CardTitle className="text-4xl">100</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <TrendingUp />
                  <p>
                    <span className="text-[#00B69B]">8.5%</span> Up from
                    yesterday
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Forms Submitted</CardDescription>
                <CardTitle className="text-4xl">80</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <TrendingUp />
                  <p>
                    <span className="text-[#00B69B]">8.5%</span> Up from
                    yesterday
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader className="pb-2">
                <CardDescription>VDW Logins</CardDescription>
                <CardTitle className="text-4xl">80</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <TrendingUp />
                  <p>
                    <span className="text-[#00B69B]">8.5%</span> Up from month
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
  )
}

export default Listing