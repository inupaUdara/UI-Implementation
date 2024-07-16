import React from 'react'
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import postcard1 from "../public/postcard-1.png";
import postcard2 from "../public/postcard-2.png";
import postcard3 from "../public/postcard-3.png";
import postcard4 from "../public/postcard-4.png";
import featureSheet1 from "../public/marketing-1.png";
import featureSheet2 from "../public/marketing-2.png";
import featureSheet3 from "../public/marketing-3.png";
import featureSheet4 from "../public/marketing-4.png";

const Marketing = () => {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Marketing</CardTitle>
              <p className="text-[#1655FB] cursor-pointer">View All</p>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={postcard1}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={postcard2}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Postcard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">6X4 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={postcard2}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={postcard4}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Postcard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">6X4 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={postcard3}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={postcard1}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Postcard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">6X4 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={postcard4}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={postcard3}
                        alt="news1"
                        className="h-32 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Postcard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">6X4 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={featureSheet1}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={featureSheet2}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Feature Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">16X9 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={featureSheet2}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={featureSheet4}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Feature Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">16X9 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={featureSheet3}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={featureSheet2}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Feature Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">16X9 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={featureSheet4}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={featureSheet3}
                        alt="news1"
                        className="h-100 object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <CardTitle className="text-lg">Feature Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex text-xs items-center gap-2">
                  <Badge variant="custom">16X9 Size</Badge>
                  <Badge variant="custom">2 page</Badge>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
  )
}

export default Marketing