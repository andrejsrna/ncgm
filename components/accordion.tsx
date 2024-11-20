'use client';
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    {
      title: "Why Use Copyright-Free Music for Your Content?",
      content: (
        <>
          <p>
            In today’s digital landscape, music plays a crucial role in
            enhancing content, whether it is a YouTube video, Twitch stream, or
            any gaming-related media. However, using copyrighted music can lead
            to significant legal and financial issues. Here’s why copyright-free
            music is the perfect solution for content creators:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Avoid Copyright Strikes and Takedowns</strong>
              <br />
              Using copyrighted music without proper licenses can result in
              copyright strikes on platforms like YouTube and Twitch...
            </li>
            {/* More list items */}
          </ul>
        </>
      ),
    },
    {
      title: "The Role of Music in Enhancing Gameplay Experience",
      content: (
        <>
          <p>
            Music has always played a significant role in creating immersive,
            memorable gaming experiences. Whether you are exploring a vast open
            world, engaging in intense combat, or solving intricate puzzles, the
            right soundtrack can amplify your connection to the game.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Setting the Atmosphere and Mood</strong>
              <br />
              Music is a powerful tool for establishing the mood of a game...
            </li>
            <li>
              <strong>Guiding Player Emotion and Immersion</strong>
              <br />
              Music has the unique ability to influence how players emotionally
              connect to a game...
            </li>
            <li>
              <strong>Enhancing Focus and Performance</strong>
              <br />
              The right music can help players stay focused and engaged...
            </li>
            <li>
              <strong>Creating Memorable Gaming Moments</strong>
              <br />
              Iconic gaming soundtracks have a way of sticking with players long
              after the game is over...
            </li>
            <li>
              <strong>Building Immersion through Dynamic Soundtracks</strong>
              <br />
              Many modern games utilize dynamic soundtracks that adapt based on
              the current actions...
            </li>
            <li>
              <strong>Strengthening Narrative and Storytelling</strong>
              <br />
              Music plays a key role in storytelling within games...
            </li>
          </ul>
          <p className="mt-4 font-semibold">
            <strong>Conclusion:</strong>
            <br />
            Music is much more than just background noise in video games—it is an
            essential element that elevates the entire gaming experience.
          </p>
        </>
      ),
    },
    {
        title: "Licensing and Fees",
        content: (
          <>
            {
  <>
    <p>
      As a music label, we provide tracks that are completely free to use, even for commercial purposes. This means you can include our music in your YouTube videos, streams, or any other content without worrying about licensing fees or restrictions.
    </p>
    <p>
      However, if you want to access full-quality, high-resolution versions of our tracks, they are available for purchase through our store. Supporting us by purchasing these tracks helps us continue to release more music and support talented artists.
    </p>
    <ul className="list-disc pl-6">
      <li>
        <strong>Free Tracks:</strong> All our music is free for both personal and commercial use, ensuring you can focus on creating without any legal concerns.
      </li>
      <li>
        <strong>Full-Quality Tracks:</strong> Purchase higher-quality versions of our music for professional use through our store.
      </li>
    </ul>
    <p className="mt-4">
      Whether you are a casual creator or a professional, our licensing model ensures you can use our music with peace of mind.
    </p>
  </>
}

          </>
        ),
      },
      {
        title: "Where to Buy Full-Quality Tracks",
        content: (
          <>
            {
  <>
    <p>
      If you’re looking to purchase full-quality versions of our tracks, you can find them on the following platforms. Each store offers easy access to high-resolution audio files, perfect for professional use:
    </p>
    <ul className="list-disc pl-6">
      <li>
        <a href="https://www.amazon.com/music/player/artists/B0CD2BDVWG/no-copyright-gaming-music" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Amazon
        </a>
      </li>
      <li>
        <a href="https://music.apple.com/us/artist/no-copyright-gaming-music/1699748922" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          iTunes
        </a>
      </li>
    </ul>
    <p className="mt-4">
      By purchasing full-quality tracks, you not only enhance your content but also support our label and artists in creating more great music.
    </p>
  </>
}

          </>
        ),
      },
  ];

  return (
    <div id="more" className="space-y-6">
      {accordions.map((accordion, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-5"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between w-full text-lg font-semibold text-left text-gray-900"
          >
            <span>{accordion.title}</span>
            <ChevronDown
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="mt-4 space-y-4 text-gray-700">
              {accordion.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
