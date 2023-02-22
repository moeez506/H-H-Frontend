/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

interface FaqItem {
question: string;
answer: string;
}

function Faq() {
const [faqs] = useState<FaqItem[]>([ 
{
question: 'What is Lorem Ipsum?',
answer:
'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
},
{
question: 'Why do we use it?',
answer:
'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
},
{
question: 'Where does it come from?',
answer:
'Contrary to popular belief, Lorem Ipsum is not simply random text.',
}, {
question: 'Where does it come from?',
answer:
'Contrary to popular belief, Lorem Ipsum is not simply random text.',
}, {
question: 'Where does it come from?',
answer:
'Contrary to popular belief, Lorem Ipsum is not simply random text.',
}, {
question: 'Where does it come from?',
answer:
'Contrary to popular belief, Lorem Ipsum is not simply random text.',
}, {
question: 'Where does it come from?',
answer:
'Contrary to popular belief, Lorem Ipsum is not simply random text.',
}, {
question: 'Where does it come from?',
answer:
'Contrary to popular belief, Lorem Ipsum is not simply random text.',
},
]);

const [activeIndex, setActiveIndex] = useState<number | null>(null);

const handleClick = (index: number) => {
if (index === activeIndex) {
setActiveIndex(null);
} else {
setActiveIndex(index);
}
};

return (
<>
<div className="ml-64 md:w-2/3 py-5 mx-auto tabletOnly:ml-0 mobile:ml-0">
<div className="p-4">
{faqs.map((faq: FaqItem, index: number) => (
<div className="item w-[80%] border-b-2 border-solid border-orange text-orange font-bold px-6 py-4 mobile:w-[100%] tabletOnly:w-[100%]" key={index}>
<a
href="#"
className="flex items-center justify-between"
onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
e.preventDefault();
handleClick(index);
}}
>
<h4 className={activeIndex === index ? 'text-orange text-xl' : 'text-xl'}>
{faq.question}
</h4>
<svg
className={`w-10 h-10 text-orange ${
activeIndex === index ? 'transform rotate-180' : ''
}` }
fill="none"
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path d="M19 9l-7 7-7-7" />
</svg>
</a>
<div
className={`mt-3 text-gray-600 ${
activeIndex === index ? 'block' : 'hidden'
}`}
>
<p>{faq.answer}</p>
</div>
</div>
))}
</div>
</div>
</>
);
}

export default Faq;