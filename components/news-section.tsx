import React from 'react'
import news1 from "../public/news-1.png";
import news2 from "../public/news-2.png";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from './ui/button';

const News = () => {
  return (
    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 xl:col-span-1 lg:row-span-4">
        <h3 className="text-2xl font-semibold">Updated & News</h3>
        <div className="gap-4 grid grid-cols-2 lg:grid-cols-1">
          <Card className="overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-start">
              <div className="grid gap-2">
                <Image
                  src={news1}
                  alt="news1"
                  className="h-28 object-cover rounded-2xl"
                />
                <CardTitle className="group flex items-center gap-2 text-lg">
                  New real estate feature sheet and postcard Designs
                </CardTitle>
                <CardDescription>
                  We’re dedicated to empowering realestate professional with the
                  tools
                </CardDescription>
                <Button className="rounded-full bg-[#1655FB] w-full">
                  Read More
                </Button>
              </div>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-start">
              <div className="grid gap-2">
                <Image
                  src={news2}
                  alt="news1"
                  className="h-28 object-cover rounded-2xl"
                />
                <CardTitle className="group flex items-center gap-2 text-lg">
                  New real estate feature sheet and postcard Designs
                </CardTitle>
                <CardDescription>
                  We’re dedicated to empowering realestate professional with the
                  tools
                </CardDescription>
                <Button className="rounded-full bg-[#1655FB] w-full">
                  Read More
                </Button>
              </div>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-start">
              <div className="grid gap-2">
                <Image
                  src={news2}
                  alt="news1"
                  className="h-28 object-cover rounded-2xl"
                />
                <CardTitle className="group flex items-center gap-2 text-lg">
                  New real estate feature sheet and postcard Designs
                </CardTitle>
                <CardDescription>
                  We’re dedicated to empowering realestate professional with the
                  tools
                </CardDescription>
                <Button className="rounded-full bg-[#1655FB] w-full">
                  Read More
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
  )
}

export default News