import Image from 'next/image'
import {Inter, Instrument_Serif} from 'next/font/google'
import {RoughNotation, RoughNotationGroup} from "react-rough-notation";
import {HorizontalTicker} from "react-infinite-ticker";
import ModalVideo from 'react-modal-video'
import {useState} from "react";

import Logo from "../public/ye-removebg-preview.png"

const inter = Inter({subsets: ['latin']})
const instrumentSerif = Instrument_Serif({weight: '400', subsets: ["latin"]})

export default function Home({gpas}) {
    const [isOpen, setOpen] = useState(false)

    return (
        <main
            className={`${inter.className}`}
        >
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="R6dTdCZ50Ew" onClose={() => setOpen(false)} />
            <div className="noise">
                <div className="flex justify-between px-5 mt-6 md:px-0 mx-auto max-w-3xl ">
                    <h1 className="text-xl font-medium items-center cursor-pointer">GradePoint</h1>
                    <div className="flex gap-5 text-lg">
                        <a
                            href="https://github.com/lil-j/gradepoint/tree/master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-50 transition-all">GitHub</a>
                        <a href="https://twitter.com/messages/compose?recipient_id=813212513345015808&text=Hey%20Jake"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:opacity-50 transition-all">Contact</a>
                    </div>
                </div>
            <div
                className="px-5 md:px-0 mt-20 mx-auto max-w-3xl"
            >
                <div className="flex gap-3 items-center w-fit mb-3 py-2 rounded-full">
                    {/*<Image*/}
                    {/*  src={Logo}*/}
                    {/*  alt="GradePoint Logo"*/}
                    {/*  width={75}*/}
                    {/*  />*/}
                </div>

                <h1
                    className={`text-6xl lg:text-8xl ${instrumentSerif.className}`}
                ><RoughNotation show type="circle" strokeWidth={3} animationDelay={800}>Real</RoughNotation> Course
                    Data, embedded on
                    <span className="italic">MyPlan</span></h1>
                <h1
                    className={`mt-3 text-xl mb-10`}
                >Average GPAs by teacher and course, with RateMyProfessor ratings and reviews.
                </h1>
                <div className="flex gap-4">
                    <a
                        href="https://chrome.google.com/webstore/detail/gradepoint-myplan/ljcpnekamefmpkpmbcjbeiibdamgekab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-90 active:scale-95 transition-all flex gap-3 w-fit font-medium bg-white px-4 py-3 text-purple-600 rounded-full text-lg">
                        <img
                            className="h-6"
                            src="chrome_store.png"/>
                        <p>Get it for <RoughNotation show={false} color="purple" type="underline" strokeWidth={2}
                                                     animationDelay={2300}>free</RoughNotation></p>
                    </a>
                    <button
                        onClick={() => setOpen(true)}
                        className="hover:opacity-90 active:scale-95 transition-all flex gap-3 w-fit font-medium bg-white px-4 py-3 bg-purple-600 rounded-full text-lg">
                        {/*<img*/}
                        {/*    className="h-6"*/}
                        {/*    src="chrome_store.png"/>*/}
                        {/*Play button svg*/}
                        {/*<svg className="h-6 w-6" fill="none" stroke="white" viewBox="0 0 24 24"*/}
                        {/*        xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*            d="M5 15l7-7 7 7"/>*/}
                        {/*</svg>*/}
                        <p>See a demo</p>
                    </button>
                </div>

                <div className="flex">
                    <small className="mt-1">Join 500+ boundless students</small>
                </div>

            </div>
            </div>
            <div className="absolute bottom-0 w-screen bg-gray-900">
                <HorizontalTicker duration={25000}>
                    {
                        Object.keys(gpas).map((courseNumber, index) => {
                            return (
                                <div
                                    key={index}
                                    className="mx-4 my-3 flex items-center gap-2 text-white text-xl font-medium"
                                >
                                    <p className="whitespace-nowrap">{courseNumber}</p>
                                    <p
                                        style={{
                                            color: getGradientColor(gpas[courseNumber])
                                        }}
                                    >{gpas[courseNumber]}</p>
                                </div>
                            )
                        })
                    }

                </HorizontalTicker>
            </div>

        </main>
    )
}

