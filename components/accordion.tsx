// components/Accordion.jsx
'use client';

import { useState } from "react";
import AccordionItem from "./AccordionItem";

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
              copyright strikes on platforms like YouTube and Twitch. These strikes
              can lead to your content being removed, your channel being monetized
              or even terminated.
            </li>
            <li>
              <strong>Monetization Safety</strong>
              <br />
              Copyright-free music ensures that you can monetize your content
              without worrying about revenue being claimed or demonetized by
              copyright holders.
            </li>
            <li>
              <strong>Creative Freedom</strong>
              <br />
              With copyright-free music, you have the flexibility to use the tracks
              as you see fit, allowing you to match the mood and tone of your
              content without restrictions.
            </li>
            <li>
              <strong>Cost-Effective</strong>
              <br />
              Purchasing licenses for copyrighted music can be expensive.
              Copyright-free music often comes at a lower cost or even for free,
              making it a budget-friendly option for creators.
            </li>
            <li>
              <strong>Wide Selection and Quality</strong>
              <br />
              There is a vast library of high-quality copyright-free music available,
              spanning various genres and styles to suit any type of content you
              create.
            </li>
            <li>
              <strong>Legal Peace of Mind</strong>
              <br />
              Using copyright-free music eliminates the risk of legal disputes
              related to music usage, allowing you to focus on creating and
              sharing your content confidently.
            </li>
            <li>
              <strong>Enhanced Audience Engagement</strong>
              <br />
              Music that complements your content can significantly enhance viewer
              engagement and retention, making your videos more enjoyable and
              professional.
            </li>
            <li>
              <strong>Consistency Across Content</strong>
              <br />
              Utilizing a consistent library of copyright-free music helps maintain
              a uniform sound and style across all your content, strengthening your
              brand identity.
            </li>
            <li>
              <strong>Easy Accessibility</strong>
              <br />
              Copyright-free music is readily accessible and easy to integrate
              into your projects, saving you time and effort in searching for the
              perfect track.
            </li>
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
          <p>
            At <strong>No Copyright Gaming Music</strong>, we believe in empowering content creators by providing high-quality music that enhances their projects without breaking the bank. Here&apos;s how our licensing and fee structure works:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Free to Use</strong>
              <br />
              All our music tracks are completely free to use in your YouTube videos, Twitch streams, podcasts, and any other gaming-related content. You can integrate our music into your projects without any licensing fees, allowing you to focus on creating engaging content without worrying about additional costs.
            </li>
            <li>
              <strong>High-Quality Downloads</strong>
              <br />
              While our music is free to use, we offer the option to purchase high-quality downloads for those who require superior audio fidelity. You can acquire full-quality versions of our tracks through reputable platforms like Amazon or iTunes. This ensures that your content benefits from the best possible sound quality, enhancing the overall viewer or listener experience.
            </li>
            <li>
              <strong>Easy Purchase Process</strong>
              <br />
              Purchasing high-quality downloads is straightforward and secure. Simply visit our store on Amazon or iTunes, select the tracks you need, and complete your purchase. Once bought, you can download the tracks and use them seamlessly in your projects.
            </li>
            <li>
              <strong>No Hidden Fees</strong>
              <br />
              Transparency is key to our licensing model. There are no hidden fees or recurring charges. The only cost involved is the one-time purchase for high-quality downloads, ensuring you know exactly what you&apos;re paying for.
            </li>
            <li>
              <strong>Flexible Licensing Terms</strong>
              <br />
              Our licensing terms are designed to be flexible and creator-friendly. Whether you&apos;re a small streamer or a large content creator, our licensing options accommodate your needs without imposing restrictive limitations.
            </li>
            <li>
              <strong>Support Independent Artists</strong>
              <br />
              By purchasing our high-quality downloads, you support independent artists who create the music you love. Your contribution helps us continue to produce and offer more exceptional tracks for the creative community.
            </li>
          </ul>
          <p>
            In summary, <strong>No Copyright Gaming Music</strong> provides a balanced approach to music licensing. Use our tracks freely to enhance your content, and opt for high-quality downloads when you need the best audio experience. We’re committed to supporting your creative journey with flexible and transparent licensing options.
          </p>
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
      },{
        title: "Will My YouTube Video or Twitch Stream Be Restricted for Monetization?",
        content: (
          <>
            <p>
              One of the biggest concerns for content creators is whether using music can affect their monetization on platforms like YouTube and Twitch. With <strong>No Copyright Gaming Music</strong>, you can rest assured that your monetization won&apos;t be restricted. Here&apos;s why:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>100% Copyright-Free</strong>
                <br />
                Our music is meticulously crafted to be free from any copyright claims. This means you can use our tracks without worrying about Content ID matches or automatic demonetization.
              </li>
              <li>
                <strong>Clear Licensing Terms</strong>
                <br />
                We provide straightforward and transparent licensing agreements that explicitly state that you have the right to monetize your content without any restrictions.
              </li>
              <li>
                <strong>No Revenue Sharing</strong>
                <br />
                Unlike some royalty-free music providers, we do not claim a portion of your revenue. The money you earn from your content remains entirely yours.
              </li>
              <li>
                <strong>Trusted by Creators</strong>
                <br />
                Many successful YouTubers and Twitch streamers use our music without experiencing any monetization issues. Join a community of creators who trust us to keep their channels running smoothly.
              </li>
              <li>
                <strong>Regularly Updated Library</strong>
                <br />
                We continuously add new tracks to our library, ensuring you have access to fresh and diverse music that keeps your content engaging and compliant with platform policies.
              </li>
              <li>
                <strong>Supportive Customer Service</strong>
                <br />
                If you ever encounter any issues or have questions about monetization, our dedicated support team is here to help you resolve them promptly.
              </li>
            </ul>
            <p>
              By choosing <strong>No Copyright Gaming Music</strong>, you&apos;re making a smart decision to safeguard your content&apos;s monetization potential. Focus on creating amazing videos and streams without the worry of unexpected restrictions or revenue loss.
            </p>
          </>
        ),
      },
      {
        title: "What Kind of Music Do You Have?",
        content: (
          <>
            <p>
              At <strong>No Copyright Gaming Music</strong>, we pride ourselves on offering a diverse library of tracks tailored to suit every gaming atmosphere and content creator&apos;s needs. Our collection spans a wide range of genres to ensure that you find the perfect soundtrack for your projects.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Chill Ambient:</strong> Perfect for creating a relaxing and immersive backdrop for exploration and storytelling.
              </li>
              <li>
                <strong>Deep Bass Drum and Bass:</strong> High-energy tracks that elevate intense gaming moments and action-packed sequences.
              </li>
              <li>
                <strong>Uplifting Melodic:</strong> Inspiring melodies that enhance positive vibes and engaging gameplay.
              </li>
              <li>
                <strong>High-Energy Techno:</strong> Fast-paced rhythms ideal for adrenaline-pumping scenarios and competitive streams.
              </li>
              <li>
                <strong>Synthwave:</strong> Retro-futuristic sounds that add a nostalgic yet modern touch to your content.
              </li>
              <li>
                <strong>Epic Orchestral:</strong> Grand compositions that bring a cinematic quality to epic in-game battles and narratives.
              </li>
            </ul>
            <p className="mt-4 text-gray-200">
              Whether you&apos;re looking to set a serene mood or pump up the energy levels, our extensive range ensures that your gaming content resonates with your audience. Explore our collection and find the perfect tracks that align with your creative vision.
            </p>
          </>
        ),
      },
  ];

  return (
    <div id="more" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-destructive mb-8">Frequently Asked Questions</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg">
      {accordions.map((accordion, index) => (
          <AccordionItem
            key={index}
            id={index}
            title={accordion.title}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
            content={accordion.content}
          />
        ))}
      </div>
    </div>
  );
}
