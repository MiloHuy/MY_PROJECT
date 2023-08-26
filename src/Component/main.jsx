import React from 'react'
import { Card, CardHeader, CardBody, Chip, Image, Input, Progress } from "@nextui-org/react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import awards from '../assets/images/awards.jpg'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarController,
    BarElement,
    DoughnutController,
    ArcElement
} from "chart.js";
import { data, data_doughnut, data_line, options, options_doughnut, options_line } from '../assets/data';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarController,
    BarElement,
    DoughnutController,
    ArcElement
);
function Main() {
    return (
        <div className='flex flex-col gap-5 p-5'>
            <div className='flex gap-5 w-screen'>
                <Input
                    type="text"
                    placeholder="Search..."
                    labelPlacement="outside"
                    size='md'
                    className='w-[200px]'
                    startContent={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    }
                />
            </div>
            <div className='relative flex flex-col'>
                <p className="text-small uppercase font-roboto font-bold flex flex-row gap-2 text-content">
                    Hey Quang Huy
                    <span className='flex hover:-translate-y-2 duration-200'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                        </svg>
                    </span>
                </p>
                <p className="text-large uppercase font-roboto font-bold mt-2">
                    You've got 82 Points
                </p>
            </div>
            <div className='flex flex-col h-max w-full max-h-[500px]  gap-4'>
                <p className="text-small uppercase font-roboto font-bold p-2">
                    Time Spendings
                </p>
                <div className='mb-0' style={{ height: '300px', width: 'full' }}>
                    <Bar data={data} options={options} />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 h-max '>
                <div className='relative flex justify-center items-center w-full h-full  '>
                    <div className='relative w-2/3 gap-12 h-full flex flex-col bg-chart rounded-[30px] p-3'>
                        <p className="text-[20px] text-text uppercase font-roboto font-bold p-2">
                            Statistics
                        </p>
                        <div className='flex justify-center items-center' style={{ height: '200px', width: 'full' }}>
                            <Doughnut data={data_doughnut} options={options_doughnut} />
                        </div>
                        <div className='h-1/4 flex flex-col justify-around mt-2 items-center gap-4 '>
                            <Chip color="success" variant="dot" >
                                <p className="text-[12px] text-text uppercase font-roboto font-bold ">
                                    60% Completed
                                </p>
                            </Chip>
                            <Chip color="success" variant="dot" >
                                <p className="text-[12px] text-text uppercase font-roboto font-bold ">
                                    10% Progress
                                </p>
                            </Chip>
                            <Chip color="success" variant="dot" >
                                <p className="text-[12px] text-text uppercase font-roboto font-bold ">
                                    30% To Start
                                </p>
                            </Chip>
                        </div>

                    </div>
                </div>
                <div className='grid grid-rows-2 gap-4'>
                    <div className='relative purple-dark '>
                        <Card
                            isBlurred
                            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] rounded-[30px] p-3"
                            shadow="sm"
                        >
                            <CardHeader className="pb-0 pt-2 px-4 items-start">
                                <p className="text-small uppercase font-bold">Awards</p>
                            </CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                                    <div className="relative col-span-6 md:col-span-4">
                                        <Image
                                            alt="Album cover"
                                            className="object-cover"
                                            height={200}
                                            shadow="md"
                                            src={awards}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="flex flex-col col-span-6 md:col-span-8">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col gap-0">
                                                <h3 className="font-roboto font-bold text-foreground/90">Level</h3>
                                                <p className="text-small font-roboto text-foreground/80">Congrarulations!</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col mt-3 gap-1">
                                            <Progress
                                                aria-label="Loading..."
                                                value={60}
                                                size="md"
                                                className="max-w-md" />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='relative purple-dark'>
                        <Card
                            isBlurred
                            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] rounded-[30px] p-3"
                            shadow="sm"
                        >
                            <CardHeader className="pb-0 pt-2 px-4 items-start">
                                <p className="text-small uppercase font-bold">Growth</p>
                            </CardHeader>
                            <div style={{ height: '200px', width: '100%' }} className='flex justify-center items-center relative w-full h-2/3'>
                                <Line data={data_line} options={options_line} />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main