export async function getStaticProps() {
    const r = await fetch("https://bhpscfcsjsqqqtovmwfk.functions.supabase.co/get-gpas-for-courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            courseNumbers: [
                "CSE 142 A",
                "CSE 142 B",
                "CSE 142 C",
                "CSE 142 D",
                "CSE 143 A",
                "CSE 143 B",
                "CSE 143 C",
                "CSE 143 D",
                "CSE 154 A",
                "CSE 154 B",
                "CSE 154 C",
                "CSE 154 D",
                "CSE 154 E",
                "INFO 201 A",
                "INFO 201 B",
                "INFO 201 C",
                "INFO 201 D",
                "INFO 200 A",
                "INFO 200 B",
                "INFO 200 C",
                "INFO 200 D",
                "INFO 200 E",
                "INFO 330 A",
                "INFO 330 B",
                "INFO 330 C",
                "INFO 330 D",
                "INFO 340 A",
                "INFO 340 B",
                "INFO 340 C",
                "INFO 340 D",
                "INFO 360 A",
                "INFO 360 B",
                "INFO 360 C",
                "INFO 360 D",
                "MATH 124 A",
                "MATH 124 B",
                "MATH 124 C",
                "MATH 124 D",
                "MATH 124 E",
                "MATH 125 A",
                "MATH 125 B",
                "MATH 125 C",
                "MATH 125 D",
                "MATH 125 E",
                "MATH 126 A",
                "MATH 126 B",
                "MATH 126 C",
                "MATH 126 D",
                "CHEM 142 A",
                "CHEM 142 B",
                "CHEM 142 C",
                "CHEM 142 D",
                "CHEM 143 A",
                "CHEM 143 B",
                "CHEM 143 C",
                "CHEM 143 D",
                "PHYS 121 A",
                "PHYS 121 B",
                "PHYS 121 C",
                "PHYS 121 D",
                "PHYS 121 A",
            ]
        })
    })
    const {data} = await r.json()
    // console.log(data)
    let averageGPAs = calculateAverageGPA(data);
    // randomize order
    averageGPAs = Object.keys(averageGPAs).sort(() => Math.random() - 0.5).reduce((obj, key) => {
        obj[key] = averageGPAs[key];
        return obj;
    }   , {});

    console.log(averageGPAs)
    return {
        props: {
            gpas: averageGPAs,
        },
        revalidate: 60 * 60 * 24 // 1 day
    }
}

function calculateAverageGPA(data) {
    // Create an object to store the sum of GPAs and count for each course
    const courseGPAData = {};

    // Iterate through each data item in the input data
    data.forEach(item => {
        // Extract the course number without the letter at the end
        const courseNumber = item.Course_Number.replace(/\s+[A-Za-z]$/, '');

        // If the course number is not already in courseGPAData, add it with the initial values
        if (!courseGPAData[courseNumber]) {
            courseGPAData[courseNumber] = {
                gpaSum: 0,
                count: 0,
            };
        }

        // Add the current item's GPA to the course's cumulative GPA sum and increment the count
        courseGPAData[courseNumber].gpaSum += item.Average_GPA;
        courseGPAData[courseNumber].count += 1;
    });

    // Calculate the average GPA for each course and store it in a new object
    const averageGPAs = {};
    for (const courseNumber in courseGPAData) {
        averageGPAs[courseNumber] = Math.round((courseGPAData[courseNumber].gpaSum / courseGPAData[courseNumber].count) * 100) / 100;
    }

    // Return the object containing the average GPAs for each course
    return averageGPAs;
}

/**
 * Get the color corresponding to the input number on a dynamic gradient scale.
 *
 * @param {number} num - The input number (between 1 and 4).
 * @return {string} The corresponding gradient color.
 */
function getGradientColor(num) {
    // Check if the input is within the valid range
    if (num < 1 || num > 4) {
        throw new Error('Invalid input: number should be between 1 and 4.');
    }

    // Calculate the color components based on the input number
    const red = Math.round(255 * (4 - num) / 3);
    const green = Math.round(255 * (num - 1.5) / 3);
    const blue = 0;

    // Convert the color components to a hex string
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    // Return the gradient color
    return rgbToHex(red, green, blue);
}