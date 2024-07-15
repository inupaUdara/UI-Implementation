"use client";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CircleCheckBig,
  ThumbsUp,
  TrendingUp,
  Calendar as CalendarIcon,
} from "lucide-react";
import * as React from "react";

const DashboardPage = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-5 xl:grid-cols-5">
      {/* leads section */}
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 justify-between">
              <CardTitle>Leads</CardTitle>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal rounded-full border-[#1655FB]",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Leads</CardDescription>
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
                <CardDescription>Total Leads</CardDescription>
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
                <CardDescription>Potential Leads</CardDescription>
                <CardTitle className="text-4xl">0</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-[#00B69B]">
                  <ThumbsUp />
                  <p>You are all caught up</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Unseen Leads</CardDescription>
                <CardTitle className="text-4xl">10</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-[#E11D48]">
                  <CircleCheckBig />
                  Check the remaining
                </div>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <p className="text-[#1655FB]">View All</p>
          </CardFooter>
        </Card>
      </div>

      {/* listings section */}
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Card className="">
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <CardTitle>Listings</CardTitle>
                  <p className="text-[#1655FB]">View All</p>
                </div>
                <div className="flex justify-end">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal rounded-full border-[#1655FB]",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
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
    </main>
  );
};

export default DashboardPage;
