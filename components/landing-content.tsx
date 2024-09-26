/*"use client";

//import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Card,CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Stanley",
    avatar: "S",
    title: "Content Writer",
    description: "I absolutely love this seamless application!",
  },
  {
    name: "Morgan",
    avatar: "M",
    title: "Digital Marketer",
    description: "Content creation for marketing is a breeze!",
  },
  {
    name: "Bridget",
    avatar: "B",
    title: "Data Analyst",
    description: "My research papers are now created in half the time",
  },
  {
    name: "Svelte",
    avatar: "S",
    title: "Sales Manager",
    description: "I am now boosting sales like never before with AI",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrbold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-white/10 border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;  */

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; // Ensure the correct import path

const testimonials = [
  {
    name: "Stanley",
    avatar: "S",
    title: "Content Writer",
    description: "I absolutely love this seamless application!",
  },
  {
    name: "Morgan",
    avatar: "M",
    title: "Digital Marketer",
    description: "Content creation for marketing is a breeze!",
  },
  {
    name: "Bridget",
    avatar: "B",
    title: "Data Analyst",
    description: "My research papers are now created in half the time.",
  },
  {
    name: "Svelte",
    avatar: "S",
    title: "Sales Manager",
    description: "I am now boosting sales like never before with AI.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description} // Using the description as a key, though it's better to have unique keys
            className="bg-white/10 border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-2">
                  {/* Optionally render avatar or initials */}
                  <div className="bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold">{item.avatar}</span>
                  </div>
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-0">
              <p className="text-zinc-300">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
